import { Book } from "../interfaces/book.ts";
import { BooksRepository } from "../abstracts/bookRepository.ts";
import { injectable } from "inversify";

@injectable()
export class MemoryBooksRepository implements BooksRepository {
    private books: Book[] = []; 

    createBook(book: Book): void {
        this.books.push(book);
    }

    getBook(id: number): Book | null {
        return this.books.find(b => b.id === id) || null;
    }

    getBooks(): Book[] {
        return [...this.books]; 
    }

    updateBook(id: number, updatedBook: Book): void {
        const idx = this.books.findIndex(b => b.id === id);
        if (idx !== -1) {
            this.books[idx] = updatedBook;
        }
    }

    deleteBook(id: number): void {
        this.books = this.books.filter(b => b.id !== id);
    }
}