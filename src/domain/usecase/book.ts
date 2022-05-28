import { HTTP_STATUSES } from "../../../common/constants";
import { BookEntity } from "./entity/book";
import { ErrorEntity } from "./entity/error";
import { ICreateBookUseCaseRepository, IDeleteBookUseCaseRepository, IGetBookUseCaseRepository, IListBooksByPageUseCaseRepository } from "./repository/book";
import { CreateBookUseCaseResponse, DeleteBookUseCaseResponse, GetBookUseCaseResponse, ListBooksByPageUseCaseResponse } from "./ucio/book";
import { ICreateBookUseCaseValidate, IDeleteBookUseCaseValidate, IGetBookUseCaseValidate, IListBooksByPageUseCaseValidate } from "./validate/book";

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

class GetBookUseCase {
  constructor(
    private repository: IGetBookUseCaseRepository,
    private validate: IGetBookUseCaseValidate
  ) {}

  async getBook(_id: string) {
    const errorMessage = await this.validate.getBook(_id);

    try {
      if(!errorMessage) {
        const usecaseResponse = await this.repository.getBook(_id);
        return new GetBookUseCaseResponse(usecaseResponse, null)
      } else {
        return new GetBookUseCaseResponse(null, new ErrorEntity(HTTP_STATUSES.BAD_REQUEST, errorMessage))
      }
    } catch (error: any) {
      return new GetBookUseCaseResponse(null, new ErrorEntity(HTTP_STATUSES.INTERNAL_SERVER_ERROR, error.message))
    }
  }
}

class DeleteBookUseCase {
  constructor(
    private repository: IDeleteBookUseCaseRepository,
    private validate: IDeleteBookUseCaseValidate
  ) {}

  async deleteBook(_id: string) {
    const errorMessage = await this.validate.deleteBook(_id);

    try {
      if(!errorMessage) {
        await this.repository.deleteBook(_id);
        return new DeleteBookUseCaseResponse(null)
      } else {
        return new DeleteBookUseCaseResponse(new ErrorEntity(HTTP_STATUSES.BAD_REQUEST, errorMessage))
      }
    } catch (error: any) {
      return new DeleteBookUseCaseResponse(new ErrorEntity(HTTP_STATUSES.INTERNAL_SERVER_ERROR, error.message))
    }
  }
}

export { CreateBookUseCase, ListBooksByPageUseCase, GetBookUseCase, DeleteBookUseCase };
