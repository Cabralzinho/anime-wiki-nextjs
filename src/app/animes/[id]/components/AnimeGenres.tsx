import { IdMidia } from "@/@types/IdMidia";

export const AnimeGenres = ({ anime }: { anime: IdMidia }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl">Generos</h2>
      <div className="flex flex-wrap gap-4 text-dark30">
        {anime.genres.map((genre) => (
          <span key={genre.mal_id}>{genre.name}</span>
        ))}
      </div>
    </div>
  );
};
