import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://okm-kazakhstan.kz"),

  title: "OKM Kazakhstan — официальный дистрибьютор OKM в Казахстане",

  description:
    "Продажа немецких глубинных детекторов OKM в Казахстане. Модели eXp 7000, Rover C4, Gepard GPR 3D. Доставка по Казахстану. Консультация специалиста.",

  keywords: [
    "OKM Казахстан",
    "OKM detectors Kazakhstan",
    "OKM Rover C4 цена",
    "OKM eXp 7000",
    "глубинный металлоискатель",
    "OKM детектор купить",
    "OKM Казахстан официальный дилер"
  ],

  authors: [{ name: "OKM Kazakhstan" }],

  alternates: {
    canonical: "https://okm-kazakhstan.kz",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "OKM Kazakhstan — официальный дистрибьютор OKM",
    description:
      "Продажа немецких глубинных детекторов OKM в Казахстане. Модели eXp 7000, Rover C4, Gepard GPR 3D.",
    url: "https://okm-kazakhstan.kz",
    siteName: "OKM Kazakhstan",
    locale: "ru_RU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OKM Kazakhstan — официальный дистрибьютор OKM",
    description:
      "Продажа немецких глубинных детекторов OKM в Казахстане.",
  },

  icons: {
    icon: "/logo/okm-logo.png",
    apple: "/logo/okm-logo.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}