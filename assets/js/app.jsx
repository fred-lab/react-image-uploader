import React from 'react';
import ReactDOM from 'react-dom';

/** Component */
import ImageUploader from './components/image-uploader';

/** Import global CSS to compile with Webpack */
require('../sass/app.scss');

/* eslint-disable-next-line no-console */
console.log('This React application is an image uploader. See for details: https://github.com/fred-lab/react-image-uploader');

/** App */
ReactDOM.render(
  <ImageUploader />,
  document.getElementById('app'),
);
