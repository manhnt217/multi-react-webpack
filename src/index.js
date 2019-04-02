import React from 'react';
import ReactDOMServer from 'react-dom/server';

import('./user1/main').then(
  comp => {
    const htmlString = ReactDOMServer.renderToString(React.createElement(comp.default, {message: 'GGMU'}, null));
    console.log(htmlString)
  }
)
