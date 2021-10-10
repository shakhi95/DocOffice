import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import EnvironmentItem from "./EnvironmentItem";
import LoadingState from "../common/LoadingState";

const EnvironmentsList = () => {
    const [envList, setEnvList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchList = async () => {
        setLoading(true)

        try {
            const { data } = await axios.get(window.allEnvironmentsUrl);
            setEnvList(data);
        } catch (error) {
            console.log(error);
            setEnvList([]);
        }

        setLoading(false)
    };

    useEffect(() => {
        fetchList()
    }, []);

    if (loading) {
        return <LoadingState />
    }

    if (!loading && envList.length === 0) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 5 }} >
                <Typography variant="h6" >
                    اطلاعاتی وجود ندارد.
                </Typography>
            </Box>
        )
    }

    return (
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {envList.map((env, inx) => {
                return <EnvironmentItem key={inx} data={env} />
            })}
        </Grid>
    )

}

export default EnvironmentsList;