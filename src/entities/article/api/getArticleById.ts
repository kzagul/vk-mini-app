import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesUrl = `${baseUrl}newstories.json`;
const storyUrl = `${baseUrl}item/`;

async function getArticleById (storyId) {
    // const result = await axios
    // .get(`${storyUrl + storyId}.json`);
    const response = await fetch(`${storyUrl + storyId}.json`);


  // return selectFields(result.data);
  // return result.data
  return await response.json();

}

export {getArticleById}
