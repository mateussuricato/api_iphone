import { carrinho } from '../models/carrinho.js';

export const findAllCarrinhoService = async () => {
  const allCarrinho = await carrinho.find();
  return allCarrinho;
};

export const createManyItemsCarrinhoService = async (newCarrinho) => {
  const createCarrinho = await carrinho.insertMany(newCarrinho);
  return createCarrinho;
};

export const deleteAllItemsCarrinhoService = async () => {
  return await carrinho.deleteMany();
};
