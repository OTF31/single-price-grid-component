import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { Karla } from "next/font/google";
import Head from "next/head";

const font = Karla({ subsets: ["latin"], weight: ["400", "700"] });

const theme = createTheme({
  palette: {
    // Primary
    cyan: { main: "hsl(179, 62%, 43%)", dark: "hsl(179, 62%, 33%)", light: "hsl(179, 62%, 48%)" },
    brightYellow: {
      main: "hsl(71, 73%, 54%)",
      dark: "hsl(71, 73%, 44%)",
      light: "hsl(71, 73%, 64%)",
    },

    // Neutral
    lightGray: { main: "hsl(204, 43%, 93%)" },
    grayishBlue: { main: "hsl(218, 22%, 67%)" },
  },
  typography: {
    fontFamily: font.style.fontFamily,
    // fontSize: 16,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="favicon-32x32.png" />
        <title>Single price grid component</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
