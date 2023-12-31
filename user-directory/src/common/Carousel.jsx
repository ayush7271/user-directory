import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { checkdevice } from "./common";
import Modal from "../components/Modal";
const Carousel = ({ data }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [targetElement, setTargetElement] = useState();
  const isMobile = checkdevice();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  function handleclick(e) {
    setTargetElement(e);
    setShowPopUp(true);
  }
  function closeModal() {
    setShowPopUp(false);
  }
  return (
    <>
      <Modal
        showState={showPopUp}
        mobileFullScreen={false}
        modalDialogCssClass={`transition-all duration-500 fixed bottom-0 left-0 right-0 m-0 w-full`}
        modalContentCssClass={`delay-0 duration-1000 ease-in-out rounded-t-3xl h-[500px]`}
        modalBodyCssClass={``}
        closeModal={closeModal}
      >
        <div className="w-[90%]  m-auto text-left">
          <div
            className={`w-[300px] ${"h-[300px]"} m-auto cursor-pointer pt-[20px] rounded-lg text-[20px] bg-[#272727] text-[#ffffff]`}
          >
            <h1 className="w-[90%] m-auto text-[green]">
              {targetElement?.title}
            </h1>
            <div className="opacity-70 w-[90%] m-auto mt-[30px] text-[15px]">
              <p>{targetElement?.body}</p>
            </div>
          </div>
        </div>
      </Modal>
      <div className="carousel-container">
        <div className="carousel">
          <Slider {...settings}>
            {data &&
              data.map((i, index) => {
                return (
                  <div
                    key={index}
                    className="w-[90%]  m-auto text-left"
                    onClick={() => handleclick(i)}
                  >
                    <div
                      className={`w-[300px] ${"h-[300px]"} m-auto cursor-pointer pt-[20px] rounded-lg text-[20px] bg-[#272727] text-[#ffffff]`}
                    >
                      <h1 className="w-[90%] m-auto text-[green]">{i.title}</h1>
                      <div className="opacity-70 w-[90%] m-auto mt-[30px] text-[15px]">
                        <p>{i.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Carousel;
