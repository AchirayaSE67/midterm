import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import productRoute from './products/index.ts' 

const app = new Hono()

app.route('/api/books', productRoute)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`here : http://localhost:${info.port}`)
})

export default app