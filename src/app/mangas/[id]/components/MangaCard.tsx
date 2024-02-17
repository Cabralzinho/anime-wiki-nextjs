import { IdMidia } from "@/@types/IdMidia";
import Image from "next/image";
import { MangaInformation } from "./MangaInformation";
import { MangaGenres } from "./MangaGenres";
import { MangaStudio } from "./MangaStudio";

export const MangaCard = ({ manga }: { manga: IdMidia }) => {
  return (
    <div className="flex w-full items-start justify-center tablet:justify-start gap-6 flex-wrap tablet:flex-nowrap">
      <Image
        className="w-full max-w-[20rem] h-[30rem] rounded-lg object-cover"
        src={manga.images.webp.large_image_url}
        alt="teste"
        width={1100}
        height={500}
      />
      <div className="flex flex-col justify-center gap-3 text-lg ">
        <h1 className="text-2xl">{manga.title}</h1>
        <MangaInformation manga={manga} />
        <MangaGenres manga={manga} />
        <MangaStudio manga={manga} />
      </div>
    </div>
  );
};
