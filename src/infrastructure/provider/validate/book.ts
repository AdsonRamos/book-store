import { checkEmpty } from "../../../../common/helpers/stringHelper";
import { BookEntity } from "../../../domain/usecase/entity/book";
import { ICreateBookUseCaseValidate, IDeleteBookUseCaseValidate, IGetBookUseCaseValidate, IListBooksByPageUseCaseValidate } from "../../../domain/usecase/validate/book";
import { getBookBySBN } from "../../internal/database/mongo/book";

class CreateBookUseCaseValidate implements ICreateBookUseCaseValidate {
  async createBook(book: BookEntity): Promise<String | null>{

    if(checkEmpty(book.name)) return "O título do livro não foi fornecedo"

    if(await getBookBySBN(book.sbn)) return "Já existe livro com este SBN"

    return null;
  }
}

class ListBooksByPageUseCaseValidate implements IListBooksByPageUseCaseValidate {
  async listBooksByPage(page: number, itensByPage: number): Promise<String | null> {
    if(checkEmpty(page)) return "O número da página não foi informado";

    if(checkEmpty(itensByPage)) return "A quantidade de itens por página não foi informado"

    return null;
  }
}

class GetBookUseCaseValidate implements IGetBookUseCaseValidate {
  async getBook(_id: string): Promise<String | null> {
    if(checkEmpty(_id)) return "O id do livro não foi informado";

    return null;
  }
}

class DeleteBookUseCaseValidate implements IDeleteBookUseCaseValidate {
  async deleteBook(_id: string): Promise<String | null> {
    if(checkEmpty(_id)) return "O id do livro não foi informado";

    return null;
  }
}

export { CreateBookUseCaseValidate, ListBooksByPageUseCaseValidate, GetBookUseCaseValidate, DeleteBookUseCaseValidate};
