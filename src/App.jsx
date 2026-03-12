import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={styles.container}>
      {isLoggedIn ? (
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome, {username}!</h2>
          <p style={styles.text}>You have successfully logged in.</p>

          <button
            style={styles.button}
            onClick={() => {
              setIsLoggedIn(false);
              setUsername("");
              setPassword("");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <form style={styles.card} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #000000, #8b0000)", // black to dark red
  },

  card: {
    width: "360px",
    padding: "40px",
    background: "rgba(0,0,0,0.85)",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0 0 25px red",
  },

  title: {
    color: "#ffffff",
    marginBottom: "20px",
  },

  text: {
    color: "#ccc",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "14px",
    margin: "12px 0",
    borderRadius: "8px",
    border: "2px solid #ffffff",
    background: "#111",
    color: "#fff",
    fontSize: "16px",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "14px",
    marginTop: "15px",
    background: "#ff0000",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 0 10px #ff0000",
    transition: "0.3s",
  },

  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default App;