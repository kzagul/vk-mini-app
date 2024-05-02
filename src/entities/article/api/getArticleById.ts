import {apiInstance} from 'shared/api/api.ts'

import {Article, ArticleData} from '../model'

const articleUrl = `item/`;


function processData(data: ArticleData) {
 return new Article(data)
}

async function getArticleById (articleId:  number | string) {
  try {
    const response = await apiInstance.get(`${articleUrl + articleId}.json`);
    return processData(response as ArticleData)
  } catch (err) {
    console.error(err);
  }
}

export {getArticleById}
