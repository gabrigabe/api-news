import NewsService from '../services/news.service'

class NewsController{
    private readonly service: NewsService
    constructor(){
        this.service = new NewsService()
    }
}

export default NewsController