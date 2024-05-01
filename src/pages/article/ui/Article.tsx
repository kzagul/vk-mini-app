import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { Spinner, Button, Header, Accordion, View, Panel, PanelHeader, Group, Div, Title, List} from '@vkontakte/vkui'

import { getArticleById } from 'entities/article/api';

import { getComment } from 'entities/comment/api';

import { Icon24AddOutline, Icon24MinusOutline } from '@vkontakte/icons';

import { CommentsBlock } from 'widgets/commentsBlock/ui/commentsBlock.tsx';


function ArticlePage() {     
    // const id = 40207549
    const { id } = useParams();
    const params = useParams();

    const [article, setArticle] = useState(null);
    const [comment, setComment] = useState({});
    
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
        // fetch('https://random-data-api.com/api/users/random_user')
        //       .then(response => response.json())
        //       .then(data => setUser(data));
  
        // console.log(user)
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //   .then((res) => res.json())
        //   .then(newsPosts);
        // getArticles()
  
        // console.log(news)
        getNewsById(id)
          .catch(console.error);

      }, []);

    const date = new Date(article?.time)

  
    return (
        <>
         <Group
            header={<Header mode="secondary">Новость</Header>}
          >
            <Title level="1">{article?.title}</Title>  

            {pending ?
                <Spinner size="large" style={{ margin: '20px 0' }} />
                : 
                <div>
                    <Link to={`/`}>
                        <Button>Все новости</Button>
                    </Link>

                    <p>Автор - by: {article?.by}</p>
                    <br />
                    <p>id: {article?.id}</p>
                    <br />
                    <p>score: {article?.score}</p>
                    <br />
                    {/* <p>time: {new Date(article?.time)}</p> */}
                    {/* <p>time: {article?.time}</p> */}
                    <p>time: {JSON.stringify(new Date(date))}</p>
                    <br />
                    <p>title: {article?.title}</p>
                    <br />
                    <p>type: {article?.type}</p>
                    <br />
                    <p>url: {article?.url}</p>
                </div>
            }

              <CommentsBlock key={article?.id} storyId={article?.id} />
            </Group>
        </>   
    ); 
} 
export default ArticlePage;