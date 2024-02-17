import { IdMidia } from "@/@types/IdMidia";

export const MangaStudio = ({manga}: {manga: IdMidia}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl">Estúdio</h2>
      <div className="flex flex-wrap gap-4 text-dark30">
        {manga.authors.map((studio) => (
          <span key={studio.mal_id}>{studio.name}</span>
        ))}
      </div>
    </div>
  );
};
