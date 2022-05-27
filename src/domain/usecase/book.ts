import { HTTP_STATUSES } from "../../../common/constants";
import { BookEntity } from "./entity/book";
import { ErrorEntity } from "./entity/error";
import { ICreateBookUseCaseRepository, IListBooksByPageUseCaseRepository } from "./repository/book";
import { CreateBookUseCaseResponse, ListBooksByPageUseCaseResponse } from "./ucio/book";
import { ICreateBookUseCaseValidate, IListBooksByPageUseCaseValidate } from "./validate/book";

class CreateBookUseCase {
  constructor(
    private repository: ICreateBookUseCaseRepository,
    private validate: ICreateBookUseCaseValidate
  ) {}

  async createBook(book: BookEntity) {
    const errorMessage = await this.validate.createBook(book);

    try {
      if (!errorMessage) {
        const usecaseResponse = await this.repository.createBook(book);
        return new CreateBookUseCaseResponse(usecaseResponse, null);
      } else {
        return new CreateBookUseCaseResponse(null, new ErrorEntity(HTTP_STATUSES.BAD_REQUEST, errorMessage))
      }
    } catch (error: any) {
      return new CreateBookUseCaseResponse(null, new ErrorEntity(HTTP_STATUSES.INTERNAL_SERVER_ERROR, error.message))
    }
  }
}

class ListBooksByPageUseCase {
  constructor(
    private repository: IListBooksByPageUseCaseRepository,
    private validate: IListBooksByPageUseCaseValidate
  ) {}

  async listBooksByPage(page: number, itensByPage: number) {
    const errorMessage = await this.validate.listBooksByPage(page, itensByPage);

    try {
      if(!errorMessage) {
        const usecaseResponse = await this.repository.listBooksByPage(page, itensByPage);
        return new ListBooksByPageUseCaseResponse(usecaseResponse, null)
      } else {
        return new ListBooksByPageUseCaseResponse(null, new ErrorEntity(HTTP_STATUSES.BAD_REQUEST, errorMessage))
      }
    } catch (error: any) {
      return new ListBooksByPageUseCaseResponse(null, new ErrorEntity(HTTP_STATUSES.INTERNAL_SERVER_ERROR, error.message))
    }
  }
}

export { CreateBookUseCase, ListBooksByPageUseCase };
