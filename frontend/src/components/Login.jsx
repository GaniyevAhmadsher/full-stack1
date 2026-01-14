import { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Xatolikni tozalash
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        onLoginSuccess(response.data.user);
        // LocalStorage ga saqlash (ixtiyoriy)
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Xatolik yuz berdi. Qayta urinib ko'ring."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Kirish</h1>
          <p>Hisobingizga kiring</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Parol</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Parolingizni kiriting"
              required
              disabled={loading}
              minLength={6}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Kutilmoqda..." : "Kirish"}
          </button>
        </form>

        <div className="demo-credentials">
          <p className="demo-title">Demo hisoblar:</p>
          <div className="demo-list">
            <div className="demo-item">
              <strong>Admin:</strong> admin@example.com / admin123
            </div>
            <div className="demo-item">
              <strong>User:</strong> user@example.com / user123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
