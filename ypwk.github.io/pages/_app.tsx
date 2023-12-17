import type { AppProps } from "next/app";
import Header from "@/components/Header";

import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: "400", subsets: ["latin"] });

import "../styles/normalize.css";
import "../styles/skeleton.css";
import "../styles/custom.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Header pages={["Projects", "Work & Education", "Research", "Contact"]} />
      <Component {...pageProps} />
    </main>
  );
}
