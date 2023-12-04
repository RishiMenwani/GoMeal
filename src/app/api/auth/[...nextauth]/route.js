import { connectToDatabase } from "@/helpers/serverConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { useRouter } from "next/navigation";

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
        try {
          const route = useRouter();
          await connectToDatabase();
          console.log("__credentials", credentials);
          const user = await prisma.user.findFirst({
            where: { email: credentials.email },
          });

          if (!user?.hashedPassword) {
            return null;
          }

          console.log("__user from nextAuth", user);
          const isPasswordCorrect = bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );
          if (isPasswordCorrect) {
            return user;
          }
        } catch (error) {
          console.log(error);
          return null;
        } finally {
          await prisma.$disconnect();
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
