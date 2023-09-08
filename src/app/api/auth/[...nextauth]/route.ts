import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { pool } from "@/database/config";
import { RowDataPacket } from "mysql2";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const connection = await pool.getConnection();
        try {
          const [rows] = (await connection.query(
            "SELECT * FROM users WHERE email = ?",
            [credentials?.email]
          )) as RowDataPacket[];

          if (rows.length === 1 && credentials?.password === rows[0].password) {
            return rows[0];
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error de la base de datos:", error);
          return null;
        } finally {
          connection.release();
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
      return session
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/register"
  },
});

export { handler as GET, handler as POST };
