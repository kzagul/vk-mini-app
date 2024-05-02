import { Card, Div, Title, Button } from '@vkontakte/vkui'
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
    // onClick={() => window.open(url, '_blank').focus()}
    <>
    {article && article?.by
      ?
    <Card mode="shadow">
      {/* <Link to={`article/${article?.id}`}> */}
      <Div
        style={{
          display: 'flex',
          height: 250,
          alignItems: 'start',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '16px',
          paddingTop: '32px',
          paddingBottom: '32px'
        }}
      >
        <Title level={'2'}>{article?.title}</Title>

            <p>
              {article?.by || "Нет автора"}
            </p>
            <p>
              Дата: {formatData(article?.time)}
            </p>
            <p>
              Рейтинг: {article?.score}
            </p>
          
          <Link to={`article/${article?.id}`}> 
            <Button size={'l'}>Подробнее</Button>
          </Link>
      </Div>
    </Card>
        : ``
      }
    </>
  )
}

export default ArticleCard