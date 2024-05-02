import {
    Button,
    Group,
    Header,
    Spinner,
    CardGrid,
} from '@vkontakte/vkui'

import { useState, useEffect } from 'react'

import ArticleCard from 'entities/article/ui/articleCard.tsx'

import { getArticles } from 'entities/article/api';

function ArticlesBlock() {
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
  const [pending, setPending] = useState(true);



  const getNews = async () => {
    const response = await getArticles()
    // const json = await response.json();
    //  if (response.status === 200) {
      setNews(response)
      setPending(false)
    // }

    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    // const json = await response.json();

    // if (response.status === 200) {
    //   setNews(json)
    // }
  };

  const handleClick = async (e) => {
    e.stopPropagation();
    setPending(true)
    await getNews()
    setPending(false)
  }

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


    const intervalCall = setInterval(() => {
      getNews()
        .catch(console.error);
    }, 30000);
    return () => {
      clearInterval(intervalCall);
    };
  }, []);

    return (
        <>
         {pending ?
            <Spinner size="large" style={{ margin: '20px 0' }} />
              : 
            <Group
                mode="card"
                header={<Header mode="secondary">Новости</Header>}
                style={{display: 'flex', flexDirection: "column", justifyContent: 'center'}}
            >
                <Button mode="secondary" title="Обновить" onClick={handleClick} style={{margin: "0 auto"}}>
                Обновить новости
                </Button>
                <br />
                <CardGrid size="s">
                {news?.slice(0, 100)
                    .map((item) => 
                    <ArticleCard 
                        key={item}
                        id={item}
                    />
                    )
                }
                </CardGrid>
            </Group>
          }
        </>
    )
}

export default ArticlesBlock