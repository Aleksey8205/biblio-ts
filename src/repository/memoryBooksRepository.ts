import { Book } from "../interfaces/book";
import { BooksRepository } from "../abstracts/bookRepository";
import { injectable } from "inversify";

@injectable()
export class MemoryBooksRepository implements BooksRepository {
    private books: Book[] = []; 

    public createBook(book: Book): void {
        this.books.push(book);
    }

    public getBook(id: number): Book | null {
        return this.books.find(b => b.id === id) || null;
    }

    public getBooks(): Book[] {
        return [...this.books]; 
    }

    public updateBook(id: number, updatedBook: Book): void {
        const idx = this.books.findIndex(b => b.id === id);
        if (idx !== -1) {
            this.books[idx] = updatedBook;
        }
    }

    public deleteBook(id: number): void {
        this.books = this.books.filter(b => b.id !== id);
    }
}