import React from 'react'; 
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import ArticlesBlock from "widgets/articlesBlock"

import {
  AppRoot,
  View,
  Panel,
  PanelHeader,
  Group,
  Header,
  CardGrid,
} from '@vkontakte/vkui'

import ArticleCard from 'entities/article/ui/articleCard.tsx'

import { getArticles, getArticleById } from 'entities/article/api';

function NewsPage() {     

      // const [news, setNews] = useState(null)

  // useEffect(() => {
  //   const storyId = 1
  //   // fetch(`${storyUrl + storyId}.json`)
  //   // fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", {
  //   //   method: "GET",
  //   //   headers: {
  //   //     "X-RapidAPI-Key": "your-api-key",
  //   //     "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
  //   //   },
  //   // })
  //     // .then((response) => response.json())
  //     // .then((data) => {
  //     //   setJoke(data[0].joke);
  //     //   console.log(data);
  //     // })
  //     // .catch((error) => console.log(error));
  // }, []);

    const [news, setNews] = useState(null);

    const getNews = async () => {
      const response = await getArticles()
      // const json = await response.json();
      //  if (response.status === 200) {
        setNews(response)
      // }

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
      getNews()
        .catch(console.error);
    }, []);

    console.log("news: ", news)

    return (
        <>
         <PanelHeader>Новости хакинга от HackerNews</PanelHeader>

          <Group
            mode="card"
            header={<Header mode="secondary">Новости</Header>}
          >
            <CardGrid size="s">
              {news?.slice(0, 10)
                .map((item) =>
                  <ArticleCard 
                    key={item}
                    id={item}
                  />
                )
              }
            </CardGrid>
          </Group>
        </>      
    ); 
} 
export default NewsPage;