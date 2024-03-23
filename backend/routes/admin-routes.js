import express from "express";
import { addadmin, loginadmin } from "../controls/admin-control.js";

const adminrouter = express.Router();

adminrouter.post("/signup", addadmin);
adminrouter.post("/login", loginadmin);

export default adminrouter;
