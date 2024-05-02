import {apiInstance} from 'shared/api/api.ts'

const newStoriesUrl = `topstories.json`;

async function getArticles () {
    try {
        const response = await apiInstance.get(newStoriesUrl);
        return await response
    } catch (err) {
        console.error(err);
    }
}

export {getArticles}
