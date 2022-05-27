import { BookEntity } from "../entity/book";

export interface ICreateBookUseCaseValidate {
  createBook(book: BookEntity): Promise<String | null>;
}
