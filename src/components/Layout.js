import React from "react";
import { Switch, Route } from "react-router-dom";

import Grid from '@mui/material/Grid';

import Header from "./Header";
import EnvironmentsList from "./EnvironmentsList";
import EnvironmentDetail from "./EnvironmentDetail";
import NotFound from "./NotFound";

const Layout = () => {

    return (
        <Grid container direction="column">
            <Grid item>
                <Header />
            </Grid>
            <Grid item container >
                <Grid item sm={1} />
                <Grid item sm={10}>
                    <Switch>
                        <Route exact path="/" component={EnvironmentsList} />
                        <Route exact path="/environment/:id" component={EnvironmentDetail} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Grid>
                <Grid item sm={1} />
            </Grid>
        </Grid>
    );
}


export default Layout;