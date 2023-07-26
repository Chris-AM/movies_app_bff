import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../http-adapter/http-adapter.interface';

@Injectable()
export class AxiosService implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string, config?: any): Promise<T> {
    try {
      const { data } = await this.axios.get(url, config);
      return data;
    } catch (error) {
      throw new Error('Error at logs');
    }
  }
}
