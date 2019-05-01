import React, { useEffect, useState } from 'react';
import Parameters from '../../parameters';
import Dropzone from '../../services/Dropzone';
import FileHandler from '../../services/FileHandler';

/**
 * Drop zone component
 * @returns {*}
 * @constructor
 */
export default function ImageDropZone() {
  /** Variables */
  const text = Parameters.TRAD.IMAGE_UPLOADER;
  const dropZoneElement = React.createRef();
  const dropzone = new Dropzone(dropZoneElement);

  /** States */
  const [isHover, setIsHover] = useState(false);

  /** Functions */

  /**
   * Handle the list of file to upload
   * @param files
   */
  const handleFile = (files) => {
    const filehandler = new FileHandler(files);

    filehandler.uploadFiles();
  };

  /**
   * Open the file modal to select a file
   */
  const openFileModal = () => {
    document.getElementById('file-input').click();
  };


  /** Effects */
  useEffect(
    () => {
      /** When a element enter in the drop zone, highlight the drop zone */
      dropzone.onEnter(() => setIsHover(true));

      /** When a element leave (or drop in) the drop zone, unhighlight the drop zone */
      dropzone.onLeave(() => setIsHover(false));

      /** Handle the file on the drop event */
      dropzone.onDrop(event => handleFile(event.dataTransfer.files));
    }, [],
  );

  /** Render */
  return (
    <section className="image-drop-zone">
      <div className={isHover ? 'drop-zone hover' : 'drop-zone'} ref={dropZoneElement} role="presentation" onClick={openFileModal}>

        <svg
          className={isHover ? 'svg-border rotate' : 'svg-border'}
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
              stroke={isHover ? '#4993fa' : '#C4C4C4'}
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

        <div className={isHover ? 'drop-label hover' : 'drop-label'}>
          <i className="far fa-arrow-alt-circle-down" />
          <h2>{isHover ? text.LABEL_HOVER_TRUE : text.LABEL_HOVER_FALSE}</h2>
          {!isHover && <p>or click here</p>}
        </div>

        <form className="drop-form">
          <input type="file" id="file-input" name="file-input" multiple required onChange={e => handleFile(e.target.files)} />
        </form>

      </div>
    </section>
  );
}
