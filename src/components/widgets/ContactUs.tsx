"use client";
import { useRouter } from "next/navigation";

interface Props {
  buttonData?: string;
}

const ContactUs = ({ buttonData }: Props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/contact")}
      className="group relative h-12 w-44 overflow-hidden border-b-[1px] border-t-[1px] border-b-secondaryColor border-t-secondaryColor text-white"
    >
      <button className="font-titleFont h-full w-full text-sm font-normal uppercase tracking-[2px]">
        {buttonData}
      </button>
      <span className="absolute right-0 inline-block h-full w-[1px] -translate-y-8 bg-secondaryColor transition-transform duration-300 group-hover:translate-y-0"></span>
      <span className="absolute left-0 inline-block h-full w-[1px] translate-y-8 bg-secondaryColor transition-transform duration-300 group-hover:translate-y-0"></span>
    </div>
  );
};

export default ContactUs;
