import { BookEntity } from "../entity/book";

interface ICreateBookUseCaseValidate {
  createBook(book: BookEntity): Promise<String | null>;
}

interface IListBooksByPageUseCaseValidate {
  listBooksByPage(page: number, itensByPage: number): Promise<String | null>;
}

interface IGetBookUseCaseValidate {
  getBook(_id: string): Promise<String | null>;
}

interface IDeleteBookUseCaseValidate {
  deleteBook(_id: string): Promise<String | null>;
}

interface IUpdateBookUseCaseValidate {
  updateBook(book: BookEntity): Promise<String | null>;
}

export {
  ICreateBookUseCaseValidate,
  IListBooksByPageUseCaseValidate,
  IGetBookUseCaseValidate,
  IDeleteBookUseCaseValidate,
  IUpdateBookUseCaseValidate,
};
