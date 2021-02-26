import { Request, NextFunction } from 'express';
import { Response, ResponseParams } from './types';

const responseFormat = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const success = ({ data, status = 200, message }: ResponseParams) => {
      res.status(status).json({
        statusCode: status,
        message: message || 'OK',
        error: false,
        data,
      });
    };
    res.success = success;
    next();
  };
};

export default responseFormat;
