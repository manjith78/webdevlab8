import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/vehicles";

export default function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => setVehicles(res.data));
  }, []);

  return (
    <div>
      <h2>All Vehicles</h2>
      <ul>
        {vehicles.map((v) => (
          <li key={v._id}>
            <b>{v.vehicleNumber}</b> — {v.ownerName} ({v.serviceDetails})
          </li>
        ))}
      </ul>
    </div>
  );
}