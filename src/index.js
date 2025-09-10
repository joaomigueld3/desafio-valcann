import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './routes/userRoutes.js';
import errorHandler from "./middlewares/errorHandler.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

dotenv.config({ path: '.env' });

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(morgan('dev'));

const swaggerFile = JSON.parse(
  fs.readFileSync(path.resolve("src/docs/swagger.json"), "utf-8")
);

// Rota da documentação
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/users', userRoutes);
app.use(errorHandler);

/* app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', allRoutes); */

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT ${PORT}`);
  console.log(`📖 Swagger docs available at http://localhost:${PORT}/docs`);
});
