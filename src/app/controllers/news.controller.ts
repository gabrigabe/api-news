import { Request, Response } from 'express';
import NewsService from '../services/News.service';

class NewsController {
  public async addOneNew(req: Request, res: Response) {
    try {
      const payload = req.body;
      const addNew = await NewsService.createNew(payload);
      return res.status(201).json(addNew);
    } catch (error) {
      return res.status(500).json();
    }
  }

  public async getAllNews(req: Request, res: Response) {
    const news = await NewsService.findAllNews();
    return res.status(200).json(news);
  }
}

export default new NewsController();
