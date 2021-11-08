import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const EnvironmentDetailItem = ({ data, cardCount }) => {

    const colors = ["#3e2723", "#004d40", "#4a148c", "#ab003c", "#6794c1"];

    return (
        <Grid item xs={12} >
            <Box sx={{ boxShadow: 3, borderRadius: "1rem" }}>
                <Grid container direction="column" >
                    <Grid
                        sx={{ bgcolor: colors[Math.floor(Math.random() * colors.length)], color: "white", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }} item>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", py: cardCount > 3 ? 1 : 2, px: 5 }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                    {data.stationName}
                                </Typography>
                                <Typography sx={{ mx: 1 }} variant="body1">
                                    -
                                </Typography>
                                <Typography variant="h6">
                                    {data.doctorName}
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="body1">
                                    تعداد افراد در صف : {data.inQueuePeople}
                                </Typography>
                            </div>
                        </Box>
                    </Grid>
                    <Grid
                        sx={{ bgcolor: "white", borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem" }} item>
                        <Box sx={{ py: cardCount > 3 ? 2 : 3, px: 5, display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }} >
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="h6" gutterBottom>
                                        نوبت کنونی:
                                    </Typography>
                                    <Typography variant="h6" gutterBottom sx={{ mx: 1, fontWeight: "bold" }} >
                                        {data.nowNobat || "--"}
                                    </Typography>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="body2">
                                        درحال ویزیت:
                                    </Typography>
                                    <Typography variant="body1" sx={{ mx: 1, fontWeight: "bold" }} >
                                        {data.nowSickName || "--"}
                                    </Typography>
                                    <span>(</span>
                                    <Typography variant="body2">
                                        بیمه: {data.nowInsurName || "--"}
                                    </Typography>
                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                        شماره پرونده: {data.nowIDSick || "--"}
                                    </Typography>
                                    <span>)</span>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "start" }} >
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="h6" gutterBottom>
                                        نوبت بعدی:
                                    </Typography>
                                    <Typography variant="h6" gutterBottom sx={{ mx: 1, fontWeight: "bold" }} >
                                        {data.nextnobat || "--"}
                                    </Typography>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="body2">
                                        نفر بعدی:
                                    </Typography>
                                    <Typography variant="body1" sx={{ mx: 1, fontWeight: "bold" }} >
                                        {data.nextSickName || "-"}
                                    </Typography>
                                    <span>(</span>
                                    <Typography variant="body2">
                                        بیمه: {data.nextInsurName || "--"}
                                    </Typography>
                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                        شماره پرونده: {data.nextIDSick || "--"}
                                    </Typography>
                                    <span>)</span>
                                </div>

                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default EnvironmentDetailItem;
