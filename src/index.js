import 'dotenv/config';
import express from 'express';
import { authRouter } from './routes/auth.rout.js';

const PORT = process.env.PORT || 4000;

const app = express();

app.use(authRouter);

app.get('/', (req, res) => {
  res.send('Hello')
});

app.listen(PORT, () => {
  console.log('Server is running');
})