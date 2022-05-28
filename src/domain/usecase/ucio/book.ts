import { BookEntity } from "../entity/book";
import { ErrorEntity } from "../entity/error";

class CreateBookUseCaseResponse {
  public book: BookEntity | null;
  public error: ErrorEntity | null;

  constructor(book: BookEntity | null, error: ErrorEntity | null) {
    this.book = book;
    this.error = error;
  }
}

class ListBooksByPageUseCaseResponse {
  public books: String[] | null;
  public error: ErrorEntity | null;

  constructor(books: String[] | null, error: ErrorEntity | null) {
    this.books = books;
    this.error = error;
  }
}

class GetBookUseCaseResponse {
  public book: BookEntity | null;
  public error: ErrorEntity | null;

  constructor(book: BookEntity | null, error: ErrorEntity | null) {
    this.book = book;
    this.error = error;
  }
}

class DeleteBookUseCaseResponse {
  public error: ErrorEntity | null;

  constructor(error: ErrorEntity | null) {
    this.error = error;
  }
}

class UpdateBookUseCaseResponse {
  public book: BookEntity | null;
  public error: ErrorEntity | null;

  constructor(book: BookEntity | null, error: ErrorEntity | null) {
    this.book = book;
    this.error = error;
  }
}

export {
  CreateBookUseCaseResponse,
  ListBooksByPageUseCaseResponse,
  GetBookUseCaseResponse,
  DeleteBookUseCaseResponse,
  UpdateBookUseCaseResponse
};
