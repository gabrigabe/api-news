import { Request, Response } from 'express';
import NewsService from '../services/News.service';

class NewsController {
  private readonly service: NewsService;

  constructor() {
    this.service = new NewsService();
  }

  public async addOneNew(req: Request, res: Response) {
    const payload = req.body;
    const addNew = await this.service.createNew(payload);
    return res.status(201).json(addNew);
  }
}

export default NewsController;
