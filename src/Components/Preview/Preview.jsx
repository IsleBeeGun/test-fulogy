import React from "react";
import "./Preview.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class Preview extends React.Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "control-dots",
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="preview-container">
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.props.images.map((img_url, counter) => {
            return <img alt="" src={img_url} key={"img-" + counter}/>;
          })}
        </Slider>
      </div>
    );
  }
}
