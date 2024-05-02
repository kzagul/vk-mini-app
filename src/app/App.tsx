import {
  AppRoot,
  View,
  Panel,
  AdaptivityProvider, 
  ConfigProvider,
} from '@vkontakte/vkui'

import vkBridge, { parseURLSearchParamsForGetLaunchParams } from '@vkontakte/vk-bridge';
import { useAdaptivity, useAppearance, useInsets } from '@vkontakte/vk-bridge-react';
import { transformVKBridgeAdaptivity } from './transformVKBridgeAdaptivity';

import Header from 'widgets/header';

// routes
import NewsPage from 'pages/news/';
import ArticlePage from 'pages/article';

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

  const vkBridgeAppearance = useAppearance() || 'light' || undefined;
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(window.location.search);
  
  return (
    <>
    <ConfigProvider
      appearance={vkBridgeAppearance}
      platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
      isWebView={vkBridge.isWebView()}
      hasCustomPanelHeaderAfter={true}
    >
      <AdaptivityProvider {...adaptivity}>
        <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
          <View activePanel="main">
            <Panel id="main">
              <Header/>
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
