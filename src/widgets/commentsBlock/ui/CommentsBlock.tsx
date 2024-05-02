import { useState, useEffect } from 'react'
import {Spinner, IconButton, Accordion, Div, Title} from '@vkontakte/vkui'

import { getArticleById } from 'entities/article/api';
import { CommentsCard } from 'entities/comment/ui/';
import { Article } from 'entities/article/model/';


import { Icon16Replay } from '@vkontakte/icons';

function CommentsBlock ({ articleId } : {articleId: number | string}) {
    const [article, setArticle] = useState<Article>({} as Article);
    const [pending, setPending] = useState<boolean>(true);

    const getComments = async() => {
      await getArticleById(articleId).then((data) => {
        if (data && data.url) {
          setArticle(data);
        }
      });
      setPending(false)
    }

    const handleClick = async (event: any) => {
      setPending(true)
      event.stopPropagation();
      await getComments()
      setPending(false)
    }
  
    useEffect(() => {
      getComments()
    }, []);
  
    const { kids } = article;
  
    return (
      <>
      {pending ?
        <Spinner size="large" style={{ margin: '20px 0' }} />
        : article ? (
          <Accordion>
            <Accordion.Summary
              iconPosition="before"
            >
              <Div style={{display: "flex", flexDirection: "row", gap: "32px", alignItems: "center"}}>
                <Title>Комментарии: {kids?.length}</Title>
                <IconButton title="Удалить 36" onClick={handleClick}>
                  <Icon16Replay />
                </IconButton>
              </Div>
            </Accordion.Summary>
            <Accordion.Content>
              <div>
                {kids && <CommentsCard commentIds={kids} />}
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