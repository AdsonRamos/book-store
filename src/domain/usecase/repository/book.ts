import { BookEntity } from "../entity/book";

export interface ICreateBookUseCaseRepository {
  createBook(book: BookEntity): Promise<any>;
}
