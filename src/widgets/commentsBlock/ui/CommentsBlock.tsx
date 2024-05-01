import React from 'react';
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { Spinner, Button, Header, Accordion, View, Panel, PanelHeader, Group, Div, Title, List} from '@vkontakte/vkui'

import { getArticleById } from 'entities/article/api';
import { getComment } from 'entities/comment/api';
import { Icon24AddOutline, Icon24MinusOutline } from '@vkontakte/icons';

import { Comments } from 'entities/comment/ui/Comments.tsx';



function CommentsBlock ({ storyId }) {
    const [story, setStory] = useState({});
  
    useEffect(() => {
      getArticleById(storyId).then((data) => {
        if (data && data.url) {
          setStory(data);
        }
      });
    }, []);
  
    const { title, kids, id, url } = story;
  
    return story && url ? (
      
      // <Accordion open>
      //   <Accordion.Summary
      //     iconPosition="before"
      //   >
      //     <Title>Комментарии</Title>
      //   </Accordion.Summary>
      //   <Accordion.Content>
      //     <div>
      //       {kids && <Comments commentIds={kids} root />}
      //     </div>
      //   </Accordion.Content>
      // </Accordion>
  
      <List>
       
  
        {/* <Group> */}
        <Title level="2">Комментарии</Title>
          <Div>
            {kids && <Comments commentIds={kids} root />}
          </Div>
        {/* </Group> */}
      </List>
    ) : null;
  };

export {CommentsBlock}