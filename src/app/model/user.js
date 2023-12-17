import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "email is required"],
            trim: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
            trim: true,
            minlength: [7, "password should be at least 7 characters long"],
            maxlength: [20, "password should be at max 20 characters long"],
        },
    },
    {
        timestamps: true,
    }
);

//If the User collection does not exist create a new one.
export default mongoose.models.User || mongoose.model("User", userSchema);
