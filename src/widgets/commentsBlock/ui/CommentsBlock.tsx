import { useState, useEffect } from 'react'
import { IconButton, Accordion, Button, Div, Title, List} from '@vkontakte/vkui'

import { getArticleById } from 'entities/article/api';
import { Comments } from 'entities/comment/ui/Comments.tsx';

import { Icon16Replay } from '@vkontakte/icons';


function CommentsBlock ({ storyId }) {
    const [comment, setComment] = useState({});

    const getComments = async() => {
      await getArticleById(storyId).then((data) => {
        if (data && data.url) {
          setComment(data);
        }
      });
    }

    const handleClick = async (e) => {
      e.stopPropagation();
      await getComments()
      console.log('handleClick')
    }
  
    useEffect(() => {
      getComments()
    }, []);
  
    const { title, kids, id, url } = comment;
  
    return comment && url ? (
      
      <Accordion open>
        <Accordion.Summary
          iconPosition="before"
        >
          <Div style={{display: "flex", flexDirection: "row", gap: "32px", alignItems: "center"}}>
            <Title>Комментарии</Title>
            <IconButton title="Удалить 36" onClick={handleClick}>
              <Icon16Replay />
            </IconButton>
          </Div>
        </Accordion.Summary>
        <Accordion.Content>
          <div>
            {kids && <Comments commentIds={kids} root />}
          </div>
        </Accordion.Content>
      </Accordion>
  
      // <List>
      //   <Title level="2">Комментарии: {kids.length}</Title>
      //     <Div>
      //       {kids && <Comments commentIds={kids} />}
      //     </Div>
      // </List>
    ) : null;
  }

export {CommentsBlock}