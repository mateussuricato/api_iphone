import mongoose from 'mongoose';

const carrinhoSchema = new mongoose.Schema({
  iphoneId: {
    type: String,
    require: true,
  },
  quantidade: {
    type: Number,
    require: true,
  },
});

export const carrinho = mongoose.model('carrinho', carrinhoSchema);
