"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface SwiperProjectBtnsProps {
  btnStyle?: string;
  containerStyle?: string;
  iconStyle?: string;
}

const SwiperProjectBtns: React.FC<SwiperProjectBtnsProps> = ({
  btnStyle,
  containerStyle,
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={btnStyle} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default SwiperProjectBtns;
