import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import { useStateValue } from "../core/context/StateProvider"


const Slider2 = () => {
  const [{ cities }, dispatch] = useStateValue()

    

  return (
    <div className="slider-static">

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {cities.map((item) => {
          return (
            <SwiperSlide key={item._id}>
              <img src={process.env.PUBLIC_URL + `/imagen/city/${item.image.principal}`} alt={item.city} />
            </SwiperSlide>
          )
        })}
      </Swiper>



    </div>
  );
};

export default Slider2;
