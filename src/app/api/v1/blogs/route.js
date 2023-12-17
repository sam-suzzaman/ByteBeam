import post from "@/app/model/post";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async (requrest) => {
    try {
        await connectDB();

        const data = await post.find({});

        return NextResponse.json(
            { message: "blog list", data },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "something wrong", error: error.message },
            { status: 400 }
        );
    }
};
