import Image from "next/image";

type PresentationCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export const PresentationCard = ({
  title,
  description,
  imageUrl,
}: PresentationCardProps) => {
  return (
    <div className="bg-slate-800 relative h-[20rem] overflow-hidden rounded-lg">
      <div className="absolute w-full h-full bg-gradient-to-r from-dark10"></div>
      <Image
        className="w-full h-full object-cover"
        src={imageUrl}
        alt="teste"
        width={1100}
        height={300}
      />
      <div className="absolute flex flex-col top-0 justify-center w-full h-full gap-4 px-11">
        <h1 className="text-5xl">{title}</h1>
        <span className="text-dark30 text-xl w-full max-w-[30rem]">
          {description}
        </span>
      </div>
    </div>
  );
};
