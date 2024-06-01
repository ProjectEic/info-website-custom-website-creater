import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Info-Website für deine eigene Webseite",
  description: "Dies ist eine Website, die Informationen über deine Webseite bereitstellt. Wie man das Admin Panel verwendet, wie man Inhalte hinzufügt und wie man seine Webseite verwaltet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
