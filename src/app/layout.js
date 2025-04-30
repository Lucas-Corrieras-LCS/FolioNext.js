import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Lucas Corrieras — Développeur Front-End",
    template: "%s | Lucas Corrieras",
  },
  description:
    "Portfolio de Lucas Corrieras, développeur front-end passionné par le JavaScript, le design web et les expériences interactives. Découvrez mes projets, compétences et contact.",
  keywords: [
    "Lucas Corrieras",
    "Développeur Front-End",
    "Portfolio",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
  ],

  openGraph: {
    title: "Lucas Corrieras — Développeur Front-End",
    description:
      "Découvrez les projets web et le portfolio de Lucas Corrieras, passionné par l’intégration et le développement interactif.",
    url: "https://lucascorrieras.com",
    siteName: "Lucas Corrieras",
    images: [
      {
        url: "/link.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lucas Corrieras — Portfolio Front-End",
    description:
      "Développeur front-end passionné : JavaScript, React, Next.js. Découvrez mes projets sur mon portfolio.",
    images: ["/link.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  icons: {
    icon: "/lcswhite.png",
    shortcut: "/lcswhite.png",
    apple: "/lcswhite.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
