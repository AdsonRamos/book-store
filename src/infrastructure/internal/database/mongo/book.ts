import { BookEntity } from "../../../../domain/usecase/entity/book";
import Book from "./models/book";

export async function createBook(book: BookEntity) {
  let newBook = new Book({
    sbn: book.sbn,
    name: book.name,
    description: book.description,
    author: book.author,
    stock: book.stock,
  });
  return await Book.create(newBook);
}

export async function getBookBySBN(sbn: String) {
  return await Book.find({ sbn });
}
