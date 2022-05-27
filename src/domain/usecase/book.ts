import { BookEntity } from "./entity/book";
import { ErrorEntity } from "./entity/error";
import { ICreateBookUseCaseRepository } from "./repository/book";
import { CreateBookUseCaseResponse } from "./ucio/book";
import { ICreateBookUseCaseValidate } from "./validate/book";

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
        const bookResponse = new CreateBookUseCaseResponse(usecaseResponse, null)
        return bookResponse;
      } else {
        return new CreateBookUseCaseResponse(null, new ErrorEntity(400, errorMessage))
      }
    } catch (error: any) {
      return new CreateBookUseCaseResponse(null, new ErrorEntity(500, error.message))
    }
  }
}

export { CreateBookUseCase };
