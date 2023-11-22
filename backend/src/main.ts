import * as dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import newsRouterV1 from './routes/v1/news.routes'
import cors from 'cors'

dotenv.config()

async function bootstrap() {
  const app = express()
  const port = process.env.PORT || 3000

  app.use(cors())

  app.use(bodyParser.json())

  app.use('/api', newsRouterV1)

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

bootstrap()
