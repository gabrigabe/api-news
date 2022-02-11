import NewsSchema from '../schemas/news.schema';
import Repository from './Repository';

class NewsRepository extends Repository {
  constructor() {
    super(NewsSchema);
  }
}

export default new NewsRepository();
