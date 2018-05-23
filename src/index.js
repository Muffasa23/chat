import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import './css/normalize.css';
import './css/reset.css';
import './css/style.css';
//import chat from './reducers';
import registerServiceWorker from './registerServiceWorker';

//const store = createStore(chat)

ReactDOM.render(
    //< Provider store = {store}>
        <App />,
    //</Provider>, 
    document.getElementById('root')
)

registerServiceWorker();
