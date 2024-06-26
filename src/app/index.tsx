import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import vkBridge from '@vkontakte/vk-bridge'
import '@vkontakte/vkui/dist/vkui.css'
import './styles/index.css'

vkBridge.send('VKWebAppInit');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
