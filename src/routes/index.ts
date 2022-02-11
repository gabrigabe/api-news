import {
  Application, NextFunction, Request, Response, Router,
} from 'express';
import news from './news.routes';

export default async (server: Application) => {
  server.use((req: Request, res: Response, next: NextFunction) => {
    news(server, Router());

    next();
  });
};
