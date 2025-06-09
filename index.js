import { config } from "dotenv";
import ExpressServer from "./configs/server.js";

config();
const server = new ExpressServer();
server.listen();

console.log("Esta es una actualización de prueba");

