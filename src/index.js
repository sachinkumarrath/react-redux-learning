import React from 'react';
import ReactDOM from 'react-dom';
import Base from './scripts/baseContainer';
import { Router, Route, Link, hashHistory} from 'react-router';

const routeApp = (
    <Router history={hashHistory}>
        <Route path="/" component={Base}/>
    </Router>
 );

ReactDOM.render(
  routeApp,//<Base/>,
  document.getElementById('root'),
  completionReactLoad
);

function completionReactLoad(){
    console.timeEnd('react-app');
}
