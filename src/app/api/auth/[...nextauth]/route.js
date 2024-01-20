import NextAuth from "next-auth"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
     
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
    
        const res = await fetch("/api/auth", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
  
        if (res.ok && user) {
          return res.json('ok')
        }
        return null
      }
    })
  ]
})

export { handler as GET, handler as POST }