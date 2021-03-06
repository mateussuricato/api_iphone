import mongoose from 'mongoose';

export const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

export const validObjectBody = (req, res, next) => {
  const iphone = req.body;
  if (
    !iphone
  ) {
    res.status(401).send({
      message: 'Envie todos os campos da paleta',
    });
  }
  next();
};

export const validObjectBodyCarrinho = (req, res, next) => {
  const carrinho = req.body;
  carrinho.forEach((item) => {
    if (!item) {
      return res
        .status(404)
        .send({ message: 'Envie todos os caompos do iphone!' });
    }
  });
  next ()
};
