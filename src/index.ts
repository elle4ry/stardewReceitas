import express from 'express';
import { routes } from './routes';

const app = express();
const PORT = 3000;

// Middleware para lidar com JSON
app.use(express.json());

// Usar as rotas
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
