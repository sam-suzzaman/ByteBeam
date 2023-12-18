import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Blog title required"],
        },
        description: {
            type: String,
            required: [true, "Blog description required"],
        },
        thumb: {
            type: String,
            required: [true, "Enter valid blog thumb url"],
        },
        // username: {
        //     type: String,
        //     required: true,
        // },
    },
    { timestamps: true }
);

//If the blog collection does not exist create a new one.
export default mongoose.models.blog || mongoose.model("blog", blogSchema);
