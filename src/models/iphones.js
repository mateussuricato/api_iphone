import mongoose from 'mongoose';

const iphoneSchema = new mongoose.Schema({
  titulo: {
    type: String,
    require: true,
  },
  lancamento: {
    type: Number,
    require: true,
  },
  polegadas: {
    type: String,
    require: true,
  },
  resolucao: {
    type: String,
    require: true,
  },
  camera: {
    type: String,
    require: true,
  },
  selfcamera: {
    type: String,
    require: false,
  },
  video: {
    type: String,
    require: false,
  },
  cpu: {
    type: String,
    require: true,
  },
  gpu: {
    type: String,
    require: true,
  },
  ram: {
    type: String,
    require: false,
  },
  os: {
    type: String,
    require: true,
  },
  preco: {
    type: Number,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
});

export const iphones = mongoose.model('iphones', iphoneSchema);
