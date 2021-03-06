import { checkEmpty } from "../../../../common/helpers/stringHelper";
import { BookEntity } from "../../../domain/usecase/entity/book";
import {
  ICreateBookUseCaseValidate,
  IDeleteBookUseCaseValidate,
  IGetBookUseCaseValidate,
  IListBooksByPageUseCaseValidate,
  IUpdateBookUseCaseValidate,
} from "../../../domain/usecase/validate/book";
import { getBook, getBookBySBN } from "../../internal/database/mongo/book";

class CreateBookUseCaseValidate implements ICreateBookUseCaseValidate {
  async createBook(book: BookEntity): Promise<String | null> {
    if (checkEmpty(book.name)) return "O título do livro não foi fornecedo";

    if ((await getBookBySBN(book.sbn)).length > 0)
      return "Já existe livro com este SBN";

    return null;
  }
}

class ListBooksByPageUseCaseValidate
  implements IListBooksByPageUseCaseValidate
{
  async listBooksByPage(
    page: number,
    itensByPage: number
  ): Promise<String | null> {
    if (checkEmpty(page)) return "O número da página não foi informado";

    if (checkEmpty(itensByPage))
      return "A quantidade de itens por página não foi informado";

    return null;
  }
}

class GetBookUseCaseValidate implements IGetBookUseCaseValidate {
  async getBook(_id: string): Promise<String | null> {
    if (checkEmpty(_id)) return "O id do livro não foi informado";

    if (!_id.match(/^[0-9a-fA-F]{24}$/)) {
      return "O id informado não está no formato correto";
    }

    return null;
  }
}

class DeleteBookUseCaseValidate implements IDeleteBookUseCaseValidate {
  async deleteBook(_id: string): Promise<String | null> {
    if (checkEmpty(_id)) return "O id do livro não foi informado";

    if (!_id.match(/^[0-9a-fA-F]{24}$/)) {
      return "O id informado não está no formato correto";
    }

    if (!await getBook(_id))
      return "Não existe livro com este id";

    return null;
  }
}

class UpdateBookUseCaseValidate implements IUpdateBookUseCaseValidate {
  async updateBook(book: BookEntity): Promise<String | null> {
    if (checkEmpty(book.name)) return "O título do livro não foi fornecedo";

    if (book._id && !book._id.match(/^[0-9a-fA-F]{24}$/)) {
      return "O id informado não está no formato correto";
    }

    if (!(await getBook(book._id))) return "Não existe livro com este ID.";

    return null;
  }
}

export {
  CreateBookUseCaseValidate,
  ListBooksByPageUseCaseValidate,
  GetBookUseCaseValidate,
  DeleteBookUseCaseValidate,
  UpdateBookUseCaseValidate,
};
