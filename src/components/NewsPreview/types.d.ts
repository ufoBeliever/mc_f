export interface FetchNewsPreview {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<NewsArticle>;
}

interface NewsArticle {
  title: string;
  slug: string;
  descr: string;
  image: string;
  creation_date: string;
}
