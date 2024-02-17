import { MidiaCard } from "@/components/MidiaCard";
import { getSeasonMedia } from "../../../functions/getMidia";
import { MediaInfo } from "@/@types/MediaInfo";
import Link from "next/link";

export const SeasonMedia = async () => {
  const seasonMedia = await getSeasonMedia();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl">previsão de obras da temporada</h2>
      <ul className="flex gap-5 flex-wrap">
        {seasonMedia.map((anime: MediaInfo) => (
          <Link
            className="basis-[20rem] flex-1 max-h-[25rem]"
            key={anime.mal_id}
            href={`animes/${anime.mal_id}`}
          >
            <MidiaCard
              title={anime.title}
              imageUrl={anime.images.webp.large_image_url}
            />
          </Link>
        ))}
      </ul>
    </section>
  );
};
