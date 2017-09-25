// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Internal Dependencies
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Render app to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
