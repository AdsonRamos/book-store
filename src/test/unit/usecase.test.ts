import { HTTP_STATUSES } from "../../../common/constants";
import { CreateBookUseCase } from "../../domain/usecase/book";
import { BookEntity } from "../../domain/usecase/entity/book";
import { CreateBookUseCaseRepository } from "../../infrastructure/provider/repository/book";
import { CreateBookUseCaseValidate } from "../../infrastructure/provider/validate/book";

describe("Create book use case", () => {
  it("Should throw an error if name is not given", async () => {
    const repository = new CreateBookUseCaseRepository();
    const validate = new CreateBookUseCaseValidate();
    const usecase = new CreateBookUseCase(repository, validate);
    let book = new BookEntity("null", "", "", "", "", 0);
    const response = await usecase.createBook(book);
    expect(response.error?.code).toBe(HTTP_STATUSES.BAD_REQUEST);
  });
});
