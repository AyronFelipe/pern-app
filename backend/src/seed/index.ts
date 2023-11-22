import { New } from '../entities/news'
import pool from '../config/database.config'
import * as fs from 'fs'
import * as path from 'path'

async function createTableNews() {
  const client = await pool.connect()

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS news (
        id SERIAL PRIMARY KEY,
        chapeu VARCHAR(255) NOT NULL,
        url VARCHAR(255) NOT NULL,
        titulo VARCHAR(255) NOT NULL,
        data_hora_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        imagem VARCHAR(255),
        thumbnail VARCHAR(255),
        conteudo TEXT
      );
    `)

    console.log('News table created with success.')
  } catch (error) {
    console.error('Some error has happened in News table creation.', error)
  } finally {
    client.release()
  }
}

async function seedNewsFromJson(filePath: string) {
  try {
    const jsonData = fs.readFileSync(filePath, 'utf-8')
    const newsData: New[] = JSON.parse(jsonData)

    const client = await pool.connect()

    for (const news of newsData) {
      await client.query(
        `
        INSERT INTO news (chapeu, url, titulo, imagem, thumbnail, conteudo)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
        `,
        [
          news.chapeu,
          news.url,
          news.titulo,
          news.imagem,
          news.thumbnail,
          news.conteudo,
        ],
      )

      console.log(`Register inserted in table News: ${news.titulo}`)
    }

    console.log('Seed finished.')
  } catch (error) {
    console.error('Error during seed:', error)
  }
}

createTableNews().then(() => {
  seedNewsFromJson(path.resolve(__dirname, 'news.json'))
})
