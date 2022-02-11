import NewsRepository from '../repositories/news.repository'

class NewsService{
    private readonly repository: NewsRepository
    constructor(){
        this.repository = new NewsRepository()
    }

    async create(payload: Object){
        return this.repository.create(payload)
        
    }
}

export default NewsService