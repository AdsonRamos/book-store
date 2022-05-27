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

export { CreateBookUseCaseResponse };
