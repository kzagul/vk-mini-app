import React, { useEffect, useState } from 'react';
import { getComment } from 'entities/comment/api/';
import { Comments } from './Comments.tsx';
import { Title, Spinner, Accordion, View, Panel, Header, SimpleCell, Avatar, PanelHeader, Group, Div, List} from '@vkontakte/vkui'

import {createMarkup} from "shared/lib/createMarkup.ts";

export const Comment = ({ commentId }) => {
  const [comment, setComment] = useState({});

  useEffect(() => {
    getComment(commentId).then((data) => data && data.type && setComment(data));
  }, []);

  const { text, kids } = comment;

  return (
    <Div>
      {comment && !comment.deleted && (
        <>
            <List>
                <SimpleCell before={<Avatar initials={comment?.by !== undefined ? comment?.by[0] : ``} src={'user_id34'} size={32} />}>{comment?.by}</SimpleCell>
                <SimpleCell>{comment?.time}</SimpleCell>
            </List>
            <div dangerouslySetInnerHTML={createMarkup(text)}></div>
          {kids && <Comments commentIds={kids} />}
        </>
      )}
    </Div>
  );
};
