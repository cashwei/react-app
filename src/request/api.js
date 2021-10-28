//导入我们封装好的axios 
import service from "./index";

export const apiArticleEdit = info => service.post('/api/v1/articleEdit', info);