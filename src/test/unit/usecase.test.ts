import { HTTP_STATUSES } from "../../../common/constants";
import { CreateBookUseCase } from "../../domain/usecase/book";
import { BookEntity } from "../../domain/usecase/entity/book";
import { checkEmpty } from "../../../common/helpers/stringHelper";
import { ICreateBookUseCaseRepository } from "../../domain/usecase/repository/book";
import { ICreateBookUseCaseValidate } from "../../domain/usecase/validate/book";

class CreateBookUseCaseRepository implements ICreateBookUseCaseRepository {
  async createBook(book: BookEntity): Promise<any> {
    return book;
  }      
}

class CreateBookUseCaseValidate implements ICreateBookUseCaseValidate {
  async createBook(book: BookEntity): Promise<any> {
    if (checkEmpty(book.name)) return "O título do livro não foi fornecedo";
    
    return null;
  }      
}

describe("Create book use case", () => {
  it("Should thrown an error if name is not given", async () => {
    const repository = new CreateBookUseCaseRepository();
    const validate = new CreateBookUseCaseValidate();
    const usecase = new CreateBookUseCase(repository, validate);
    let book = new BookEntity(null, "", "", "", "", 0);
    const response = await usecase.createBook(book);
    expect(response.error?.code).toBe(HTTP_STATUSES.BAD_REQUEST);
  });

  it("Should return success and create new book", async () => {
    
    const repository = new CreateBookUseCaseRepository()
    const validate = new CreateBookUseCaseValidate();
    const usecase = new CreateBookUseCase(repository, validate);
    let book = new BookEntity(
      null,
      "A volta dos que não foram",
      "Vazia",
      "Desconhecido",
      "1234",
      12
    );

    const response = await usecase.createBook(book)

    expect(response.book).not.toBeNull()
  });
});
