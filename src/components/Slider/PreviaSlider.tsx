/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import CldImage from "@/components/ui/CldImage";
import images from './images.json';
import { HiArrowNarrowRight } from "react-icons/hi";

import { motion } from "framer-motion";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "../button/index";


export default async function PreviaSlider() {
  const handleContact = () => {
    const contactSection = document.querySelector("#contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  function setLoaded(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={true}
      breakpoints={{
        700: {
          slidesPerView: 1
        }
      }}
      className="demoslider min-h-[660px] drop-shadow-xl"
    >
      {images.map((elem, idx) => (
            <SwiperSlide
              className="flex w-full flex-col justify-end rounded-md bg-slate-300 px-2 py-32 shadow-md sm:pb-16 lg:h-[755px] lg:pb-[110px]"
              key={idx}
            >
              <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                  <CldImage
                      width={elem.width}
                      height={elem.height}
                      src={elem.image}
                      alt={elem.title}
                      priority
                      onLoad={() => setLoaded(true)}
                      className="rounded-sm"
                      sizes="(max-width: 640px) 100vw,
                              (max-width: 768px) 80vw,
                              (max-width: 1024px) 60vw,
                              50vw"
                    />
                    <div className="relative -mt-[6.75rem] overflow-hidden pb-16 pt-[5.75rem] lg:h-auto">
                      <div className="flex flex-wrap gap-x-2 gap-y-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl lg:max-w-[340px] xl:max-w-[43.5rem]">
                        {elem.title}
                      </div>
                      <div className="h-[3px] w-[160px] rounded bg-green-600"></div>
                      <div className="col-start-1 row-start-3 mt-4 max-w-2xl text-lg text-slate-700">
                        {elem.description}
                      </div>
                      <code className="font-montserrt font-semibold">
                        {elem.span}
                      </code>
                      <div className="py-4 sm:mb-4">
                        <Button
                          className="w-max shadow-button"
                          onClick={handleContact}
                        >
                          {elem.btnText}
                          <HiArrowNarrowRight size={18} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
      ))}
    </Swiper>
  );
}

