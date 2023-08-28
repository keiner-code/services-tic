import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials,req){
        const user = {
          id: "1",
          fullname: 'keiner', 
          email: 'keiner@mail.com',
          password: '1234567'
        }
        
        if(credentials?.email === user.email && credentials.password === user.password){
          return user;
        }else{
          throw new Error("Invalid credenciales")
        }
      }
    })
  ],
  callbacks: {
    jwt({account, token, user, profile, session}){
      if (user) token.user = user;
      return token
    },
    session({session, token}){
      session.user = token.user as any;
      return session;
    }
  },
  pages: {
    signIn: "/login"
  }
})

export {handler as GET, handler as POST}