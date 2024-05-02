import { CommentCard } from 'entities/comment/ui/';

import { Group } from '@vkontakte/vkui'

export const CommentsCard = ({ commentIds }) => {

  return (
    <Group>
      {commentIds.slice(0, 3).map(
        (id) =>
          id && (
            <div key={id}>
              <CommentCard commentId={id} />
            </div>
          )
      )}
    </Group>
  );
};
