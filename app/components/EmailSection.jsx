"use client";
import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";

export const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const rawText = await response.text();  // Read raw text

        console.log("Raw Response:", rawText);  // Log raw text

        if (response.headers.get('content-type')?.includes('application/json')) {
            const resData = JSON.parse(rawText);  // Parse it manually
            console.log("Parsed JSON:", resData);
        } else {
            console.error("Received non-JSON response:", rawText);
        }

        if (response.status === 200) {
            setEmailSubmitted(true);
        }




    }
    return (
        <section className='grid md:grid-cols-2 my-12 py-24 md:my-12 gap-4 relative px-8 md:px-16'>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className='z-5'>
                <h5 className='text-xl font-bold text-white mb-4'>Let's Connect</h5>
                <p className='text-sm text-[#ADB7BE] mb-6 max-w-md'>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <div className='socials flex flex-row gap-2'>
                    <Link
                        href="https://www.linkedin.com/in/jacklaverick/"
                        target="_blank"
                        rel="noopener noreferrer"
                        passHref
                    >
                        <Image src="/images/linkedin.png" alt="Linkedin Icon" width={30} height={30} />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col space-y-6' onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="email" className="text-sm text-white block mb-2">
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353f] placeholder-[#7B8189] text-gray-100 text-sm rounded-lg block w-full py-2 px-4"
                            placeholder="hello.world@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="text-sm text-white block mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            className="bg-[#18191E] border border-[#33353f] placeholder-[#7B8189] text-gray-100 text-sm rounded-lg block w-full py-2 px-4"
                            placeholder="Just saying hi"
                        />
                    </div>

                    <div>
                        <label htmlFor='message' className='text-sm text-white block mb-2'>
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            className="bg-[#18191E] border border-[#33353f] placeholder-[#7B8189] text-gray-100 text-sm rounded-lg block w-full py-2 px-4"
                            placeholder="Let's talk about ..."
                        />
                    </div>
                    {/* Added rows for a better default height */}

                    <button
                        type="submit"
                        className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-5 rounded-lg w-full transition duration-200'>
                        Send Message
                    </button>

                    {
                        emailSubmitted && (
                            <p className='text-green-500 mt-4'>Email sent successfully!</p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection;
