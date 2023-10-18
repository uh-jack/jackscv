"use client";
import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "jcomputers",
        description: "jcomputers.uk is a start-up business I founded during university, its essentially a custom computer shop, you choose the parts. I'll build it for you for £50. This is a passion project derived from years of experience and its something that I am genuinely enthusiastic about.",
        image: "/images/jcomputers.gif",
        gitUrl: "https://www.jcomputers.uk",
        previewUrl: "https://www.jcomputers.uk",
    },
    {
        id: 2,
        title: "Next.js Portfolio Website",
        description: "This website you're looking at right now! I built this from the ground up and it took me a very long time to make, so its something I'd like to show off here, take a look at the source code if you're interested.",
        image: "/images/nextjs.png",
        gitUrl: "https://github.com/uh-jack/jackscv",
        previewUrl: "https://jackscv.com"
    },
    {
        id: 3,
        title: "Python-based Product Assets Inventory System",
        description: "I made this during my job as a Website-Project Coordinator at Downland Marketing and it essentially scans the entire filesystem and reveals if a product is missing any assets or if they are low-quality/old and gave the option to export the entire output to a text file. I did a lot of automation at my job and it made working more interesting but sometimes quite stressful...",
        image: "/images/downland.png",
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Three.js Animations",
        description: "This is an ongoing project but I am slowly learning and understanding Three.js to make websites and apps more interactive and interesting to developing audiences, the morphing sphere at the top of the page is a good example of Three.js.",
        image: "/images/three.png",
        gitUrl: "/",
        previewUrl: "/"
    },

]

export const ProjectSection = () => {
    const ref= useRef(null);
    const isInView = useInView(ref, { once: true});
    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y:0, opacity: 1},
    }


    return (
        <section ref={ref}>
            <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 relative rounded-xl overflow-hidden mx-4 md:mx-0">
                {projectsData.map((project, index) => (
                    <motion.li 
                    key={index}
                    variants={cardVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial"}
                    transition={{duration: 0.3, delay: index * 0.4}}
                >
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                </motion.li>
                
                ))}
            </div>
        </section>
    );
};


export default ProjectSection