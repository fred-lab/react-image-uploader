import Api from './Api';

export default class FileHandler {
  constructor(files) {
    this.files = files;
  }

  uploadFiles() {
    console.log(this.files);
    Array.from(this.files).forEach(file => this.uploadFile(file));
  }

  uploadFile(file) {
    // todo
  }

  initUpload(file) {
    const data = {
      filename: file.name,
    };

    const formData = new FormData();

    formData.append('data', JSON.stringify(data));

    return Api.initUpload(formData);
  }
}
