import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/vehicles";

export default function VehicleForm() {
  const [form, setForm] = useState({
    ownerName: "",
    vehicleNumber: "",
    serviceDate: "",
    nextServiceDate: "",
    serviceDetails: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, form);
    alert("Vehicle added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input name="ownerName" placeholder="Owner Name" onChange={handleChange} />
      <input name="vehicleNumber" placeholder="Vehicle Number" onChange={handleChange} />
      <input type="date" name="serviceDate" onChange={handleChange} />
      <input type="date" name="nextServiceDate" onChange={handleChange} />
      <input name="serviceDetails" placeholder="Service Details" onChange={handleChange} />
      <button type="submit">Add Vehicle</button>
    </form>
  );
}