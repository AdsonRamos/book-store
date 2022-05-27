import { BookEntity } from "../../../domain/usecase/entity/book";
import { ICreateBookUseCaseRepository } from "../../../domain/usecase/repository/book";
import { createBook } from "../../internal/database/mongo/book";

class CreateBookUseCaseRepository implements ICreateBookUseCaseRepository {
  async createBook(book: BookEntity): Promise<any> {
    return await createBook(book);
  }
}

export { CreateBookUseCaseRepository };
