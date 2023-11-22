import { Request, Response, Router } from 'express'
import pool from '../../config/database.config'
import { NewDAO } from '../../dao/news.dao'
import { New } from '../../entities/news'
import Joi from 'joi'

const newsRouterV1: Router = Router()
const newDAO = new NewDAO(pool)

const newSchema = Joi.object({
  chapeu: Joi.string().required(),
  url: Joi.string().uri().required(),
  titulo: Joi.string().required(),
  imagem: Joi.string().uri(),
  thumbnail: Joi.string().uri(),
  conteudo: Joi.string().required(),
})

newsRouterV1.get('/v1/news', async (req: Request, res: Response) => {
  const news: New[] = await newDAO.getAll()
  res.json(news)
})

newsRouterV1.get('/v1/news/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const news = await newDAO.getById(id)

  if (news) {
    res.json(news)
  } else {
    res.status(404).json({ message: 'New not found.' })
  }
})

newsRouterV1.post('/v1/news', async (req: Request, res: Response) => {
  const { error, value } = newSchema.validate(req.body)

  if (error) {
    return res.status(400).json({ message: error.details[0].message })
  }

  const { chapeu, url, titulo, imagem, thumbnail, conteudo } = value
  const newObj: New = { chapeu, url, titulo, imagem, thumbnail, conteudo }
  const addedNew: New = await newDAO.add(newObj)
  res.json(addedNew)
})

newsRouterV1.put('/v1/news/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  const { error, value } = newSchema.validate(req.body)

  if (error) {
    return res.status(400).json({ message: error.details[0].message })
  }

  const updatedNew = await newDAO.update(id, value)

  if (updatedNew) {
    res.json(updatedNew)
  } else {
    res.status(404).json({ message: 'New not found.' })
  }
})

newsRouterV1.delete('/v1/news/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const deleted = await newDAO.delete(id)

  if (deleted) {
    res.status(204).send()
  } else {
    res.status(404).json({ message: 'New not found.' })
  }
})

export default newsRouterV1
