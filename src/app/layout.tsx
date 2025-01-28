import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import localFont from "next/font/local";
import Providers from "./provers";

const poppins = localFont({
  src: [
    {
      path: "../fonts/Poppins/Poppins-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../fonts/Poppins/Poppins-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../fonts/Poppins/Poppins-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../fonts/Poppins/Poppins-Light.ttf",
      style: "normal",
      weight: "300",
    },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  authors: [{ name: "Enrypase", url: "https://github.com/Enrypase" }],
  description: "Starter template for NextJS + Typescript + TailwindCSS + Oxlint + Lefthook",
  keywords: ["NextJS", "NextJS Template", "Template"],
  openGraph: {
    description: "NextJS. Get started now!",
    images: [
      {
        alt: "Logo",
        height: 100,
        url: "",
        width: 100,
      },
    ],
    title: "NextJS Starter Template",
    type: "website",
    url: "https://github.com/Enrypase",
  },
  robots: "index, follow",
  title: "NextJS Starter Template",
  twitter: {
    card: "summary_large_image",
    description: "Starter template for NextJS + Typescript + TailwindCSS + Oxlint + Lefthook",
    images: ["https://github.com/Enrypase"],
    title: "NextJS Starter Template",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
