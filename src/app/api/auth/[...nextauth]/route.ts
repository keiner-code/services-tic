import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createClient } from "@vercel/postgres";
import bcrypt from 'bcrypt'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const client = createClient();
        await client.connect();
        try {
          const { rows } =
            await client.sql`SELECT * FROM users WHERE email = ${credentials?.email}`;
            const match = bcrypt.compareSync(credentials?.password,rows[0].password,)
          if (rows.length === 1 && match) {
            return {
              id: rows[0].user_id,
              name: rows[0].name,
              email: rows[0].email,
              image: rows[0].image,
              password: rows[0].password,
              rol: rows[0].rol,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error de la base de datos:", error);
          return null;
        } finally {
          await client.end();
        }
      },
    }),
  ],
  callbacks: {
    jwt({ account, token, user, profile, session }) {
      if (user) token.user = user;
      return token;
    },
    session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/register",
  },
});

export { handler as GET, handler as POST };
