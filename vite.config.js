import react from '@vitejs/plugin-react'

export default {
  base: '',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
  server: {
    port: 33133,
  },
  ssr: {
    noExternal: ['styled-components', '@emotion/*', 'three', 'redux-thunk'],
  },
}
