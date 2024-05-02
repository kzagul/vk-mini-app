import React from 'react';
import { Comment } from 'entities/comment/ui/Comment.tsx';
import { Spinner, Accordion, View, Panel, PanelHeader, Group, Div, Title} from '@vkontakte/vkui'

export const Comments = ({ commentIds }) => {

  return (
    <Group>
      {commentIds.slice(0, 3).map(
        (id, i) =>
          id && (
            <div key={id}>
              <Comment commentId={id} />
            </div>
          )
      )}
    </Group>
  );
};
