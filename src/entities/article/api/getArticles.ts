import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesUrl = `${baseUrl}newstories.json`;
const storyUrl = `${baseUrl}item/`;

// import { selectFields } from '../selectors/selectFields';

async function getArticles () {
    // const result = await axios.get(newStoriesUrl);
    const response = await fetch(newStoriesUrl);
    // const json = await response.json();
    
    return await response.json();
}

export {getArticles}
