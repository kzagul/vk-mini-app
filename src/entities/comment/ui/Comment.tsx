import { useEffect, useState } from 'react';
import { getComment } from 'entities/comment/api/';
import { CommentsCard } from './Comments.tsx';
import { SimpleCell, Avatar, Div, List} from '@vkontakte/vkui'

import {createMarkup} from "shared/lib/createMarkup.ts";
import { Comment } from 'entities/comment/model/';

import {formatData} from 'shared/lib/formatData'

export const CommentCard = ({ commentId } : {commentId: number | string}) => {
  const [comment, setComment] = useState<Comment>({} as Comment);

  useEffect(() => {
    getComment(commentId).then((data) => data && data.type && setComment(data));
  }, []);

  const { text, kids } = comment;

  return (
    <Div>
      {comment && (
        <>
            <List>
                <SimpleCell before={<Avatar initials={comment?.by !== undefined ? comment?.by[0] : ``} src={'user_id34'} size={32} />}>{comment?.by}</SimpleCell>
                <SimpleCell>{formatData(comment.time)}</SimpleCell>
            </List>
            <div dangerouslySetInnerHTML={createMarkup(text)}></div>
          {kids && <CommentsCard commentIds={kids} />}
        </>
      )}
    </Div>
  );
};
