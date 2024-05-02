import {
  AppRoot,
  View,
  Panel,
  PanelHeader,
  Div,
  Title,
  AdaptivityProvider, 
  ConfigProvider,
} from '@vkontakte/vkui'

import vkBridge, { parseURLSearchParamsForGetLaunchParams } from '@vkontakte/vk-bridge';
import { useAdaptivity, useAppearance, useInsets } from '@vkontakte/vk-bridge-react';
import '@vkontakte/vkui/dist/vkui.css';

import { transformVKBridgeAdaptivity } from './transformVKBridgeAdaptivity';


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
    path: "/article/:id",
    element: <ArticlePage/>,
  },

]);

function App() {

  const vkBridgeAppearance = useAppearance() || undefined;
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(window.location.search);
  
  // appearance={vkBridgeAppearance}
  
  return (
    <>
    <ConfigProvider
      appearance="light"
      platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
      isWebView={vkBridge.isWebView()}
      hasCustomPanelHeaderAfter={true}
    >
      <AdaptivityProvider {...adaptivity}>
        <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader style={{display: "flex", justifyContent: "center"}} fixed>
                <Title>Новости хакинга от HackerNews</Title>
                
              </PanelHeader>

              <RouterProvider router={router} />
            </Panel>
          </View>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
    </>
  )
}

export default App
