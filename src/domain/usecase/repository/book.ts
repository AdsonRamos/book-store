import { BookEntity } from "../entity/book";

interface ICreateBookUseCaseRepository {
  createBook(book: BookEntity): Promise<any>;
}

interface IListBooksByPageUseCaseRepository {
  listBooksByPage(page: number, itensByPage: number): Promise<String[]>;
}

interface IGetBookUseCaseRepository {
  getBook(_id: string): Promise<any>;
}

export {
  ICreateBookUseCaseRepository,
  IListBooksByPageUseCaseRepository,
  IGetBookUseCaseRepository
}