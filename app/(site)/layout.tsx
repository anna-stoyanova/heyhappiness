import { ViewTransition } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ViewTransition
          enter={{
            "nav-forward": "nav-forward",
            "nav-back": "nav-back",
            default: "crossfade",
          }}
          exit={{
            "nav-forward": "nav-forward",
            "nav-back": "nav-back",
            default: "crossfade",
          }}
        >
          {children}
        </ViewTransition>
      </main>
      <Footer />
    </>
  );
}
