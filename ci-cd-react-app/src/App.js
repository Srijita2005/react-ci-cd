import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "1234") {
      alert("Login Successful 🚀");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
      <div className="container">
        <form className="login-box" onSubmit={handleLogin}>
          <h2>Login</h2>

          <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />

          <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />

          <button type="submit">Login</button>
        </form>
      </div>
  );
}

export default App;