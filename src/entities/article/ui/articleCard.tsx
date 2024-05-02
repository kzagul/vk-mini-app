import { Card, Div, Title, Button, Paragraph } from '@vkontakte/vkui'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import { getArticleById } from 'entities/article/api';

import { Article } from 'entities/article/model';

import {formatData} from 'shared/lib/formatData'

function ArticleCard({ id } : { id: string}) {
  const [article, setArticle] = useState<Article>({} as Article);

  useEffect(() => {
    getArticleById(id).then((data) => {
      if (data && data.url) {
        setArticle(data);
      }
    });
  }, []);


  return (
    <>
    {article && article?.by
      ?
    <Card mode="shadow">
      <Div
        style={{
          display: 'flex',
          minHeight: 220,
          alignItems: 'start',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '16px',
          paddingTop: '16px',
          paddingBottom: '16px',
        }}
      >
       
       <Div style={{display: 'flex',  flexDirection: 'column', gap: "4px", padding: '0px'}}>
          <Title level={'2'}>{article?.title}</Title>
          <Paragraph>
            Автор: {article?.by || "Нет автора"}
          </Paragraph>
        </Div>

          <Div style={{display: 'flex',  flexDirection: 'column', gap: "8px", padding: '0px'}}>
            <Div style={{display: 'flex',  flexDirection: 'row', gap: "8px", padding: '0px', flexWrap: "wrap"}}>
              <Paragraph>
                Дата: {formatData(article?.time)}
              </Paragraph>
              <Paragraph>
                Рейтинг: {article?.score}
              </Paragraph>
            </Div>
          
            
            <Link to={`article/${article?.id}`}> 
              <Button size={'l'}>Подробнее</Button>
            </Link>
          </Div>
      </Div>
    </Card>
        : ``
      }
    </>
  )
}

export default ArticleCard