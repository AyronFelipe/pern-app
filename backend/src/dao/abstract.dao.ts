interface Entity {
  id?: string
}

export abstract class AbstractDAO<T extends Entity> {
  abstract getAll(): Promise<T[]>

  abstract getById(id: number): Promise<T | null>

  abstract add(entity: T): Promise<T>

  abstract update(id: number, entity: T): Promise<T | null>

  abstract delete(id: number): Promise<boolean>
}
