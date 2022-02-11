import { Application, Router } from 'express';
import NewsController from '../app/controllers/News.controller';

export default async (server: Application, routes: Router, prefix = '/api/v1/news') => {
  routes.post('/', NewsController.addOneNew);
  routes.get('/', NewsController.getAllNews);
  routes.get('/:id', NewsController.getOneNew);
  routes.put('/:id', NewsController.updateNew);
  routes.delete('/:id', NewsController.removeNew);

  server.use(prefix, routes);
};
