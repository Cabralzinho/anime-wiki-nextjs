import { IdMidia } from "@/@types/IdMidia"

export const AnimeStudio = ({anime}: {anime: IdMidia}) => {
    return (
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl">Estúdio</h2>
          <div className="flex flex-wrap gap-4 text-dark30">
            {anime.studios.map((studio) => (
              <span key={studio.mal_id}>{studio.name}</span>
            ))}
          </div>
        </div>
    )
}