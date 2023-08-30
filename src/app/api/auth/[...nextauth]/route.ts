import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

type User = {
  id: string,
  name: string, 
  email: string,
  password: string,
  image: string
}


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials,req){
        
        const user: User = {
          id: "1",
          name: 'keiner', 
          email: 'keiner@mail.com',
          password: '1234567',
          image: 'pendiente'
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
      session.user = token.user as User;
      return session;
    }
  },
  pages: {
    signIn: "/login"
  }
})

export {handler as GET, handler as POST}