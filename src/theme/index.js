import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material'

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(',')
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2A9D9F'
    },
    secondary: {
      main: '#fff'
    },
    error: {
      main: red.A400
    }
  }
})

export default theme

// primary?: PaletteColorOptions;
// secondary?: PaletteColorOptions;
// error?: PaletteColorOptions;
// warning?: PaletteColorOptions;
// info?: PaletteColorOptions;
// success?: PaletteColorOptions;
// mode?: PaletteMode;
// tonalOffset?: PaletteTonalOffset;
// contrastThreshold?: number;
// common?: Partial<CommonColors>;
// grey?: ColorPartial;
// text?: Partial<TypeText>;
// divider?: string;
// action?: Partial<TypeAction>;
// background?: Partial<TypeBackground>;
