import Image from "next/image";

type MidiaCardProps = {
    title: string;
    imageUrl: string;
    className?: string;
};

export const MidiaCard = ({title, imageUrl, className}: MidiaCardProps) => {
  return (
    <div className="bg-slate-800 relative rounded-lg overflow-hidden h-full">
      <div className="bg-gradient-to-t from-dark10 w-full h-full z-1 absolute rounded-lg"></div>
      <Image
        className="w-full h-full object-cover"
        src={imageUrl}
        alt={title}
        width={768}
        height={510}
      />
      <div className={`absolute bottom-0 ${className} p-4 text-dark40`}>
        {title}
      </div>
    </div>
  );
};
