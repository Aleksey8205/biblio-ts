import mongoose from 'mongoose';

if (!process.env.MONGO_URI) {
  throw new Error('Environment variable MONGO_URI is missing.');
}

mongoose.connect(process.env.MONGO_URI, {});

const db = mongoose.connection;

db.on('open', () => {
  console.log('Connected to MongoDB!');
}).on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});