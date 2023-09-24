import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { connectToDB } from "@utils/database";
import User from "@models/user";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {
        try {
            const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString();

            return session;
        } catch (error) {
            console.log(error);
        }
    },
    async signIn({ profile }) {
        try {
            await connectToDB();

            const userExist = await User.findOne({
                email: profile.email
            })

            if(!userExist){
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase,
                    image: profile.picture
                })
            }

            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
})

export { handler as GET, handler as POST }