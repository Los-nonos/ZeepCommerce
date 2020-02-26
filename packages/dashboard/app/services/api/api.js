import axios from 'axios';
import { handler } from './handlerErrors';

class ApiFech {
  constructor() {
    this.apiUrl = process.env.API_URL;
  }

  get(endpoint) {
    return new Promise(async (resolve, reject) => {
      const requestData = {
        method: 'get',
        endpoint,
      };

      try {
        resolve(await this.makeRequest(requestData));
      } catch (error) {
        reject(error);
      }
    });
  }

  post(endpoint, body) {
    return new Promise(async (resolve, reject) => {
      const requestData = {
        method: 'post',
        endpoint,
        body,
      };

      try {
        resolve(await this.makeRequest(requestData));
      } catch (error) {
        reject(error);
      }
    });
  }

  put(endpoint, body) {
    return new Promise(async (resolve, reject) => {
      const requestData = {
        method: 'put',
        endpoint,
        body,
      };

      try {
        resolve(await this.makeRequest(requestData));
      } catch (error) {
        reject(error);
      }
    });
  }

  delete(endpoint, body) {
    return new Promise(async (resolve, reject) => {
      const requestData = {
        method: 'delete',
        endpoint,
        body,
      };

      try {
        resolve(await this.makeRequest(requestData));
      } catch (error) {
        reject(error);
      }
    });
  }

  makeRequest(requestData, headers = null) {
    return new Promise(async (resolve, reject) => {
      const response = await axios({
        method: requestData.method,
        url: `${this.apiUrl}${requestData.endpoint}`,
        data: requestData.body ? requestData.body : null,
        headers,
      }).catch(error => {
        handler(error.response);
        reject(error.response);
      });

      resolve(response);
    });
  }
}

export default new ApiFech();
