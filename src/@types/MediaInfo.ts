export type MediaInfo = {
  map: any;
  mal_id: number;
  images: {
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  titles: {
    type: string;
    title: string;
  }[];
  title: string;
  type: string;
  chapters: number | null;
  volumes: number | null;
  status: string;
  aired: {
    from: string;
  };
  published: {
    from: string;
    to: string | null;
  };
  rating: string;
  score: number;
  rank: number;
  popularity: number;
  synopsis: string;
  background: string;
  authors: {
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
  }[];
  demographics: {
    mal_id: number;
    type: string;
    name: string;
  };
};
