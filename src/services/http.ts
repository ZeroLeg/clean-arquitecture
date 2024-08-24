import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// Definir la interfaz para la respuesta de la API
export interface ApiResponse<T> {
  data: T
  status: number
  statusText: string
}

// Definir la interfaz para el cliente HTTP
export interface HttpClient {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>>
  post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<T>>>
  put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<T>>>
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>>
}

// Implementar la clase que usará Axios
export class AxiosHttpClient {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL
    })
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<ApiResponse<T>>> {
    return this.axiosInstance.get<ApiResponse<T>>(url, config)
  }

  public post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    return this.axiosInstance.post<ApiResponse<T>>(url, data, config)
  }

  public put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    return this.axiosInstance.put<ApiResponse<T>>(url, data, config)
  }

  public delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ApiResponse<T>>> {
    return this.axiosInstance.delete<ApiResponse<T>>(url, config)
  }
}

const httpClient: HttpClient = new AxiosHttpClient('https://localhost:3000/api/')
export default httpClient
