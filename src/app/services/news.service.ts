import NewsRepository from '../repositories/news.repository'

class NewsService{
    private readonly repository: NewsRepository
    constructor(){
        this.repository = new NewsRepository()
    }

    public async create(payload: Object){
        return this.repository.create(payload)
        
    }
}

export default NewsService