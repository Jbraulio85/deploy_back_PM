import { validationResult } from "express-validator";

export const validarCampos = (req, res, next) => {
  const e = validationResult(req);
  console.log(req.body)
  if (!e.isEmpty()) {
    return res.status(400).json(e);
  }

  next();
};
