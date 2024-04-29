import { useState, useEffect } from 'react'
import '@vkontakte/vkui/dist/vkui.css';

import NewsPage from 'pages/news/ui/News.tsx';
import ArticlePage from 'pages/article/ui/Article.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewsPage/>,
  },
  {
    path: "/article",
    element: <ArticlePage/>,
    children: [
      {
        path: "article/:articleId",
        element: <ArticlePage/>,
      },
    ],
  },

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
