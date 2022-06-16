import { iphones } from '../models/iphones.js';

export const findAllService = async () => {
  const iphone = await iphones.find();
  return iphone;
};

export const findByIdService = async (id) => {
  const iphone = await iphones.findById(id);
  return iphone;
};

export const createIphoneService = async (newPaleta) => {
  const iphoneCreated = await iphones.create(newPaleta);
  return iphoneCreated;
};

export const updateIphoneService = async (id, paletaEdited) => {
  const iphoneUpdate = await iphones.findByIdAndUpdate(id, paletaEdited);
  return iphoneUpdate;
};

export const deleteIphoneService = async (id) => {
  const del = await iphones.findByIdAndDelete(id);
  return del;
};
