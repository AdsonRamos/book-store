import { Router } from "express";

import { createBook } from "../controller/book";

const routes = Router();

routes.post("/book", async (req, res) => {
  const body = req.body;

  const response = await createBook(body);

  if (response.error) {
    const { code, message } = response.error;
    res.status(code).send(message);
  } else {
    res.status(200).send(body);
  }

  console.log("Response", response);
});

export default routes;
