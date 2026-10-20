import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Jersey_15,
} from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gameFont = Jersey_15({
  variable: "--font-game",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeOrbit",
  description: "Explore. Build. Evolve.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${gameFont.variable} ${inter.variable} h-full antialiased`}
        >
          <Provider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}