import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";

import { getArticleById } from 'entities/article/api';


function ArticlePage() {     
    // const id = 40207549
    const { id } = useParams();
    const params = useParams();

    const [article, setArticle] = useState(null);
    

    const getNewsById = async (id) => {
        const response = await getArticleById(id)
        // const json = await response.json();
        //  if (response.status === 200) {
            setArticle(response)
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
        getNewsById(id)
          .catch(console.error);
      }, []);

      console.log(article)

    //   console.log("idd", idd)
       console.log("params", params)

    const date = new Date(article?.time)

  
    return (
        <>
            <h1>this is the Article page</h1>  
            {/* <p>id from router: {idd}</p> */}
            
            <Link to={`/`}>
                <button>Все новости</button>
            </Link>

            <p>Автор - by: {article?.by}</p>
            <br />
            <p>id: {article?.id}</p>
            <br />
            <p>score: {article?.score}</p>
            <br />
            {/* <p>time: {new Date(article?.time)}</p> */}
            {/* <p>time: {article?.time}</p> */}
            <p>time: {JSON.stringify(date)}</p>
            <br />
            <p>title: {article?.title}</p>
            <br />
            <p>type: {article?.type}</p>
            <br />
            <p>url: {article?.url}</p>

            {/* {article?.map((item) => <p key={item}>{item}</p>)} */}
        </>   
    ); 
} 
export default ArticlePage;