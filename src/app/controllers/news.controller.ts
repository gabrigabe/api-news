import { Request, Response } from 'express';
import NewsService from '../services/News.service';

class NewsController {
  public async addOneNew(req: Request, res: Response): Promise<Response | Error> {
    try {
      const payload = req.body;
      const addNew = await NewsService.createNew(payload);
      return res.status(201).json(addNew);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  public async getAllNews(req: Request, res: Response): Promise<Response | Error> {
    try {
      const news = await NewsService.findAllNews();
      return res.status(200).json(news);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  public async getOneNew(req: Request, res: Response): Promise<Response | Error> {
    try {
      const { id } = req.params;
      const oneNew = await NewsService.findOneNew(id);
      return res.status(200).json(oneNew);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  public async updateNew(req: Request, res: Response): Promise<Response | Error> {
    try {
      const { id } = req.params;
      const upNew = await NewsService.updateOneNew(id, req.body);
      return res.status(204).json(upNew);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  public async removeNew(req: Request, res: Response): Promise<Response | Error> {
    try {
      const { id } = req.params;
      const remNew = await NewsService.removeOneNew(id);
      return res.status(204).json(remNew);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}

export default new NewsController();
