export interface Book {
  title: string;
  subtitle?: string;
  author: string;
  isbn: string;
  abstract?: string;
  numPages?: number;
  publisher?: {
    name: string;
    url: string;
  };
}
