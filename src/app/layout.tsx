import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/epilogue";
import "@fontsource/epilogue/latin-400-italic.css";
import "@fontsource/dm-serif-display/latin-400.css";
import Footer from "@/components/about/Footer";
import Navbar from "@/components/about/Navbar";

export const metadata: Metadata = {
  title: "Omovigho Donald Foundation",
  description:
    "The mission of the movement is to transition, rehabilitate and empower ex-commercial sex workers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
