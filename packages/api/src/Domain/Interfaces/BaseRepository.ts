interface BaseRepository<T> {
  findOne(id: number): Promise<T>;
  findAll(): Promise<T[]>;
  Save(t: T): Promise<T>;
  Update(t: T): Promise<void>;
  Remove(t: T): Promise<void>;
}

export default BaseRepository;
