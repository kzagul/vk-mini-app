import {apiInstance} from 'shared/api/api.ts'

const itemUrl = `/item/`;

import {Comment, CommentData} from '../model'

function processData(data: CommentData) {
    return new Comment(data)
   }

async function getComment (commentId: number | string) {
    try {
        const response = await apiInstance.get(`${itemUrl + commentId}.json`);
        return processData(response as CommentData)
    } catch (err) {
        console.error(err);
    }
}

export {getComment}
