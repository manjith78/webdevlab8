import React from "react";
import VehicleForm from "./components/VehicleForm.jsx";
import VehicleList from "./pages/VehicleList.jsx";

const App = () => (
  <div style={{ padding: "20px" }}>
    <h1>🚗 Vehicle Service & Maintenance Tracker</h1>
    <VehicleForm />
    <VehicleList />
  </div>
);

export default App;