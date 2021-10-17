import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import EnvironmentDetailItem from "./EnvironmentDetailItem";
import LoadingState from "../common/LoadingState";

const EnvironmentDetail = () => {
    const [envDetailsList, setEnvDetailsList] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const fetchList = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(window.environmentDetail + `=${id}`);
            setEnvDetailsList(data);
        } catch (error) {
            console.log(error);
            setEnvDetailsList([]);
        }
        setLoading(false)
    };

    const fetchEvery10Sec = async () => {
        try {
            const { data } = await axios.get(window.environmentDetail + `=${id}`);
            setEnvDetailsList(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchList()
    }, []);

    useEffect(() => {
        const intervalID = setInterval(() => {
            fetchEvery10Sec()
        }, 10000);

        return () => {
            clearInterval(intervalID)
        }
    }, []);

    if (loading) {
        return <LoadingState />
    }

    if (!loading && envDetailsList.length === 0) {
        return (
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", py: 5 }} >
                <Typography variant="h6" >
                    اطلاعاتی وجود ندارد.
                </Typography>
            </Box>
        )
    }

    return (
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            {envDetailsList.map((env, inx) => {
                return <EnvironmentDetailItem key={inx} data={env} cardCount={envDetailsList.length} />
            })}
        </Grid>
    )
}

export default EnvironmentDetail;