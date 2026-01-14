import { useState } from "react";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="app">
      {user ? (
        <div className="dashboard">
          <div className="dashboard-content">
            <h1>Xush kelibsiz! 🎉</h1>
            <div className="user-info">
              <p>
                <strong>Ism:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>ID:</strong> {user.id}
              </p>
            </div>
            <button onClick={handleLogout} className="logout-btn">
              Chiqish
            </button>
          </div>
        </div>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
