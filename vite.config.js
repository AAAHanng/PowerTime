import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    },
    plugins: [
      vue(),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*/js', 'src/*/*.vue']
      })
    ],
    server: {
      port: env.VITE_PORT,
      open: true,
      host: '0.0.0.0',
      proxy: {
        [env.VITE_BASE_API]: {
          target: env.VITE_API,
          changeOrigin: true
        }
      }
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve('./src')
        }
      ]
    }
  }
})
