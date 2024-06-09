import pages from '@hono/vite-cloudflare-pages'
import adapter from '@hono/vite-dev-server/cloudflare'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  const base = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './app'),
      },
    },
  }

  if (mode === 'client') {
    return {
      ...base,
      build: {
        rollupOptions: {
          input: ['/app/globals.css'], 
        }
      },
      plugins: [client({ jsxImportSource: 'react' })],
    }
  } else {
    return {
      ...base,
      ssr: { external: ['react', 'react-dom', 'react-aria-components'] },
      plugins: [
        honox({
          devServer: {
            adapter
          }
        }),
        pages()
      ]
    }
  }
})
