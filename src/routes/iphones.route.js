import express from 'express';
import { readFile } from 'fs/promises';
import {
  findAll,
  findById,
  createIphoneController,
  updateIphoneController,
  deleteIphoneController,
} from '../controllers/iphones.controller.js';

import {
  validId,
  validObjectBody,
  validObjectBodyCarrinho,
} from '../middlewares/iphones.middleware.js';

import {
  findAllCarrinhoController,
  createManyItemsCarrinhoController,
  deleteAllItemsCarrinhoController,
} from '../controllers/carrinho.controller.js';

import swaggerUi from 'swagger-ui-express';

const json = JSON.parse(
  await readFile(new URL('../swagger.json', import.meta.url)),
);

export const routes = express.Router();

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(json));
routes.get('/iphone', findAll);
routes.get('/iphone/:id', validId, findById);
routes.post('/create', createIphoneController);
routes.put('/update/:id', validId, validObjectBody, updateIphoneController);
routes.delete('/delete/:id', validId, deleteIphoneController);

routes.get('/all-carrinho', findAllCarrinhoController);
routes.post(
  '/create-carrinho',
  validObjectBodyCarrinho,
  createManyItemsCarrinhoController,
);
routes.delete('/finish-carrinho', deleteAllItemsCarrinhoController);
