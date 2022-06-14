import mongoose from 'mongoose';
import {
  findAllService,
  findByIdService,
  createIphoneService,
  updateIphoneService,
  deleteIphoneService,
} from '../services/iphones.service.js';

export const findAll = async (req, res) => {
  const iphone = await findAllService();

  if (iphone.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }

  res.send(iphone);
};

export const findById = async (req, res) => {
  const id = req.params.id;

  const chosenIphones = await findByIdService(id);
  if (!chosenIphones) {
    return res.status(400).send({ message: 'Paleta não encontrada!' });
  }
  res.send(chosenIphones);
};

export const createIphoneController = async (req, res) => {
  const iphone = req.body;
  await createIphoneService(iphone);
};

export const updateIphoneController = async (req, res) => {
  const idParam = req.params.id;
  const iphoneEdit = req.body;
  await updateIphoneService(idParam, iphoneEdit);
};

export const deleteIphoneController = async (req, res) => {
  const idParam = req.params.id;
  await deleteIphoneService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};
