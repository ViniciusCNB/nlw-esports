import express from "express"

const app = express()

app.get("/games", (request, response) => {
  return response.json([])
})

app.post("/ads", (request, response) => {
  return response.status(201).json([])
})

app.get("/games/:id/ads", (request, response) => {
  return response.json([])
})

app.get("/ads/:id/discord", (request, response) => {
  return response.json([])
})

app.listen(3333)