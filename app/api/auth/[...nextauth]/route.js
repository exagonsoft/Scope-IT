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
    callbacks: {
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

                if (!userExist) {
                    let _username = profile.name.trim()
                    _username = _username.replace(/\s+/g, "")
                    _username = _username.toLowerCase()
                    console.log("Current username: ",_username);
                    await User.create({
                        email: profile.email,
                        username: _username,
                        image: profile.picture
                    })
                }

                return true
            } catch (error) {
                console.log(error);
                return false
            }
        }
    }

})

export { handler as GET, handler as POST }