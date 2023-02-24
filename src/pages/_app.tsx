import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Karla } from "next/font/google";

const font = Karla({ subsets: ["latin"], weight: ["400", "700"] });

const theme = createTheme({
  palette: {
    // Primary
    cyan: { main: "hsl(179, 62%, 43%)" },
    brightYellow: { main: "hsl(71, 73%, 54%)" },

    // Neutral
    lightGray: { main: "hsl(204, 43%, 93%)" },
    grayishBlue: { main: "hsl(218, 22%, 67%)" },
  },
  typography: {
    fontFamily: font.style.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Single price grid component</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
