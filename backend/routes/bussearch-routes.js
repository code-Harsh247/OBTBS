import express from "express";
import { getbusbysearch, totalupdate ,  } from "../controls/bus-control.js";

const bussearchrouter = express.Router();
bussearchrouter.put("/", getbusbysearch);
bussearchrouter.put("/total", totalupdate);

export default bussearchrouter;
