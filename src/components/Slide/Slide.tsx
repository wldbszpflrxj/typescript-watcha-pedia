import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Styled from "./Slide.styled";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const DEFAULT_SETTINGS: Settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  swipe: true,
  draggable: true,
  prevArrow: (
    <Styled.ArrowButton>
      <MdArrowBackIos />
    </Styled.ArrowButton>
  ),
  nextArrow: (
    <Styled.ArrowButton>
      <MdArrowForwardIos />
    </Styled.ArrowButton>
  ),
};

interface Props {
  settings?: Settings;
  children: React.ReactNode;
}

const Slide: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default Slide;
