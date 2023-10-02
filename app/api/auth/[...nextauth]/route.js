import User from "@models/user";
import { connectToDB } from "@utils/database";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectToDB();
          let user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          let _passwordsMatch = await bcrypt.compare(password, user.password);

          if (!_passwordsMatch) {
            return null;
          }

          return user
          
        } catch (error) {
            console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    signOut: { callbackUrl: 'http://localhost:3000/' },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
