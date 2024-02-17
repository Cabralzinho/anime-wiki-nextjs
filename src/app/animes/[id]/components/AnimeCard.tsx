import { IdMidia } from "@/@types/IdMidia";
import Image from "next/image";
import { AnimeInformation } from "./AnimeInformation";
import { AnimeGenres } from "./AnimeGenres";
import { AnimeStudio } from "./AnimeStudio";

export const AnimeCard = ({ anime }: { anime: IdMidia }) => {
  return (
    <div className="flex w-full items-start justify-start tablet:justify-start gap-6 flex-wrap tablet:flex-nowrap">
      <Image
        className="w-full max-w-[20rem] h-[30rem] rounded-lg object-cover"
        src={anime.images.webp.large_image_url}
        alt="teste"
        width={1100}
        height={500}
      />
      <div className="flex flex-col justify-center gap-3 text-lg">
        <h1 className="text-2xl">{anime.title}</h1>
        <AnimeInformation anime={anime} />
        <AnimeGenres anime={anime} />
        {anime.studios.length > 0 && <AnimeStudio anime={anime} />}
      </div>
    </div>
  );
};
