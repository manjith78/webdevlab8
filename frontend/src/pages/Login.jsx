import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // NOTE: No backend auth endpoint in this project. This performs a
    // simple client-side 'login' that stores a token in localStorage.
    // Replace this with a real API call when you add auth on the server.
    const fakeToken = btoa(`${email}:${password}`);
    localStorage.setItem("token", fakeToken);

    // call parent callback to update authenticated state
    if (onLogin) onLogin();
  };

  return (
    <div className="card login-card" style={{ maxWidth: 540, margin: "40px auto" }}>
      <h2>Sign in</h2>
      <p className="small">Sign in to manage and view vehicle service records.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
        />

        {error && <div className="small" style={{ color: "#ffb4b4" }}>{error}</div>}

        <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
          <button type="submit">Sign in</button>
          <button type="button" onClick={() => { setEmail("demo@demo.com"); setPassword("demo"); }} style={{ background: "#334155", color: "#fff" }}>Fill demo</button>
        </div>
      </form>
    </div>
  );
}
