import { checkEmpty } from "../../../../common/helpers/stringHelper";
import { BookEntity } from "../../../domain/usecase/entity/book";
import { ICreateBookUseCaseValidate } from "../../../domain/usecase/validate/book";
import { getBookBySBN } from "../../internal/database/mongo/book";

class CreateBookUseCaseValidate implements ICreateBookUseCaseValidate {
  async createBook(book: BookEntity): Promise<String | null>{

    if(checkEmpty(book.name)) return "O título do livro não foi fornecedo"

    if(await getBookBySBN(book.sbn)) return "Já existe livro com este SBN"

    return null;
  }
}

export { CreateBookUseCaseValidate };
