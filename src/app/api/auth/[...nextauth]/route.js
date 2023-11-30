import { users } from "@/helpers/users";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Creds",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Enter your Email",
        },
        password: {
          label: "Password",
          placeholder: "Enter your Password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        console.log("__credentials", credentials);
        const user = users.find((user) => user.email === credentials.email);

        if (user?.password === credentials?.password) {
          return user;
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
