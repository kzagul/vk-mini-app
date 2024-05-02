import {apiInstance} from 'shared/api/api.ts'

// const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const newStoriesUrl = `topstories.json`;

async function getArticles () {
    try {
        const response = await apiInstance.get(newStoriesUrl);
        return await response
    } catch (err) {
        console.error(err);
    }

    // working
    // const response = await fetch(newStoriesUrl);
    // return await response.json();
}

export {getArticles}
