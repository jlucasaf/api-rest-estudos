import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Olá Dev");
});

router.get("/teste", (req, res) => {
  res.send("Olá Teste");
});

export {router};
