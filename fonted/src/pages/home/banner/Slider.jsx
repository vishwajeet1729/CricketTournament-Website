import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

// import custom css
import "./Slider.css";

import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <div className="swiper ">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]} // Include Autoplay module
          className="mySwiper"
          autoplay={{ delay: 3000 }} // Set autoplay delay (in milliseconds)
        >
          <SwiperSlide>
            <div className="slide-content">
              <img src={banner1} alt="" />
              <div className="overlay-text p-5 md:p-20 ">
                <h3 className="text-xl md:text-7xl font-bold md:mb-4 uppercase">
                  Participate!
                </h3>
                <p className="hidden md:block">The world bigges Tournament</p>
                <Link to="/classes">
                  <button
                    className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63] 
           md: mt-4 bg-opacity-20 hover:opacity-100"
                  >
                    register{" "}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={banner2} alt="" />
              <div className="overlay-text p-5 md:p-20 ">
                <h3 className="text-xl md:text-7xl font-bold md:mb-4 uppercase">
                  {" "}
                  join and collabrate with the our tournament
                </h3>
                <p className="hidden md:block"> The cricket is the best</p>
                <Link to="/classes">
                  <button
                    className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63] 
           md: mt-4 bg-opacity-20 hover:opacity-100"
                  >
                    Register today
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={banner3} alt="" />
              <div className="overlay-text p-5 md:p-20 ">
                <h3 className="text-xl md:text-7xl font-bold md:mb-4 uppercase">
                  try it out{" "}
                </h3>
                <p className="hidden md:block">why I am the best</p>
                <Link to="/classes">
                  <button
                    className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63] 
           md: mt-4 bg-opacity-20 hover:opacity-100"
                  >
                    Register{" "}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
