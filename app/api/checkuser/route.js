import User from "@models/user";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const { email } = await req.json()
        const user = await User.findOne({email}).select("_id")
        return NextResponse.json({user})
    } catch (error) {
        console.log(error);
    }
}