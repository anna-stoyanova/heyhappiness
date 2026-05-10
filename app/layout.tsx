import type { Metadata } from "next";
import { Sofia_Sans} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Happiness",
  description: "All things Happiness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bg"
      className={`${sofiaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </body>
    </html>
  );
}
