import React from 'react';
// import { Comment } from 'entities/comment/ui/Comment.tsx';
import { Comment } from 'entities/comment/ui/';

import { Spinner, Accordion, View, Panel, PanelHeader, Group, Div, Title} from '@vkontakte/vkui'

export const Comments = ({ commentIds, root }) => {

  return (
    <Group>
      {/* slice(0, 3) */}
      {commentIds.map(
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
