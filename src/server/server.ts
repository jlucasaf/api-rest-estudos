import express from "express";
import "dotenv/config";

import { router } from "./routes";

const server = express();

server.use([router, express.json()]);

export { server };