import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, Roboto } from 'next/font/google';
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ['400']
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ['400']
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['400']
});


export const metadata: Metadata = {
  title: "Micaela Perillo",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} ${roboto.variable} antialiased flex min-h-screen`}
      >
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
