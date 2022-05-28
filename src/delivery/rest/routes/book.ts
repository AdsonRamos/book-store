import { Router } from "express";

import { HTTP_STATUSES } from "../../../../common/constants";

import {
  createBook,
  deleteBook,
  getBook,
  listBooksByPage,
} from "../controller/book";

const routes = Router();

routes.post("/book", async (req, res) => {
  const body = req.body;

  const response = await createBook(body);

  if (response.error) {
    const { code, message } = response.error;
    res.status(code).send(message);
  } else {
    res.status(HTTP_STATUSES.OK).send(body);
  }

  console.log("Response", response);
});

routes.get("/books", async (req, res) => {
  const query = req.query;

  const response = await listBooksByPage(query.page, query.itensByPage);

  if (response.error) {
    const { code, message } = response.error;
    res.status(code).send(message);
  } else {
    res.status(HTTP_STATUSES.OK).send(response.books);
  }
});

routes.get("/book", async (req, res) => {
  const query = req.query;

  const response = await getBook(query._id);

  if (response.error) {
    const { code, message } = response.error;
    res.status(code).send(message);
  } else {
    res.status(HTTP_STATUSES.OK).send(response.book);
  }
});

routes.delete("/book", async (req, res) => {
  const query = req.query;

  const response = await deleteBook(query._id);

  if (response.error) {
    const { code, message } = response.error;
    res.status(code).send(message)
  } else {
    res.status(HTTP_STATUSES.OK).send()
  }
});

export default routes;
