import NewsRepository from '../repositories/news.repository';

class NewsService {
  private readonly repository: NewsRepository;

  constructor() {
    this.repository = new NewsRepository();
  }

  public async createNew(payload: Object) {
    return this.repository.create(payload);
  }

  public async findAllNews() {
    return this.repository.findAll();
  }
}

export default NewsService;
