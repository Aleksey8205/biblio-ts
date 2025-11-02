import { Container } from "inversify";
import { BooksRepository } from "../abstracts/bookRepository.ts";

const container = new Container();

container.bind(BooksRepository).toSelf()

export default container;