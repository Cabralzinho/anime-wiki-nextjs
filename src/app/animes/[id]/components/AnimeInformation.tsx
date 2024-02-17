import { IdMidia } from "@/@types/IdMidia";
import { extractDate } from "@/utils/extractDate";

export const AnimeInformation = ({ anime }: { anime: IdMidia }) => {
  return (
    <div className="flex flex-col gap-2 text-dark30">
      {anime.aired.from !== null && (
        <span>Lançado em: {extractDate(anime.aired.from)}</span>
      )}
      <span>{anime.status}</span>
      {anime.episodes !== null && <span>{anime.episodes} Episódios</span>}
      {anime.score !== null && <span>{anime.score} Score</span>}
      <span>{anime.rating}</span>
    </div>
  );
};
