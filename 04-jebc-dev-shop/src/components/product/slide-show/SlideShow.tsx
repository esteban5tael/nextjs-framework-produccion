"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperObject } from "swiper";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

import "swiper/css";
import Image from "next/image";
interface Props {
    images: string[];
    title: string;
    className?: string;
}
export const SlideShow = ({ images, title, className }: Props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
    return (
        <>
            <div className={className}>
                <Swiper
                    style={
                        {
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        } as React.CSSProperties
                    }
                    spaceBetween={10}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                    }}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs,Autoplay]}
                    className="mySwiper2"
                >
                    {images.map((image,index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={`/products/${image}`}
                                    alt={title}
                                    fill
                                    className="rounded-lg object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {images.map((image,index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={`/products/${image}`}
                                    alt={title}
                                    fill
                                    className="rounded-lg object-cover"
                                    sizes="(max-width: 768px) 25vw, 20vw"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};
