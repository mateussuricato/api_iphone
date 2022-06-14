import { iphones } from '../models/iphones.js';

export const findAllService = async () => {
  const paleta = await iphones.find();
  return paleta;
};

export const findByIdService = async (id) => {
  const paleta = await iphones.findById(id);
  return paleta;
};

export const createIphoneService = async (newPaleta) => {
  const paletaCreated = await iphones.create(newPaleta);
  return paletaCreated;
};

export const updateIphoneService = async (id, paletaEdited) => {
  const paletaUpdate = await iphones.findByIdAndUpdate(id, paletaEdited);
  return paletaUpdate;
};

export const deleteIphoneService = async (id) => {
  const del = await iphones.findByIdAndDelete(id);
  return del;
};
