/* eslint class-methods-use-this: ["off", { "exceptMethods": ["preventDefaults"] }] */
/**
 * Handle drag & drop event
 */
export default class Dropzone {
  constructor(dropzone) {
    this.dropzone = dropzone;
  }

  /**
   * Handle a callback when a element enter in the drop zone
   * @param callback
   */
  onEnter(callback) {
    this.listen(['dragenter', 'dragover'], callback);
  }

  /**
   * Handle a callback when a element leave (or drop in) the drop zone
   * @param callback
   */
  onLeave(callback) {
    this.listen(['dragleave', 'drop'], callback);
  }

  /**
   * Handle a callback on the drop event
   * @param callback
   */
  onDrop(callback) {
    this.listen(['drop'], callback);
  }

  /**
   * Listen a list of Drag & Drop event
   * @param events
   * @param callback
   */
  listen(events, callback) {
    /** Prevent default behaviors */
    this.setListeners(events, this.preventDefaults);

    this.setListeners(events, callback);
  }

  /**
   * Set a list of listener with a callback
   * @param types
   * @param callback
   */
  setListeners(types, callback) {
    types.forEach((eventName) => {
      this.dropzone.current.addEventListener(eventName, callback, false);
    });
  }

  /**
   * Prevent default behaviors
   * @param event
   */
  preventDefaults(event) {
    event.preventDefault();
    event.stopPropagation();
  }
}
