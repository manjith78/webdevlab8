import React, { useState, useEffect } from "react";
import VehicleForm from "./components/VehicleForm.jsx";
import VehicleList from "./pages/VehicleList.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div>
        <h1>🚗 Vehicle Service & Maintenance Tracker</h1>
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>🚗 Vehicle Service & Maintenance Tracker</h1>
        <div>
          <button onClick={handleLogout} style={{ background: "#ef4444", color: "#fff" }}>Logout</button>
        </div>
      </div>

      <VehicleForm />
      <VehicleList />
    </div>
  );
};

export default App;