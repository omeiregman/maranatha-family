import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/normalize.css';
import '../src/css/main.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
