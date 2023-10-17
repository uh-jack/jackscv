import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/css';
import { motion } from "framer-motion";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';

SwiperCore.use([Navigation]);

const images = [
    { src: '/images/half.png', text: 'In 2023, I ran the Great Manchester Run half marathon. Was a fantastic achievement and is something that I am looking to one-up in 2024 with the Manchester Marathon (26.2 Miles).' },
    { src: '/images/milan.jpg', text: 'I got the fantastic opportunity to recieve international training for Consultancy Case Competitions in Milan with Babeș-Bolyai University. I had a wonderful time there meeting new people and learning about Case competitions which I would later use in real competitions in the future.' },
    { src: '/images/westhighlandway.jpg', text: 'In 2022, me and my friends completed the West Highland Way, a walking trail spanning over 90 miles through the Southern and Western Highlands of Scotland, from Glasgow to Fort William.' },
    { src: '/images/cbs.jpg', text: 'I and my team shown here took part in the CBS (Copenhagen Business School) Case Competition in 2023, the competition lasted for 24 hours with us staying on campus from 6am until security had to throw us out. We were consulting for Ørsted the sustainable energy multinational and made a brilliant presentation in the 24 hours alloted. It was a fascinating and tough experience that I am looking forward to trying again.'},
    { src: '/images/camping.jpg', text: 'I enjoy camping a lot coming from Cumbria, I am at the doorstep of nature and getting out there is something I am very passionate about.' },
    { src: '/images/netherlands.jpg', text: 'I got invited to network in Amsterdam and Groningen as an ambassador for the Manchester Metropolitan University, I got to talk to Hanze Univeristy about their student exchange program and got to meet so many new people.' },
    { src: '/images/farming.jpg', text: 'This summer I went to Cambridge to live and work on a massive field, weeding black grass from massive rows of barley. Me and my friend Louie worked 11 hour shifts non-stop for 2 weeks to make good money for summer, was also very good exercise.' },
    { src: '/images/cumbriaway.jpg', text: 'I have also walked the Cumbria Way, a 71-mile long-distance footpath. Much of the route lies inside the boundaries of the Lake District National Park, linking the two historic Cumbrian towns of Ulverston and Carlisle, the Cumbria Way passes through the towns of Coniston and Keswick.'},
];

export const Stuff = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-10 px-5">
            <h2 className="text-center text-4xl font-bold text-white mt-4">What I get up to</h2>

            <div className="container mx-auto p-4 mt-6 rounded-xl max-w-5xl bg-transparent">
                <div className="lg:grid lg:grid-cols-2 grid-cols-1 lg:gap-8">
                    <div className="relative mb-4 lg:mb-0 aspect-w-16 aspect-h-9">
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={({ activeIndex }) => setCurrentSlide(activeIndex)}
                            navigation={true}
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <Image src={image.src} alt={image.text} layout="fill" objectFit="cover" className="rounded-lg" />
                                </SwiperSlide>
                            ))}
                            <div
                                className="swiper-button-next z-10 absolute top-1/2 right-4 transform -translate-y-1/2"
                                onClick={() => swiperRef.current?.swiper?.slideNext()}
                            >
                                <motion.div whileHover={{ scale: 1.1 }} className="h-6 w-6 text-white">
                                    <ArrowRightIcon className="h-6 w-6" />
                                </motion.div>
                            </div>
                            <div
                                className="swiper-button-prev z-10 absolute top-1/2 left-4 transform -translate-y-1/2"
                                onClick={() => swiperRef.current?.swiper?.slidePrev()}
                            >
                                <motion.div whileHover={{ scale: 1.1 }} className="h-6 w-6 text-white">
                                    <ArrowLeftIcon className="h-6 w-6" />
                                </motion.div>
                            </div>
                        </Swiper>
                    </div>

                    <div className="lg:p-4 mt-1 lg:mt-8">
                        <p className="text-base md:text-lg text-white">{images[currentSlide].text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stuff;