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
  metadataBase: new URL("https://akhilkumar-portfolio.vercel.app"),
  title: "Akhil Kumar | Full Stack Developer",
  description: "Portfolio of Akhil Kumar, a passionate Full Stack Developer specializing in React, Next.js, and modern web applications.",
  keywords: ["Akhil Kumar", "Full Stack Developer", "Web Development", "React", "Next.js", "JavaScript", "Portfolio"],
  authors: [{ name: "Akhil Kumar", url: "https://akhilkumar-portfolio.vercel.app" }],
  creator: "Akhil Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akhilkumar-portfolio.vercel.app",
    title: "Akhil Kumar | Full Stack Developer",
    description: "Portfolio of Akhil Kumar, a passionate Full Stack Developer.",
    images: [{
      url: "/akhil.jpg",
      width: 800,
      height: 600,
      alt: "Akhil Kumar Profile"
    }],
    siteName: "Akhil Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhil Kumar | Full Stack Developer",
    description: "Portfolio of Akhil Kumar, a passionate Full Stack Developer.",
    images: ["/akhil.jpg"],
  },
};

import CustomCursor from "../components/CustomCursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
