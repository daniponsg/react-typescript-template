/*!
 * (C) Copyright 2020.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential.
 */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WelcomeScreen from './routes/welcome';

function Routing(): React.ReactElement {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/">
                    <WelcomeScreen />
                </Route>

                <Route path="*">
                    <h3>404 Not Found</h3>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routing;
