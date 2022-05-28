import { BookEntity } from "../../../domain/usecase/entity/book";
import { ICreateBookUseCaseRepository, IGetBookUseCaseRepository, IListBooksByPageUseCaseRepository } from "../../../domain/usecase/repository/book";
import { createBook, getBook, listBooksByPage } from "../../internal/database/mongo/book";

class CreateBookUseCaseRepository implements ICreateBookUseCaseRepository {
  async createBook(book: BookEntity): Promise<any> {
    return await createBook(book);
  }
}

class ListBooksByPageUseCaseRepository implements IListBooksByPageUseCaseRepository{
  async listBooksByPage(page: number, itensByPage: number): Promise<String[]> {
    return await listBooksByPage(page, itensByPage);
  }
}

class GetBookUseCaseRepository implements IGetBookUseCaseRepository{
  async getBook(_id: string): Promise<String[]> {
    return await getBook(_id);
  }
}

export { CreateBookUseCaseRepository, ListBooksByPageUseCaseRepository, GetBookUseCaseRepository };
