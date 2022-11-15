import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleados");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const getEmpleadosid = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "El empleado no existe" });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const crearEmpleados = async (req, res) => {
  try {
    const { nombre, salario } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO empleados(nombre, salario) VALUES(?, ?)",
      [nombre, salario]
    );
    res.send({
      id: rows.insertId,
      nombre,
      salario,
    });
    /* console.log(req.body); Comprobar el reques body en thunder client*/
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const eliminarEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Empleado no encontrado",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal" });
  }
};

export const actualizarEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, salario } = req.body;

    const [result] = await pool.query(
      "UPDATE empleados SET nombre = ?, salario = ? WHERE id = ?",
      [nombre, salario, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Empleado no encontrado",
      });

    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
      id,
    ]);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Algo salió mal" });
  }
};
