export type Product = {
  name: string;
  image: string;
  priceEur: number;
  badge?: string;
  description: string;
};

export const products: Product[] = [
  {
    name: "OKM eXp 7000 Professional Plus",
    image: "/products/exp-7000/main.webp",
    priceEur: 29990,
    badge: "НОВИНКА",
    description:
      "Профессиональный 3D сканер грунта с передовыми технологиями обнаружения и VLF катушкой.",
  },
  {
    name: "OKM Gepard GPR 3D",
    image: "/products/gepard-gpr-3d/main.webp",
    priceEur: 20990,
    badge: "ПОКАЗАНО НА ТВ",
    description:
      "Георадар для сканирования земли с глубиной обнаружения до 40 метров.",
  },
  {
    name: "OKM Rover C4",
    image: "/products/rover-c4/main.webp",
    priceEur: 10490,
    description:
      "Популярный детектор золота и сокровищ с функцией 3D сканирования.",
  },
  {
    name: "OKM Fusion Light",
    image: "/products/fusion-light/main.webp",
    priceEur: 5490,
    description:
      "Металлоискатель и 3D сканер для начинающих кладоискателей.",
  },
  {
    name: "OKM eXp 5500 Professional",
    image: "/products/exp-5500/main.webp",
    priceEur: 16990,
    description:
      "Профессиональный 3D сканер для поиска кладов, пустот и подземных структур.",
  },
  {
    name: "OKM Rover UC",
    image: "/products/rover-uc/main.webp",
    priceEur: 8990,
    description:
      "Скрытый металлоискатель в форме трости для незаметного поиска сокровищ.",
  },
  {
    name: "OKM Evolution NTX",
    image: "/products/evolution-ntx/main.webp",
    priceEur: 6490,
    description:
      "3D сканер грунта с VLF технологией для обнаружения металлов и пустот.",
  },
  {
    name: "OKM Fusion Professional",
    image: "/products/fusion-professional/main.webp",
    priceEur: 7990,
    description:
      "Профессиональный металлоискатель с функциями 3D сканирования и аудио анализа.",
  },
  {
    name: "OKM Fusion Professional Plus",
    image: "/products/fusion-pro-plus/main.webp",
    priceEur: 13990,
    description:
      "Расширенная версия Fusion с дополнительными антеннами и глубиной поиска.",
  },
  {
    name: "OKM GeoSeeker",
    image: "/products/geoseeker/main.webp",
    priceEur: 9490,
    description:
      "Детектор подземной воды и пустот для поиска воды, пещер и туннелей.",
  },
  {
    name: "OKM GeoSeeker Mini",
    image: "/products/geoseeker-mini/main.webp",
    priceEur: 6990,
    description:
      "Компактный детектор подземной воды для поиска водоносных слоев.",
  },
  {
    name: "OKM Pulse Nova Delta",
    image: "/products/pulse-nova-delta/main.webp",
    priceEur: 1990,
    description:
      "Импульсный металлоискатель для специальных поисковых задач.",
  },
  {
    name: "OKM Pulse Nova Omega",
    image: "/products/pulse-nova-omega/main.webp",
    priceEur: 1990,
    description:
      "Усовершенствованный импульсный металлоискатель для профессионального использования.",
  },
];