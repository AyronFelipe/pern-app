import { Pool, QueryResult } from 'pg'
import { New } from '../entities/news'
import { AbstractDAO } from './abstract.dao'

export class NewDAO extends AbstractDAO<New> {
  private pool: Pool

  constructor(pool: Pool) {
    super()
    this.pool = pool
  }

  async getAll(): Promise<New[]> {
    const result: QueryResult = await this.pool.query('SELECT * FROM news')
    return result.rows as New[]
  }

  async getById(id: number): Promise<New | null> {
    const result: QueryResult = await this.pool.query(
      'SELECT * FROM news WHERE id = $1',
      [id],
    )
    return result.rows.length ? (result.rows[0] as New) : null
  }

  async add(entity: New): Promise<New> {
    const { chapeu, url, titulo, imagem, thumbnail, conteudo } = entity
    const result: QueryResult = await this.pool.query(
      'INSERT INTO news (chapeu, url, titulo, imagem, thumbnail, conteudo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [chapeu, url, titulo, imagem, thumbnail, conteudo],
    )
    return result.rows[0] as New
  }

  async update(id: number, entity: New): Promise<New | null> {
    const { chapeu, url, titulo, imagem, thumbnail, conteudo } = entity
    const result: QueryResult = await this.pool.query(
      'UPDATE news SET chapeu = $1, url = $2, titulo = $3, imagem = $4, thumbnail = $5, conteudo = $6 WHERE id = $7 RETURNING *',
      [chapeu, url, titulo, imagem, thumbnail, conteudo, id],
    )

    return result.rows.length ? (result.rows[0] as New) : null
  }

  async delete(id: number): Promise<boolean> {
    const result: QueryResult = await this.pool.query(
      'DELETE FROM news WHERE id = $1',
      [id],
    )

    if (result.rowCount != null && result.rowCount > 0) {
      return true
    }

    return false
  }
}
