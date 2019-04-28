import React from 'react';
import ImageDropZone from './dropzone/image-dropzone';
import ImagePreview from './preview/image-preview';

/**
 * Main Component
 * @returns {*}
 * @constructor
 */
export default function ImageUploader() {
  /** Render */
  return (
    <main className="image-uploader">
      <ImageDropZone />
      <ImagePreview />
    </main>
  );
}
