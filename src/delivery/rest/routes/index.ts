import express from "express";

import book from "./book";

const app = express();

app.use(book);

export default app;
