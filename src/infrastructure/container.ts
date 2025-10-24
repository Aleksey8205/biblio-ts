import { Container } from "inversify";
import { BooksRepository } from "../abstracts/bookRepository";

const container = new Container();

container.bind(BooksRepository).toSelf()

export default container;