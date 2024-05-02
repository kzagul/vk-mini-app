import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { fileURLToPath, URL } from "url";
// import legacy from '@vitejs/plugin-legacy';
// import mkcert from 'vite-plugin-mkcert'

// function handleModuleDirectivesPlugin() {
//   return {
//     name: 'handle-module-directives-plugin',
//     transform(code, id) {
//       if (id.includes('@vkontakte/icons')) {
//         code = code.replace(/"use-client";?/g, '');
//       }
//       return { code };
//     },
//   };
// }

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  // build: {
  //   outDir: 'build',
  // },
  plugins: [
    react(),
    // handleModuleDirectivesPlugin(),
    // legacy({
    //   targets: ['defaults', 'not IE 11'],
    // }),
  ],
  // mkcert()
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      // "@app/*": '/src/app',
      // "@pages/*": '/src/pages',
      
      app: '/src/app',
      entities: '/src/entities',
      features: '/src/features',
      pages: '/src/pages',
      shared: '/src/shared',
      widgets: '/src/widgets',
    },
    // alias: [
    //   { find: 'app', replacement: fileURLToPath(new URL('./src/app', import.meta.url)) },
    //   { find: 'entities', replacement: fileURLToPath(new URL('./src/entities', import.meta.url)) },
    //   { find: 'features', replacement: fileURLToPath(new URL('./src/features', import.meta.url)) },
    //   { find: 'pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
    //   { find: 'shared', replacement: fileURLToPath(new URL('./src/shared', import.meta.url)) },
    //   { find: 'widgets', replacement: fileURLToPath(new URL('./src/widgets', import.meta.url)) },

    // ],
  },
})
