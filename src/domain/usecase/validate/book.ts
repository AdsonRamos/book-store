import { BookEntity } from "../entity/book";

interface ICreateBookUseCaseValidate {
  createBook(book: BookEntity): Promise<String | null>;
}

interface IListBooksByPageUseCaseValidate {
  listBooksByPage(page: number, itensByPage: number): Promise<String | null>;
}

export { ICreateBookUseCaseValidate, IListBooksByPageUseCaseValidate };
