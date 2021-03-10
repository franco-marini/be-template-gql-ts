import { Response as ExpressResponse } from 'express';

export interface ResponseParams {
  data: object | object[] | string;
  status?: number;
  message?: string;
}

export interface Response extends ExpressResponse {
  success: (params: ResponseParams) => void;
}
