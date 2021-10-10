import { createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

const theme = createTheme(
    {
        direction: "rtl",
        typography: {
            fontFamily: 'IRANSansWeb',
            fontSize: window.REACT_APP_FONT_SIZE,
        },
        palette: {
            primary: {
                main: "#6794c1"
            }
        }
    },
    faIR,
);


export default theme;