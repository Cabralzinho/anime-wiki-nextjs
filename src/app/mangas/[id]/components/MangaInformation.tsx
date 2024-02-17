import { IdMidia } from "@/@types/IdMidia";
import { extractDate } from "@/utils/extractDate";

export const MangaInformation = ({ manga }: { manga: IdMidia }) => {
  return (
    <div className="flex flex-col gap-2 text-dark30">
      <span>Lançado em: {extractDate(manga.published.from)}</span>
      <span>{manga.status}</span>
      {manga.chapters !== null && <span>{manga.chapters} chapters</span>}
      <span>Nota: {manga.score}</span>
      <span>{manga.rating}</span>
    </div>
  );
};
