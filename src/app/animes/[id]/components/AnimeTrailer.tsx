import { IdMidia } from "@/@types/IdMidia";

export const AnimeTrailer = ({anime}: {anime: IdMidia}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl">Trailer do anime</h2>
      <iframe
        className="w-full max-w-[50rem] h-[25rem] rounded-lg"
        src={anime.trailer.embed_url}
      ></iframe>
    </div>
  );
};
