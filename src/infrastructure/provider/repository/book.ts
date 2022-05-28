import { BookEntity } from "../../../domain/usecase/entity/book";
import {
  ICreateBookUseCaseRepository,
  IDeleteBookUseCaseRepository,
  IGetBookUseCaseRepository,
  IListBooksByPageUseCaseRepository,
  IUpdateBookUseCaseRepository,
} from "../../../domain/usecase/repository/book";
import {
  createBook,
  getBook,
  listBooksByPage,
  deleteBook,
  updateBook,
} from "../../internal/database/mongo/book";

class CreateBookUseCaseRepository implements ICreateBookUseCaseRepository {
  async createBook(book: BookEntity): Promise<any> {
    return await createBook(book);
  }
}

class ListBooksByPageUseCaseRepository
  implements IListBooksByPageUseCaseRepository
{
  async listBooksByPage(page: number, itensByPage: number): Promise<String[]> {
    return await listBooksByPage(page, itensByPage);
  }
}

class GetBookUseCaseRepository implements IGetBookUseCaseRepository {
  async getBook(_id: string): Promise<any> {
    return await getBook(_id);
  }
}

class DeleteBookUseCaseRepository implements IDeleteBookUseCaseRepository {
  async deleteBook(_id: string): Promise<any> {
    return await deleteBook(_id);
  }
}

class UpdateBookUseCaseRepository implements IUpdateBookUseCaseRepository {
  async updateBook(book: BookEntity): Promise<any> {
    return await updateBook(book);
  }
}

export {
  CreateBookUseCaseRepository,
  ListBooksByPageUseCaseRepository,
  GetBookUseCaseRepository,
  DeleteBookUseCaseRepository,
  UpdateBookUseCaseRepository
};
