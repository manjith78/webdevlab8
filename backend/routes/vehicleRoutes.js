import express from "express";
import Vehicle from "../models/Vehicle.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const vehicles = await Vehicle.find();
  res.json(vehicles);
});

router.post("/", async (req, res) => {
  const vehicle = new Vehicle(req.body);
  await vehicle.save();
  res.json(vehicle);
});

export default router;