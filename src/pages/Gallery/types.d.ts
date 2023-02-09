export interface IImage {
  image: string;
  album: 1;
}

export interface IAlbum {
  title: string;
  slug: string;
  description: string;
  images: IImage[];
}

export interface IGallery {
  count: number;
  next: null;
  previous: null;
  results: IAlbum[];
}
