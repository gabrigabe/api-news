import NewsRepository from '../repositories/News.repository';

class NewsService {
  public async createNew(payload: Object) {
    return NewsRepository.create(payload);
  }

  public async findAllNews() {
    const allnews = await NewsRepository.findAll();
    return allnews;
  }

  public async updateOneNew(id: string, payload: Object): Promise<void> {
    await NewsRepository.update(id, payload);
  }

  public async removeOneNew(id: string): Promise<void> {
    await NewsRepository.remove(id);
  }
}

export default new NewsService();
