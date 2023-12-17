import Loader from "@/components/Loader/Loader";
import React from "react";

const Loading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Loader />
        </div>
    );
};

export default Loading;
