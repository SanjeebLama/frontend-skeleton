import type { AppProps } from "next/app";
import "../styles/globals.css";
// include styles from the ui package
// import "ui/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}