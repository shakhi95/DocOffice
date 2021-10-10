import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import RTL from "./MUI/RTL";
import theme from "./MUI/theme";
import "./assets/css/app.css";

import Layout from "./components/Layout";

const App = () => {

    return (
        <RTL>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Layout />
                </ThemeProvider>
            </BrowserRouter>
        </RTL>
    );
}

export default App;