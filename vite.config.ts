import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const PORT: number = 8081

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:' + PORT,
				changeOrigin: true, //换源，确定代理
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
})
