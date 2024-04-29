import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesUrl = `${baseUrl}newstories.json`;
const storyUrl = `${baseUrl}item/`;

async function getArticlesById (storyId) {
    const result = await axios
    .get(`${storyUrl + storyId}.json`);

  return selectFields(result.data);
}

export {getArticlesById}
