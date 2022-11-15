import express from "express";
import indexRoute from "./routes/index.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";

const app = express();
app.use(express.json());

app.use("/api", empleadosRoutes);
app.use(indexRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: "endpoint no encontrado" });
});
export default app;
