import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { Spinner, Paragraph, Button, Group, Div, Title} from '@vkontakte/vkui'

import { getArticleById } from 'entities/article/api';

import { Article } from 'entities/article/model';

import { CommentsBlock } from 'widgets/commentsBlock/ui/CommentsBlock.tsx';

import {formatData} from 'shared/lib/formatData'

function ArticleDetail() {     
    const { id } = useParams();

    const [article, setArticle] = useState<Article>({} as Article);
    
    const [pending, setPending] = useState(true);

    const getNewsById = async (id: number) => {
        
    const response = await getArticleById(Number(id))
      if (response !== undefined) {
        setArticle(response)
      }

      setPending(false)
    };


    useEffect(() => {
      getNewsById(Number(id))
        .catch(console.error);

    }, []);

    return (
        <>
          {pending ?
              <Spinner size="large" style={{ margin: '20px 0' }} />
              : 
              <Group>
                <Div style={{display: "flex", flexDirection: "column", gap: "16px", margin: "0 16px"}}>
                  <Title level="1">{article?.title}</Title>  
                  <Paragraph>Автор статьи: {article?.by}</Paragraph>
                  <Paragraph>Рейтинг: {article?.score}</Paragraph>
                  <Paragraph>Дата публикации: {formatData(article?.time)}</Paragraph>
                  <Paragraph>Ссылка на статью: <a href={article?.url}>{article?.url}</a></Paragraph>

                  <Div style={{display: "flex", flexDirection: "row", gap: "16px"}}>
                    <Link to={article?.url}> 
                      <Button mode="secondary" size={'m'}>Перейти по ссылке</Button>
                    </Link>
                    <Link to={`/`}>
                      <Button mode="secondary" size={'m'}>Все новости</Button>
                    </Link>
                  </Div>
                </Div>

                <CommentsBlock key={article?.id} articleId={article?.id} />
              </Group>
            }
        </>   
    ); 
} 
export default ArticleDetail;