"use client"
// import{useSwiper} from "swiper/react"
import {PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi"
import { useSwiper } from "swiper/react";
const SwiperProjectBtns = ({btnStyle, containerStyle, iconStyle}) => {
    const swiper = useSwiper()
    return (
        <div className={containerStyle}>
            <button className={btnStyle} onClick={()=> swiper.slidePrev()}><PiCaretLeftBold/></button>
            <button className={btnStyle} onClick={()=> swiper.slideNext()}><PiCaretRightBold/></button>
        </div>
    );
};

export default SwiperProjectBtns;