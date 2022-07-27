import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Carousel = ({ children }) => {
  const carouselSettings = {
    className: "carousel slick-list slick-track",
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 9000,
  };

  return (
    <>
      <Slider {...carouselSettings}>{children}</Slider>
      <style>{`
        .carousel {
          max-width: 700px;
        }
        .slick-list {
          padding: 8px 0;
          position: unset;
        }
        .slick-track {
          position: unset;
          margin-left: 0;
          margin-right: 0;
        }
        .slick-slider{
          position: unset;
        }
        `}</style>
    </>
  );
};

export default Carousel;
