import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const EnvironmentDetailItem = ({ data }) => {

    return (
        <Grid item xs={6} md={4} lg={3}  >
            <Box sx={{ boxShadow: 3, borderRadius: "1rem" }}>
                <Grid container direction="column" >
                    <Grid
                        sx={{ bgcolor: "primary.main", color: "white", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} item>
                        <Box sx={{ px: 3, display: "flex", justifyContent: "start", alignItems: "center" }} >
                            <div>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    sx={{ cursor: "unset" }}
                                >
                                    <AccountCircleIcon />
                                </IconButton>
                            </div>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Typography variant="h6">
                                    {data.doctorName}
                                </Typography>
                                <Typography gutterBottom variant="subtitle2">
                                    {data.stationName}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        sx={{ bgcolor: "white", }} item>
                        <Box sx={{ py: 1, px: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                            <Typography variant="caption">
                                بیمار در حال معالجه:
                            </Typography>
                            <Typography variant="subtitle1" textAlign="center">
                                {data.nowSickName || "-"} - {data.nowInsurName || "-"}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        sx={{ bgcolor: "white", }} item>
                        <Box sx={{ py: 1, px: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                            <Typography variant="caption">
                                بیمار بعدی:
                            </Typography>
                            <Typography variant="subtitle1" textAlign="center" sx={{ fontWeight: "bold" }} >
                                {data.nextSickName || "-"} - {data.nextInsurName || "-"}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        sx={{ bgcolor: "lightgray", color: "success", borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem" }} item>
                        <Box sx={{ py: 1, px: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                            <Typography variant="subtitle1">
                                تعداد افراد در صف : {data.inQueuePeople}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default EnvironmentDetailItem;