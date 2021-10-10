import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const NotFound = () => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 5 }} >
            <Typography variant="h4" >
                صفحه مورد نظر یافت نشد.
            </Typography>
        </Box>
    )
}

export default NotFound;