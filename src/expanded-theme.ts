import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    cyan: Palette["primary"];
  }

  interface PaletteOptions {
    cyan?: PaletteOptions["primary"];
  }

  interface Palette {
    brightYellow: Palette["primary"];
  }

  interface PaletteOptions {
    brightYellow?: PaletteOptions["primary"];
  }

  interface Palette {
    lightGray: Palette["primary"];
  }

  interface PaletteOptions {
    lightGray?: PaletteOptions["primary"];
  }

  interface Palette {
    grayishBlue: Palette["primary"];
  }

  interface PaletteOptions {
    grayishBlue?: PaletteOptions["primary"];
  }
}
