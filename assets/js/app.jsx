import React from 'react';
import ReactDOM from 'react-dom';


/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "CSS" }] */
import CSS from '../css/app.css';

/** Component */
import ImageUploader from './components/image-uploader';

/* eslint-disable-next-line no-console */
console.log('This React application is an image uploader. See for details: https://github.com/fred-lab/react-image-uploader');

/* App */
ReactDOM.render(
  <ImageUploader />,
  document.getElementById('app'),
);
