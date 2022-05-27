import { BookEntity } from "../../../../domain/usecase/entity/book";
import Book from "./models/book";

async function createBook(book: BookEntity) {
  let newBook = new Book({
    sbn: book.sbn,
    name: book.name,
    description: book.description,
    author: book.author,
    stock: book.stock,
  });
  return await Book.create(newBook);
}

async function getBookBySBN(sbn: String) {
  return await Book.find({ sbn });
}

async function listBooksByPage(page: number, itensByPage: number) {
  return await Book.find({}, { name: 1, _id:0 }).limit(itensByPage).skip(page * itensByPage)
}

export {
  createBook,
  getBookBySBN,
  listBooksByPage
}