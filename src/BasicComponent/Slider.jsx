import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Lottie from "lottie-react";

import sliderOne from "../../public/Lottie/sliderone.json";

const Slider = () => {
  // const sliderData = [
  //   {
  //     text: "Immerse Yourself in the Magic of Words",
  //     lottie: sliderOne,
  //     color: "#000000",
  //   },
  //   {
  //     text: " Fuel Your Mind, Shape Your Future",
  //     lottie: sliderTwo,
  //     color: "#FFFFFF",
  //   },
  //   {
  //     text: "Explore Worlds Beyond Imagination",
  //     lottie: sliderThree,
  //     color: "#000000",
  //   },
  //   {
  //     text: "Unlock Your Creativity, Voyage Through Time",
  //     lottie: sliderFour,
  //     color: "#FFFFFF",
  //   },
  // ];

  return (
    <section className="flex flex-col-reverse md:flex-row lg:h-[90vh] md:h-[400px] w-full">
      <div className="md:w-1/2 md:flex justify-center items-center">
        <p className="w-full md:w-9/10 lg:w-4/5 uppercase text-md md:text-4xl/14 lg:text-5xl/18 text-center md:text-start p-4 md:p-0 font-extrabold md:font-extrabold">
          Immerse Yourself in the Magic of Words
        </p>
      </div>
      <div className="md:w-1/2 flex items-center justify-center">
        <Lottie
          animationData={sliderOne}
          className="w-4/5 md:max-w-[300px] aspect-square"
        ></Lottie>
      </div>
    </section>
    // <Swiper
    //   spaceBetween={30}
    //   centeredSlides={true}
    //   autoplay={{
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   }}
    //   pagination={{
    //     clickable: true,
    //   }}
    //   navigation={true}
    //   modules={[Autoplay, Pagination, Navigation]}
    //   className="mySwiper-2 mb-10 lg:h-[90vh] md:h-[60vh] h-[180px] w-full "
    // >
    //   <SwiperSlide>
    //     <section
    //       className={`bg-[#1d232a] h-full w-full flex flex-col lg:flex-row md:flex-row items-center`}
    //     >
    //       <section className=" h-1/2 lg:h-full md:h-full  md:w-1/2 lg:w-1/2 w-full flex justify-center items-center">
    //         <p className=" text-white w-fit text-center md:text-start lg:text-start font-bold text-2xl md:text-4xl lg:text-6xl lg:leading-[15vh] md:leading-[10vh] lg:pl-16 md:pl-14 pl-0">
    //           Immerse Yourself in the Magic of Words
    //         </p>
    //       </section>
    //       <section className=" h-1/2 lg:h-full md:h-full md:w-1/2 lg:w-1/2 w-full flex justify-center items-center">
    //         <Lottie
    //           animationData={sliderOne}
    //           className="lg:h-[40vh] md:h-[35vh] rounded-full h-[100px]  lg:w-[40vh]  md:w-[35vh] w-[100px] "
    //         ></Lottie>
    //       </section>
    //     </section>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <section
    //       className={`bg-[#f7f5f3] text-black h-full w-full flex flex-col lg:flex-row md:flex-row items-center`}
    //     >
    //       <section className=" h-1/2 lg:h-full md:h-full  md:w-1/2 lg:w-1/2 w-full flex justify-center items-center">
    //         <p className=" w-fit text-center md:text-start lg:text-start font-bold text-2xl md:text-4xl lg:text-6xl lg:leading-[15vh] md:leading-[10vh] lg:pl-16 md:pl-14 pl-0">
    //           Fuel Your Mind, Shape Your Future
    //         </p>
    //       </section>
    //       <section className=" h-1/2 lg:h-full md:h-full  md:w-1/2 lg:w-1/2 w-full flex justify-center items-center">
    //         <Lottie
    //           animationData={sliderTwo}
    //           className="lg:h-[40vh] md:h-[35vh] h-[100px]  lg:w-[40vh]  md:w-[35vh] w-[100px] "
    //         ></Lottie>
    //       </section>
    //     </section>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <section
    //       className={`bg-[#1d232a] h-full w-full flex flex-col lg:flex-row md:flex-row items-center`}
    //     >
    //       <section className=" text-white h-1/2 lg:h-full md:h-full  md:w-1/2 lg:w-1/2 w-full flex justify-center items-center">
    //         <p className=" w-fit text-center md:text-start lg:text-start font-bold text-2xl md:text-4xl lg:text-6xl lg:leading-[15vh] md:leading-[10vh] lg:pl-16 md:pl-14 pl-0">
    //           Explore Worlds Beyond Imagination
    //         </p>
    //       </section>
    //       <section className=" h-1/2 lg:h-full md:h-full  md:w-1/2 lg:w-1/2 w-full flex justify-center items-center">
    //         <Lottie
    //           animationData={sliderThree}
    //           className="lg:h-[40vh] md:h-[35vh] h-[100px]  lg:w-[40vh]  md:w-[35vh] w-[100px] "
    //         ></Lottie>
    //       </section>
    //     </section>
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <section
    //       className={`bg-[#f7f5f3] text-black h-full w-full flex flex-col lg:flex-row md:flex-row items-center`}
    //     >
    //       <section className=" h-1/2 lg:h-full md:h-full  md:w-1/2 lg:w-1/2 w-full flex justify-center items-center">
    //         <p className=" w-fit text-center md:text-start lg:text-start font-bold text-2xl md:text-4xl lg:text-6xl lg:leading-[15vh] md:leading-[10vh] lg:pl-16 md:pl-14 pl-0">
    //           Unlock Your Creativity, Voyage Through Time
    //         </p>
    //       </section>
    //       <section className=" h-1/2 lg:h-full md:h-full  md:w-1/2 lg:w-1/2 w-full flex justify-center items-center">
    //         <Lottie
    //           animationData={sliderFour}
    //           className="lg:h-[40vh] md:h-[35vh] h-[100px]  lg:w-[40vh]  md:w-[35vh] w-[100px]  "
    //         ></Lottie>
    //       </section>
    //     </section>
    //   </SwiperSlide>
    // </Swiper>
  );
};

export default Slider;
