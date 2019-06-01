import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index1 from './components/index1'
import Index2 from './components/index2'
import Index3 from './components/index3'
import Index4 from './components/index4'
import Index5 from './components/index5'
import Index6 from './components/index6'
import Index7 from './components/index7'
import Index8 from './components/index8'
import Lixeira from './components/lixeira'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Index1} exact={true} />
            <Route path="/pag2" component={Index2} />
            <Route path="/pag3" component={Index3} />
            <Route path="/pag4" component={Index4} />
            <Route path="/pag5" component={Index5} />
            <Route path="/pag6" component={Index6} />
            <Route path="/pag7" component={Index7} />
            <Route path="/pag8" component={Index8} />
            <Route path="/lixeira" component={Lixeira} />
        </Switch>
    </BrowserRouter>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
