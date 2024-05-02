import {
    Button,
    Group,
    Header,
    Spinner,
    CardGrid,
} from '@vkontakte/vkui'

import { useState, useEffect } from 'react'

import ArticleCard from 'entities/article/ui/'

import { getArticles } from 'entities/article/api';

function ArticlesBlock() {
  const [news, setNews] = useState<number[]>([]);
  const [pending, setPending] = useState(true);

  const getNews = async () => {
    const response = await getArticles()
    if (response) {
      setNews(response)
    }
      setPending(false)
  };

  // React.ChangeEvent<HTMLInputElement>
  const handleClick = async (event: any) => {
    event.stopPropagation();
    // setPending(true)
    // await getNews()
    // setPending(false)
  }

  useEffect(() => {
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
                        id={item.toString()}
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