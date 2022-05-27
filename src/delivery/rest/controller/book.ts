import { CreateBookUseCaseRepository } from "../../../infrastructure/provider/repository/book";
import { CreateBookUseCaseValidate } from "../../../infrastructure/provider/validate/book";
import { CreateBookUseCase } from "../../../domain/usecase/book";
import { BookEntity } from "../../../domain/usecase/entity/book";

async function createBook(book: BookEntity) {
  const repository = new CreateBookUseCaseRepository();
  const validate = new CreateBookUseCaseValidate();
  const usecase = new CreateBookUseCase(repository, validate);

  return await usecase.createBook(book);
}

export { createBook };
