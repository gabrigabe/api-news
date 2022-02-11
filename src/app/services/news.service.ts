import NewsRepository from '../repositories/News.repository';

class NewsService {
  public async createNew(payload: Object) {
    return NewsRepository.create(payload);
  }

  public async findAllNews() {
    const allnews = await NewsRepository.findAll();
    return allnews;
  }

  public async findOneNew(id: string) {
    const oneNew = await NewsRepository.findOne(id);
    if (!oneNew) throw new Error('NotFound');
    return oneNew;
  }

  public async updateOneNew(id: string, payload: Object): Promise<void> {
    const updatedNew = NewsRepository.update(id, payload);
    if (!updatedNew) throw new Error('NotFound');
  }

  public async removeOneNew(id: string): Promise<void> {
    const removeNew = await NewsRepository.remove(id);
    if (!removeNew) throw new Error('NotFound');
  }
}

export default new NewsService();
