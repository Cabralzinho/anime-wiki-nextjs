export type IdMidia = {
  mal_id: number;
  images: {
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    embed_url: string;
  };
  title: string;
  chapters: number
  episodes: number
  status: string;
  aired: {
    from: string;
  }
  published: {
    from: string;
    to: string;
  };
  rating: string;
  score: number;
  rank: number;
  popularity: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  authors: {
    mal_id: number;
    type: string;
    name: string;
  }[]
  producers: {
    mal_id: number;
    type: string;
    name: string;
  }[];
  licersors: {
    mal_id: number;
    type: string;
    name: string;
  }[];
  studios: {
    mal_id: number;
    type: string;
    name: string;
  }[];
  genres: {
    mal_id: number;
    type: string;
    name: string;
  }[];
  themes: {
    mal_id: number;
    type: string;
    name: string;
  };
  demographics: {
    mal_id: number;
    type: string;
    name: string;
  };
};
