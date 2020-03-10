import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export class ApiClient {
  private axiosConfig: AxiosRequestConfig;
  constructor() {
    this.axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  public get(endpoint: any): Promise<AxiosResponse> {
    return axios.get(endpoint, this.axiosConfig);
  }

  public post(endpoint: any, body: any): Promise<AxiosResponse> {
    return axios.post(endpoint, body, this.axiosConfig);
  }

  public put(endpoint: any, data: any): Promise<AxiosResponse> {
    return axios.put(endpoint, data, this.axiosConfig);
  }

  public delete(endpoint: any): Promise<AxiosResponse> {
    return axios.delete(endpoint, this.axiosConfig);
  }
}
