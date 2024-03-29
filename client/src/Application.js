import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import P404 from './components/p404/P404';

const Application = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/game1" component={Home} />
                <Route exact path="/" component={P404} />
                <Route path="*" component={P404} />
            </Switch>
        </main>
    );
};

export default Application;
