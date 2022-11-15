import { Router } from "express";
import {
  actualizarEmpleados,
  crearEmpleados,
  eliminarEmpleados,
  getEmpleados,
  getEmpleadosid,
} from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/empleados", getEmpleados);

router.get("/empleados/:id", getEmpleadosid);

router.post("/empleados", crearEmpleados);

router.delete("/empleados/:id", eliminarEmpleados);

router.patch("/empleados/:id", actualizarEmpleados);

export default router;
