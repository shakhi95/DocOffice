import React from "react";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import RTL from "./MUI/RTL";
import theme from "./MUI/theme";
import "./assets/css/app.css";

import Layout from "./components/Layout";

const App = () => {

    return (
        <RTL>
            <HashRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Layout />
                </ThemeProvider>
            </HashRouter>
        </RTL>
    );
}

export default App;