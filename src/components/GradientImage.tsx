import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

type GradientImageProps = {} & ImageProps;

export const GradientImage = ({
  className,
  width = 1920,
  height = 1080,
  ...rest
}: GradientImageProps) => {
  return (
    <div className={twMerge("relative", className)}>
      <div className="absolute w-full h-full z-10 bg-gradient-to-t from-dark10"></div>
      <Image className="object-cover w-full h-full" width={width} height={height} {...rest} />
    </div>
  );
};
