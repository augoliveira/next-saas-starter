
import { cn } from "@/lib/utils";
import NextImage from "../ui/NextImage";

interface SliderThumbnailItemProps {
  itemActive: number;
  id: number;
  image: string;
  name: string;
  onClick: () => void;
}

const SliderThumbnailItem = ({
  itemActive,
  id,
  image,
  name,
  onClick
}: SliderThumbnailItemProps) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={cn(
        "relative h-[250px] shrink-0 overflow-hidden transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-full after:w-full after:bg-thumbnails hover:brightness-150",
        itemActive === id
          ? "w-[200px] brightness-150"
          : "w-[50px] brightness-50"
      )}
    >
      <div className="relative h-full w-full rounded-lg">
        <NextImage
          src={image}
          alt="Image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-lg object-cover"
        />
      </div>
      <div
        className={cn(
          "animation-delay-75 absolute bottom-[40px] left-[10px] right-[10px] top-auto z-10 translate-y-[30px]",
          itemActive === id && "animate-show-content"
        )}
      >
        <h2 className="line-clamp-1 text-start text-zinc-300 font-bold">{name}</h2>
      </div>
    </div>
  );
};

export default SliderThumbnailItem;
