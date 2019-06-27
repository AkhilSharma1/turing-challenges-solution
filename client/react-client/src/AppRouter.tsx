import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';


export const AppRouter: React.FC = () => {
    return (<Router>
        <Switch>
            <Route exact path="/" render={() => <div>Home page works</div>} />
            <Route path="*" render={() => <div>Router works</div>} />
        </Switch>
    </Router>)
}
