
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import ContactUs from "./ContactUs";
import NextImage from "../ui/NextImage";
import NextLink from "../ui/NextLink";

interface SliderItemProps {
  itemActive: number;
  id: number;
  image: string;
  brand: string;
  name: string;
  title: string;
  desTitle: string;
  desc: string;
}

const SliderItem = ({
  itemActive,
  id,
  brand,
  title,
  image,
  name,
  desTitle,
  desc
}: SliderItemProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden transition-all duration-500 after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-slider",
        itemActive === id ? "z-10 opacity-100" : "opacity-0"
      )}
    >
      <div className="relative h-full w-full">
        <NextImage
          src={image}
          alt="Image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
        style={{
          objectFit: "cover",
        }}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute left-[10%] top-[15%] z-10 w-[800px] max-w-[80%] space-y-4">
        <p
          className={cn(
            "animation-delay-300 translate-y-[30px] uppercase tracking-[10px] text-white opacity-0 blur-[20px]",
            itemActive === id && "animate-show-content"
          )}
        >
          {brand}
        </p>
        <h2
          className={cn(
            "animation-delay-400 gradient-text dark:text-purple mb-4 max-w-2xl animate-gradient text-4xl font-normal leading-none tracking-tight text-transparent md:text-5xl xl:text-6xl",
            itemActive === id && "animate-show-content"
          )}
        >
          {name}
          <span className="gradient-text dark:text-purple mb-4 max-w-7xl animate-gradient p-4 text-4xl font-extrabold leading-none tracking-tight text-transparent md:text-5xl xl:text-6xl">
            {title}
          </span>
        </h2>
        <p
          className={cn(
            "animation-delay-500 translate-y-[30px] text-gray-200",
            itemActive === id && "animate-show-content"
          )}
        >
          <span className="text-2xl leading-none tracking-tight underline decoration-secondaryColor decoration-[1px] underline-offset-4">
            {desTitle}
          </span>{" "}
          {desc}
        </p>
        <div className="space-y-8 pt-10">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1
            }}
          >
            <NextLink href="/contato">
              <ContactUs buttonData="Contato" />
            </NextLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
