import { Router } from "express";

const routes = Router()

routes.post('/book', (req, res) => {
  const body = req.body
  console.log(req.body)
  res.status(200).send(body)
})

export default routes