"use client";

import { motion } from "framer-motion";

import { fadeUpAnimation } from "@/lib/animations";

import BlurImage from "./../ui/blur-image";
import SliderButtons from "./SliderButtons";

export interface ServiceProp {
  id: number;
  name: string;
  description: string;
  image: {
    original: string;
  };
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface Prop {
  service: ServiceProp;
  index: number;
}

const Services = ({ service }: Prop) => {
  return (
    <>
      <div className="group z-40 flex h-[526px] cursor-pointer flex-col overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-800 bg-gradient-to-r from-clr_white to-[#d2d2d2] p-4 opacity-100 transition-transform duration-200 ease-out hover:scale-105 hover:border-emerald-500 hover:bg-gradient-to-b hover:from-gray-900 hover:opacity-100">
        <motion.div
          data-aos="fade-up"
          className=""
          {...fadeUpAnimation}
          transition={{ duration: 0.5 }}
        >
          <div className="h-48 w-full overflow-hidden">
            <BlurImage
              src={service.image.original}
              alt=""
              width={1080}
              height={672}
              unoptimized
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-1 flex-col p-8">
            <div className="w-full"></div>
            <strong className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900/90 transition-all group-hover:text-emerald-500 dark:text-slate-400 sm:text-4xl">
              {service.name}
            </strong>
            <p className="mt-2 line-clamp-4 text-gray-400">
              {service.description}
            </p>
            <span className="mt-8 block truncate text-sm font-medium text-gray-300">
              <p className="-py-8 mt-4 inline-block rounded-full px-2 text-slate-900 lg:mt-2">
                <SliderButtons buttons={service.buttons} />
              </p>
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Services;
