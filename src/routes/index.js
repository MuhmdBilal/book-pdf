import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PublicRoutes } from "./public"
function MainRoute() {
    return (
        <div>
            <Router>
                <Switch>
                    {PublicRoutes?.map((item, index) => (
                        <Route
                            key={index}
                            exact
                            path={item.path}
                            component={item.component}
                        />
                    ))}
                </Switch>
            </Router>
        </div>
    )
}

export default MainRoute