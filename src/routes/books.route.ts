import express, { Router, Response } from "express";
import { MemoryBooksRepository } from "../service/repository/memoryBooksRepository.ts";

const repository = new MemoryBooksRepository();

const router: Router = express.Router();

router.get("/", async (res: Response) => {
    try {
      const books = repository.getBooks();
      res.render("books/index", {
        title: "Просмотр книг",
        books: books,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("Ошибка при получении книги.");
    }
  });