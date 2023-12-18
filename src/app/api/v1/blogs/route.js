import BlogModel from "@/app/model/Blog";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

// Get All Blogs
export const GET = async (req) => {
    try {
        await connectDB();

        const { searchParams } = new URL(req.url);
        if (searchParams.size) {
            let value = searchParams.get("filter");
            if (value === "latest") {
                const data = await BlogModel.find({})
                    .sort({ createdAt: -1 })
                    .limit(1);
                return NextResponse.json({ data }, { status: 200 });
            }
        } else {
            const data = await BlogModel.find({});

            return NextResponse.json({ data }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json(
            { message: "something wrong", error: error.message },
            { status: 400 }
        );
    }
};

// Add Blog
export const POST = async (req) => {
    try {
        await connectDB();

        const body = await req.json();

        const isBlogExist = await BlogModel.find({ title: body.title });

        if (isBlogExist.length) {
            return NextResponse.json(
                { message: "Blog title already exists" },
                { status: 401 }
            );
        } else {
            const newBlog = new BlogModel(body);
            const result = await newBlog.save();

            return NextResponse.json(
                { message: "Blog created", data: result },
                { status: 201 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { message: "something wrong", error: error.message },
            { status: 400 }
        );
    }
};
