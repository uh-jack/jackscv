"use client";
import React, { useState, useTransition } from 'react';
import Image from "next/image";
import TabButton from './TabButton';


const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul>
                <li>React.js</li>
                <li>Three.js</li>
                <li>Python</li>
                <li>Excel</li>
            </ul>
        )
    },
    {
        title: "education",
        id: "education",
        content: (
            <ul>
                <li>Final Year Business Management student and Course Representative at MMU</li>
                <li>Business Studies A-Level</li>
                <li>Psychology A-level</li>
                <li>Media Studies (Film and TV) BTEC</li>
            </ul>
        )
    },
    {
        title: "experience",
        id: "experience",
        content: (
            <ul>
                <li>Website-project coordination at Downland Marketing Ltd.</li>
                <li>Web Development for my start-up business as part of my degree.</li>
                <li>International training for consultancy in Milan, and competing at Case Competitions such as Copenhagen Business School.</li>
            </ul>
        )
    },

]

const AboutMe = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
                <Image src="/images/me.jpg" width={1763} height={941} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">I am a web developer with a passion for creating interactive and responsive web applications. I have experience in working with Javascript, Python, React, Node, HTML and CSS. I am a quick learner and I am always looking for a new challenge to expand my knowledge and skill set.</p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Education {" "} </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}> {" "}Experience {" "} </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id ===tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
