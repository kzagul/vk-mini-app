import {apiInstance} from 'shared/api/api.ts'

// const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const itemUrl = `/item/`;

// export const getComment = async (commentId) => {
//     try {
//       const res = await axios
//         .get(`${itemUrl + commentId}.json`)
//         .then(({ data }) => data);
//       return res;
//     } catch (err) {
//       console.error(err);
//     }
//   };
  

// import { selectFields } from '../selectors/selectFields';

async function getComment (commentId) {
    try {
        const response = await apiInstance.get(`${itemUrl + commentId}.json`);
        return response
    } catch (err) {
        console.error(err);
    }
    // const result = await axios.get(newStoriesUrl);
    // const json = await response.json();
    

    // work
    // const response = await fetch(`${itemUrl + commentId}.json`);
    // return await response.json();
}

export {getComment}
