import React from "react";
import Slider from "react-slick";
import { ILoginImage } from "./interface/ILoginImage";
import "./LoginSliderStyle.css";

interface Props {
  loginImage: ILoginImage[];
}
const LoginSlider: React.FC<Props> = (props) => {
  const { loginImage } = props;

  console.log("this is props from chiel", loginImage[1].image);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {loginImage.map((image, index) => {
        return (
          <img
            className="w-full h-screen object-cover"
            src={image.image}
            key={index}
          />
        );
      })}
    </Slider>
  );
};

export default LoginSlider;
