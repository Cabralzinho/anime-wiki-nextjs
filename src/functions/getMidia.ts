import { IdMidia } from "@/@types/IdMidia";
import { MediaInfo } from "@/@types/MediaInfo";

export const getPopularAnimes = async (
  limit: number,
  page: number
): Promise<MediaInfo> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime?limit=${limit}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Falha na busca dos animes");
  }

  const popularAnimes = await response.json();

  return popularAnimes.data;
};

export const getPopularMangas = async (
  limit: number,
  page: number
): Promise<MediaInfo> => {
  const response = await fetch(
    `https://api.jikan.moe/v4/top/manga?limit=${limit}&page=${page}`
  );

  if (!response.ok) {
    throw new Error("Falha na busca dos mangás");
  }

  const popularMangas = await response.json();

  return popularMangas.data;
};

export const getNewestAnimes = async (): Promise<MediaInfo> => {
  const response = await fetch("https://api.jikan.moe/v4/seasons/now?limit=4");

  if (!response.ok) {
    throw new Error("Falha na busca dos animes");
  }

  const newestAnimes = await response.json();

  return newestAnimes.data;
};

export const getMostAccessedMangas = async (): Promise<MediaInfo> => {
  const response = await fetch("https://api.jikan.moe/v4/top/manga?limit=4");

  if (!response.ok) {
    throw new Error("Falha na busca dos mangás");
  }

  const mostAccessedMangas = await response.json();

  return mostAccessedMangas.data;
};

export const getSeasonMedia = async (): Promise<MediaInfo> => {
  const response = await fetch(
    "https://api.jikan.moe/v4/seasons/upcoming?limit=6"
  );

  if (!response.ok) {
    throw new Error("Falha na busca dos animes e mangás");
  }

  const seasonMedia = await response.json();

  return seasonMedia.data;
};

export const getSearchAnime = async (search: string): Promise<MediaInfo> => {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime?&q=${search}?&limit=4&?sfw`
  );

  if (!response.ok) {
    throw new Error("Falha na busca dos animes");
  }

  const searchAnime = await response.json();

  const filtredRx = searchAnime.data.filter(
    (anime: MediaInfo) => anime.rating !== "Rx - Hentai"
  );

  return filtredRx;
};

export const getSearchManga = async (search: string): Promise<MediaInfo> => {
  const response = await fetch(
    `https://api.jikan.moe/v4/manga?&q=${search}?&limit=4&?sfw`
  );

  if (!response.ok) {
    throw new Error("Falha na busca dos Mangás");
  }

  const searchManga = await response.json();

  const filtredRx = searchManga.data.filter(
    (manga: MediaInfo) => manga.rating !== "Rx - Hentai"
  );

  return filtredRx;
};

export const getAnimeById = async (id: string | string[]): Promise<IdMidia> => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  if (!response.ok) {
    throw new Error("Falha ao carregar o anime");
  }

  const idAnime = await response.json();

  return idAnime.data;
};

export const getMangaById = async (id: string | string[]): Promise<IdMidia> => {
  const response = await fetch(`https://api.jikan.moe/v4/manga/${id}`);

  if (!response.ok) {
    throw new Error("Falha ao carregar o manga");
  }

  const idManga = await response.json();

  return idManga.data;
};
