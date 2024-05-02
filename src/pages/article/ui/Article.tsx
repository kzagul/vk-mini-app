import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { Spinner, Paragraph, Button, Header, Accordion, View, Panel, PanelHeader, Group, Div, Title, List} from '@vkontakte/vkui'

import { getArticleById } from 'entities/article/api';

import { getComment } from 'entities/comment/api';

import { CommentsBlock } from 'widgets/commentsBlock/ui/CommentsBlock.tsx';

import {formatData} from 'shared/lib/formatData'


function ArticlePage() {     
    const { id } = useParams();

    const [article, setArticle] = useState(null);
    
    const [pending, setPending] = useState(true);


    const getNewsById = async (id) => {
        
        const response = await getArticleById(id)
        // const json = await response.json();
        //  if (response.status === 200) {
            setArticle(response)
        // }

        setPending(false)

        
  
        // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        // const json = await response.json();
  
        // if (response.status === 200) {
        //   setNews(json)
        // }
      };


    useEffect(() => {
        getNewsById(id)
          .catch(console.error);

      }, []);

    console.log("article", article)

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
export default ArticlePage;