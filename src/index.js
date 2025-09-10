import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
// import swaggerDocument from './swagger-output.json' assert { type: 'json' };

dotenv.config({ path: '.env' });

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(morgan('dev'));

app.use('/users', userRoutes);

/* app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', allRoutes); */

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT ${PORT}`);
});
