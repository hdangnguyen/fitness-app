import React from "react";
import Slider from "react-slick";
import { ILoginImage } from "../../../interface/ILoginImage";
import "./LoginSliderStyle.css";

interface Props {
  loginImage: ILoginImage[];
}
const LoginSlider: React.FC<Props> = (props) => {
  const { loginImage } = props;

  console.log("this is props from chiel", loginImage);

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
      <img
        className="w-full h-screen object-cover"
        src={
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        }
      />

      <img
        className="w-full h-screen object-cover"
        src={
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        }
      />
    </Slider>
  );
};

export default LoginSlider;
