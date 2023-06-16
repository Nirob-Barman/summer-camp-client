import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src="https://img.freepik.com/free-photo/male-soccer-football-player-training-action-isolated-gradient-studio-neon-light_155003-15990.jpg"
                        alt="FootBall Player"
                        border="0"
                        className="object-fill max-h-screen w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://img.freepik.com/premium-vector/cartoon-cute-boy-playing-basketball_70172-2062.jpg"
                        alt="Basket Player"
                        border="0"
                        className="object-fill max-h-screen w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://img.freepik.com/free-vector/sketches-boy-playing-cricket-different-colors_1308-85397.jpg"
                        alt="Cricket Player"
                        border="0"
                        className="object-fill max-h-screen w-full"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
