import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import { FocusStyleManager } from "@blueprintjs/core";
import App from './App';
import * as serviceWorker from './serviceWorker';
FocusStyleManager.onlyShowFocusOnTabs();


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
