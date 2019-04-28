import React, { useEffect, useState } from 'react';
import Parameters from '../../parameters';

/**
 * Drop zone component
 * @returns {*}
 * @constructor
 */
export default function ImageDropZone() {
  /** Variables */
  const text = Parameters.TRAD.IMAGE_UPLOADER;
  const dropZone = React.createRef();

  /** States */
  const [isHover, setIsHover] = useState(false);

  /** Functions */

  /**
   * Handle the list of file to upload
   * @param files
   */
  const handleFile = (files) => {
    /* eslint-disable-next-line no-console */
    console.log(files);
  };

  /**
   * Set a list of listener with a callback
   * @param types
   * @param callback
   */
  const setListeners = (types, callback) => {
    types.forEach((eventName) => {
      dropZone.current.addEventListener(eventName, callback, false);
    });
  };

  /**
   * Prevent default behaviors
   * @param event
   */
  const preventDefaults = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  /** Effects */
  useEffect(
    () => {
      /** Prevent default behaviors */
      setListeners(['dragenter', 'dragover', 'dragleave', 'drop'], preventDefaults);

      /** When a element enter in the drop zone, highlight the drop zone */
      setListeners(['dragenter', 'dragover'], () => setIsHover(true));

      /** When a element leave (or drop in) the drop zone, unhighlight the drop zone */
      setListeners(['dragleave', 'drop'], () => setIsHover(false));

      /** Handle the file on the drop event */
      setListeners(['drop'], event => handleFile(event.dataTransfer.files));
    },
  );

  /** Render */
  return (
    <section className="image-drop-zone">
      <div className="drop-zone" ref={dropZone}>

        <svg
          className="svg-border"
          width="797"
          height="503"
          viewBox="0 0 797 503"
          fill="none"
          fillOpacity="0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="797" height="503" fill="#E5E5E5" />
          <rect width="797" height="503" fill="white" />
          <g filter="url(#filter0_d)">
            <circle
              cx="399"
              cy="251"
              r="235"
              stroke="#C4C4C4"
              strokeWidth="18"
              strokeLinecap="round"
              strokeDasharray="100 40"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="151"
              y="7"
              width="496"
              height="496"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
              />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>

        <div className="drop-label">
          <i className="far fa-arrow-alt-circle-down" />
          <h2>{isHover ? text.LABEL_HOVER_TRUE : text.LABEL_HOVER_FALSE}</h2>
        </div>

        <form className="drop-form">
          <input type="file" id="file-input" name="file-input" required onChange={e => handleFile(e.target.files)} />
        </form>

      </div>
    </section>
  );
}
