import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import AwesomeComp from './main';
// const AwesomeComp = lazy(() => import('../user1/main'));

ReactDOM.render(<AwesomeComp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// console.log('Done')
