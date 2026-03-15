import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
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

  openGraph: {
    title: "OKM Kazakhstan",
    description:
      "Официальный дистрибьютор OKM в Казахстане. Глубинные детекторы до 25 метров.",
    url: "https://okmkazakhstan.kz",
    siteName: "OKM Kazakhstan",
    locale: "ru_RU",
    type: "website",
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