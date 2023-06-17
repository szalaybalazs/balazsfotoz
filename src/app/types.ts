type eCategory =
  | "all"
  | "nature"
  | "people"
  | "tech"
  | "animals"
  | "architecture"
  | "food"
  | "objects";

interface iImage {
  id: number;
  title: string;
  url: string;
  raw?: string;
  compressed?: string;
  categories: eCategory[];
  date: string;
  place?: string;
  description?: string;

  iso?: number;
  aperture?: number;
  focalLength?: number;
  camera?: string;
  shutterSpeed?: number;
}
