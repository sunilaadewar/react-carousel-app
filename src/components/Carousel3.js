import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel1.css"

const Carousel3 = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        speed: 500,
        focusOnSelect: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: false,
    };

    return (
        <>
            <div className="carousel-container">
                <h3 className="card-heading">Evelyn</h3>
                <Slider {...settings}>
                    <div className="card-cont ">
                        <div className="card one">
                            <p>Evelyn</p>
                            <h4>Post-grad plans</h4>
                        </div>
                    </div>
                    <div className="card-cont">
                        <div className=" card two">2</div>
                    </div>
                    <div className="card-cont">
                        <div className=" card three">3</div>
                    </div>
                    <div className="card-cont">
                        <div className=" card four">4</div>
                    </div>
                    <div className="card-cont ">
                        <div className=" card five">5</div>
                    </div>
                    <div className="card-cont ">
                        <div className="card six">6</div>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Carousel3;