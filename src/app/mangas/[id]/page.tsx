import { getMangaById } from "@/functions/getMidia";
import Image from "next/image";
import { MangaCard } from "./components/MangaCard";

type PropsType = {
  params: {
    id: string;
  };
};

export default async function MangaPage(...props: PropsType[]) {
  const mangaId = props[0].params.id;

  const manga = await getMangaById(mangaId);

  return (
    <main className="flex w-full">
      <div className="flex flex-col gap-11">
        <MangaCard manga={manga} />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl">Sinopse</h2>
          <p className="text-dark30 text-xl w-full">{manga.synopsis}</p>
        </div>
      </div>
    </main>
  );
}
