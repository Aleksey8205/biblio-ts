import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import path from 'path';
import methodOverride from 'method-override';
import './service/infrastructure/container.ts'
import './config/database.ts';
import { createServer } from 'http';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.resolve();

const app = express();

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET as string,
  resave: false,
  saveUninitialized: false,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// app.use("/api/user", userRouter);
// app.use('/', indexRouter);
// app.use('/api/books', bookRouter);

const server = createServer(app); 


    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    })