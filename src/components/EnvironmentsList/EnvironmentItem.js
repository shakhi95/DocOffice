import React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ApartmentIcon from '@mui/icons-material/Apartment';

const EnvironmentItem = ({ data }) => {
    return (
        <Grid item xs={6} md={4} lg={3}>
            <Link to={`/environment/${data.id}`} style={{ textDecoration: "none", width: "100%" }}>
                <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    sx={{ width: "100%", minHeight: "10vh" }}>
                    <ApartmentIcon sx={{ mr: 1 }} />
                    {data.name}
                </Button>
            </Link>
        </Grid>
    )
}

export default EnvironmentItem;