import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
const itemUrl = `${baseUrl}/item/`;

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
    // const result = await axios.get(newStoriesUrl);
    const response = await fetch(`${itemUrl + commentId}.json`);
    // const json = await response.json();
    
    return await response.json();
}

export {getComment}
