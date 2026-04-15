import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Live clock (for UI updates)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Fake API call (you can replace later)
  useEffect(() => {
    setTimeout(() => {
      setApiData({
        status: "Running",
        version: "v2.0.0",
        deployments: Math.floor(Math.random() * 20) + 1,
      });
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f4f6f9", minHeight: "100vh" }}>
      
      {/* Navbar */}
      <nav style={{
        background: "#1e293b",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <h2>🚀 DevOps Dashboard</h2>
        <span>{time}</span>
      </nav>

      {/* Main Content */}
      <div style={{ padding: "20px" }}>

        <h2>CI/CD Pipeline Monitoring</h2>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}>

          {/* Status Card */}
          <div style={cardStyle}>
            <h3>Application Status</h3>
            <p style={{ fontSize: "20px", color: "green" }}>
              {loading ? "Loading..." : apiData.status}
            </p>
          </div>

          {/* Version Card */}
          <div style={cardStyle}>
            <h3>Current Version</h3>
            <p style={{ fontSize: "20px" }}>
              {loading ? "..." : apiData.version}
            </p>
          </div>

          {/* Deployment Count */}
          <div style={cardStyle}>
            <h3>Total Deployments</h3>
            <p style={{ fontSize: "20px" }}>
              {loading ? "..." : apiData.deployments}
            </p>
          </div>

          {/* Health Check */}
          <div style={cardStyle}>
            <h3>Health Check</h3>
            <p style={{ color: "green", fontWeight: "bold" }}>
              Healthy ✅
            </p>
          </div>

        </div>

        {/* Activity Section */}
        <div style={{ marginTop: "40px" }}>
          <h3>Recent Activity</h3>
          <ul>
            <li>✔ Build triggered from GitHub</li>
            <li>✔ Docker image pushed</li>
            <li>✔ Kubernetes deployment updated</li>
            <li>✔ Monitoring active (Prometheus + Grafana)</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

// Card styling
const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};

export default App;