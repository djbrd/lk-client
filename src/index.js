import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import storeFactory from './store'

//import registerServiceWorker from './registerServiceWorker';

const store = storeFactory()

window.React = React
window.store = store

render(
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

//registerServiceWorker();
