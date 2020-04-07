import axios from 'axios';

export class ApiClient {
  axiosConfig;
  constructor() {
    this.axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  get(endpoint) {
    return axios.get(endpoint, this.axiosConfig);
  }

  post(endpoint, body) {
    return axios.post(endpoint, body, this.axiosConfig);
  }

  put(endpoint, data) {
    return axios.put(endpoint, data, this.axiosConfig);
  }

  delete(endpoint) {
    return axios.delete(endpoint, this.axiosConfig);
  }
}
