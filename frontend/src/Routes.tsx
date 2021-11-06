import Dashboar from 'pages/Dashboard/Index';
import Home from 'pages/Home/Index';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/dashboard">
                    <Dashboar/>
                </Route>
            </Switch>
        
        </BrowserRouter>
    );
}

export default Routes;