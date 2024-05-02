import { useState, useEffect } from 'react'
import {Spinner, IconButton, Accordion, Button, Div, Title, List} from '@vkontakte/vkui'

import { getArticleById } from 'entities/article/api';
// import { Comments } from 'entities/comment/ui/Comments.tsx';
import { Comments } from 'entities/comment/ui/';


import { Icon16Replay } from '@vkontakte/icons';


function CommentsBlock ({ articleId }) {
    const [comment, setComment] = useState({});
    const [pending, setPending] = useState(true);

    const getComments = async() => {
      await getArticleById(articleId).then((data) => {
        if (data && data.url) {
          setComment(data);
        }
      });
      setPending(false)
    }

    const handleClick = async (e) => {
      setPending(true)
      e.stopPropagation();
      await getComments()
      setPending(false)
    }
  
    useEffect(() => {
      getComments()
    }, []);
  
    const { title, kids, id, url } = comment;

    console.log(comment)
  
    return (
      <>
      {pending ?
        <Spinner size="large" style={{ margin: '20px 0' }} />
        : 
    
        comment && url ? (
      
          <Accordion open={pending}>
            <Accordion.Summary
              iconPosition="before"
            >
              <Div style={{display: "flex", flexDirection: "row", gap: "32px", alignItems: "center"}}>
                <Title>Комментарии: {kids.length}</Title>
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
          ) : null
        }
      </>
    )
}

export {CommentsBlock}