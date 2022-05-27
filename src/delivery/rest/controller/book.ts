import { CreateBookUseCaseRepository, ListBooksByPageUseCaseRepository } from "../../../infrastructure/provider/repository/book";
import { CreateBookUseCaseValidate, ListBooksByPageUseCaseValidate } from "../../../infrastructure/provider/validate/book";
import { CreateBookUseCase, ListBooksByPageUseCase } from "../../../domain/usecase/book";
import { BookEntity } from "../../../domain/usecase/entity/book";

async function createBook(book: BookEntity) {
  const repository = new CreateBookUseCaseRepository();
  const validate = new CreateBookUseCaseValidate();
  const usecase = new CreateBookUseCase(repository, validate);

  return await usecase.createBook(book);
}

async function listBooksByPage(page: any, itensByPage: any) {
  const repository = new ListBooksByPageUseCaseRepository();
  const validate = new ListBooksByPageUseCaseValidate();
  const usecase = new ListBooksByPageUseCase(repository, validate);

  return await usecase.listBooksByPage(page, itensByPage)
}

export { createBook, listBooksByPage };
