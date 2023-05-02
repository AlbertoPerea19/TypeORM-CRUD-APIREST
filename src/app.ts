import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import UserRoutes from './routes/user.routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(UserRoutes);

export default app;