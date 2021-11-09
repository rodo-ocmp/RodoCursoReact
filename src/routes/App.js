import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexContainer from "../containers/IndexContainer";
import WelcomeContainer from '../containers/WelcomeContainer';
import RFCContainer from '../containers/RFCContainer';

const App = () =>{

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <IndexContainer /> 
                </Route>

                <Route exact path="/welcome">
                    <WelcomeContainer/>
                </Route>

                <Route exact path="/rfc">
                    <RFCContainer />
                </Route>

                <Route>
                    <div>
                    <h1>404 Not Found</h1>
                    </div>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}   

export default App;