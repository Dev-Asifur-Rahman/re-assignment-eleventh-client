import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Lottie from "lottie-react";

import sliderOne from "../../public/Lottie/sliderone.json";
import sliderTwo from "../../public/Lottie/slidertwo.json";
import sliderThree from "../../public/Lottie/sliderthree.json";
import sliderFour from "../../public/Lottie/sliderfour.json";

const Slider = () => {
  const sliderData = [
    {
      text: "Immerse Yourself in the Magic of Words",
      lottie: sliderOne,
      color: "#000000",
    },
    {
      text: " Fuel Your Mind, Shape Your Future",
      lottie: sliderTwo,
      color: "#FFFFFF",
    },
    {
      text: "Explore Worlds Beyond Imagination",
      lottie: sliderThree,
      color: "#000000",
    },
    {
      text: "Unlock Your Creativity, Voyage Through Time",
      lottie: sliderFour,
      color: "#FFFFFF",
    },
  ];

  return (
    <Swiper
      className="cursor-grab active:cursor-grabbing"
      speed={1500}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {sliderData?.map((slider, index) => {
        return (
          <SwiperSlide className="" key={index}>
            <section className="flex flex-col-reverse md:flex-row lg:h-[90vh] md:h-[400px] w-full">
              <div className="md:w-1/2 md:flex justify-center items-center">
                <p className="w-full md:w-9/10 lg:w-4/5 uppercase text-md md:text-4xl/14 lg:text-5xl/18 text-center md:text-start p-4 md:p-0 font-extrabold md:font-extrabold">
                 {slider.text}
                </p>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <Lottie
                  animationData={slider.lottie}
                  className="w-4/5 md:max-w-[300px] aspect-square"
                ></Lottie>
              </div>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
   
  );
};

export default Slider;
