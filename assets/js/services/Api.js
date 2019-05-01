import axios from 'axios';
import Parameters from '../parameters';

export default {
  post(route, data = {}) {
    axios.post(route, data);
  },
  initUpload(data) {
    return this.post(Parameters.HOST.ROUTE.API_INIT_UPLOAD, data);
  },
  transferFile(data) {
    return this.post(Parameters.HOST.ROUTE.API_UPLOAD, data);
  },
};
