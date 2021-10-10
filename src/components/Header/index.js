import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useLocation, Link } from "react-router-dom";

import { getDeviceTime, getFarsiDate } from "../../utils/helperFuncs";

const Header = () => {

    const [time, setTime] = useState(getDeviceTime());

    const { pathname } = useLocation();

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(getDeviceTime())
        }, 60000);

        return () => {
            clearInterval(intervalID)
        }
    }, []);

    const renderDate = () => {
        const nowTime = new Date().getTime();
        const dateObj = getFarsiDate(nowTime);
        return `${dateObj.dayOfWeek} ${dateObj.farsiDate.split("/")[2]} ${dateObj.farsiMonth}`
    }

    return (
        <Box sx={{ flexGrow: 1, mb: 5 }}>
            <AppBar position="static">
                <Container fixed>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{ cursor: "unset" }}
                        >
                            <AccessTimeIcon />
                        </IconButton>
                        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }} >
                            <Typography variant="h6" component="div" >
                                {time}
                            </Typography>
                            <Typography variant="subtitle2" component="div" sx={{ mb: 1 }}>
                                {renderDate()}
                            </Typography>
                        </Box>
                        {pathname !== "/" &&
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Button variant="contained" color="secondary">
                                    صفحه اصلی
                                    <ArrowBackIcon sx={{ ml: 1 }} fontSize="small" />
                                </Button>
                            </Link>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Header;