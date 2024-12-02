import Link from "next/link";
import { ComponentProps } from "react";

import cn from "clsx";

const NextLink = (props: ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className={cn(
        props.className,
        `rounded font-medium text-black transition-all duration-200 hover:underline dark:text-gray-300`
      )}
      href={props.href}
      title={props.title}
    >
      {props.children}
    </Link>
  );
};

export default NextLink;
