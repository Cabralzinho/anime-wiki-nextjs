import { getAnimeById } from "@/functions/getMidia";
import { AnimeCard } from "./components/AnimeCard";
import { AnimeTrailer } from "./components/AnimeTrailer";

type PropsType = {
  params: {
    id: string;
  };
};

export default async function AnimePage(...props: PropsType[]) {
  const animeId = props[0].params.id;

  const anime = await getAnimeById(animeId);

  return (
    <main className="flex w-full">
      <div className="flex flex-col gap-11">
        <AnimeCard anime={anime} />
        {anime.trailer.embed_url !== null && <AnimeTrailer anime={anime} />}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl">Sinopse</h2>
          <p className="text-dark30 text-xl w-full leading-10">
            {anime.synopsis}
          </p>
        </div>
      </div>
    </main>
  );
}
