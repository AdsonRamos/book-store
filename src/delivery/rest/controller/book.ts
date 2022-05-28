import { CreateBookUseCaseRepository, DeleteBookUseCaseRepository, GetBookUseCaseRepository, ListBooksByPageUseCaseRepository } from "../../../infrastructure/provider/repository/book";
import { CreateBookUseCaseValidate, DeleteBookUseCaseValidate, GetBookUseCaseValidate, ListBooksByPageUseCaseValidate } from "../../../infrastructure/provider/validate/book";
import { CreateBookUseCase, DeleteBookUseCase, GetBookUseCase, ListBooksByPageUseCase } from "../../../domain/usecase/book";
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

async function getBook(_id: any) {
  const repository = new GetBookUseCaseRepository();
  const validate = new GetBookUseCaseValidate();
  const usecase = new GetBookUseCase(repository, validate);

  return await usecase.getBook(_id)
}

async function deleteBook(_id: any) {
  const repository = new DeleteBookUseCaseRepository();
  const validate = new DeleteBookUseCaseValidate();
  const usecase = new DeleteBookUseCase(repository, validate);

  return await usecase.deleteBook(_id)
}

export { createBook, listBooksByPage, getBook, deleteBook };
