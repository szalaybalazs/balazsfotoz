const dummy: iImage = {
  id: 1,
  title: "Panda",
  url: "/hirth/panda/image.jpg",
  raw: "/hirth/panda/raw.jpg",
  categories: ["animals", "objects"],
  date: "2023-05-27",

  iso: 80,
  aperture: 1.2,
  focalLength: 84,
  camera: "Fujifilm X-T30-II",
  shutterSpeed: 1 / 2000,

  place: "Budapest, Hungary",
  description: "A cute panda in the zoo.",
};

export const images: iImage[] = [
  {
    id: 1,
    title: "Panda",
    url: "/hirth/panda/image.jpg",
    raw: "/hirth/panda/raw.jpg",
    compressed: "/hirth/panda/compressed.jpg",
    categories: ["animals", "objects"],
    date: "2023-05-27",

    iso: 80,
    aperture: 1.2,
    focalLength: 84,
    camera: "Fujifilm X-T30-II",
    shutterSpeed: 1 / 2000,

    place: "Budapest, Hungary",
    description: "A cute panda in the zoo.",
  },
  {
    id: 2,
    title: "Church",
    url: "/budapest/church/image.jpg",
    compressed: "/budapest/church/compressed.jpg",
    categories: ["animals", "objects"],
    date: "2023-06-09",

    iso: 80,
    aperture: 1.2,
    focalLength: 84,
    camera: "Fujifilm X-T30-II",
    shutterSpeed: 1 / 2000,

    place: "Budapest, Hungary",
    description: "A cute panda in the zoo.",
  },
];
