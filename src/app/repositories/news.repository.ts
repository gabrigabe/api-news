import NewsSchema from '../schemas/news.schema';
import Repository from './repository';

class NewsRepository extends Repository {
  constructor() {
    super(NewsSchema);
  }
}

export default NewsRepository;
