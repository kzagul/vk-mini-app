import {apiInstance} from 'shared/api/api.ts'

const articleUrl = `item/`;

async function getArticleById (articleId) {
  try {
    const response = await apiInstance.get(`${articleUrl + articleId}.json`);
    return response
  } catch (err) {
    console.error(err);
  }


  // work
  // const response = await fetch(`${storyUrl + storyId}.json`);
  // return await response.json();
}

export {getArticleById}
