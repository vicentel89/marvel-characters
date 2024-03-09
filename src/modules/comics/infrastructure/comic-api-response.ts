export interface ComicApiResponse {
  id: number;
  title: string;
  dates: {
    type: string;
    date: string;
  }[];
  thumbnail: {
    path: string;
    extension: string;
  };
}
