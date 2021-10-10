import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingState = () => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 5 }} >
            <CircularProgress size="3rem" color="secondary" sx={{ mb: 2 }} />
            <Typography variant="h6" >
                در حال دریافت اطلاعات...
            </Typography>
        </Box>
    )
}

export default LoadingState;