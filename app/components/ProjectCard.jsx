import React from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div className="group relative rounded-xl overflow-hidden">
            <div
                className="h-40 md:h-52 lg:h-72 bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${imgUrl})` }}
            ></div>
            <div className='overlay justify-center items-center space-x-4 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                <Link
                    href={gitUrl}
                    target="_blank"
                    className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] group-hover:border-white'>
                    <CodeBracketIcon className="h-10 w-10 mr-2 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white group/link" />
                </Link>
                <Link
                    href={previewUrl}
                    target="_blank"
                    className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] group-hover:border-white'>
                    <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white group/link" />
                </Link>
            </div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-4 px-4">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard
