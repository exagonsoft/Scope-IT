import User from "@models/user"
import { connectToDB } from "@utils/database"
import bcrypt from "bcrypt";

const { NextResponse } = require("next/server")

export const POST = async (req) => {
    try {
        const { name, lastname, email, password, image } = await req.json()
        let _hashedPass = await bcrypt.hash(password, 10)
        await connectToDB()
        await User.create({name: name, lastname: lastname, email: email, password: _hashedPass, image: image})

        return NextResponse.json({ message: "User register Successfully", status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error during register process", status: 500})
    }

}