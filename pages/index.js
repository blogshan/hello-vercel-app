export default function Home() {
  return (
    <div className="container">
      
      {/* Header */}
      <header style={{ marginBottom: "80px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>
          ProfitHub Academy
        </h1>
        <p style={{ marginTop: "12px", color: "#94a3b8" }}>
          Learn. Build. Trade Smarter with Automated Systems.
        </p>
      </header>

      {/* Hero Section */}
      <section style={{ marginBottom: "80px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>
          Master Trading with Automation
        </h2>
        <p style={{ maxWidth: "600px", color: "#cbd5f5", marginBottom: "24px" }}>
          ProfitHub Academy helps you learn trading, build bots, 
          and execute strategies with confidence — even if you're a beginner.
        </p>

        <button style={{
          backgroundColor: "#22c55e",
          color: "#020617",
          padding: "14px 24px",
          borderRadius: "8px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer"
        }}>
          Get Started
        </button>
      </section>

      {/* Features */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "24px"
      }}>
        
        <Feature 
          title="Beginner Friendly"
          desc="No prior experience required. Learn step-by-step."
        />

        <Feature 
          title="Bot Building"
          desc="Understand and build automated trading bots."
        />

        <Feature 
          title="Real Strategies"
          desc="Learn strategies used in real market conditions."
        />

        <Feature 
          title="Future Deriv Integration"
          desc="Designed to connect with live trading platforms."
        />

      </section>

      {/* Footer */}
      <footer style={{ marginTop: "100px", color: "#64748b" }}>
        © {new Date().getFullYear()} ProfitHub Academy. All rights reserved.
      </footer>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div style={{
      backgroundColor: "#020617",
      border: "1px solid #1e293b",
      borderRadius: "12px",
      padding: "24px"
    }}>
      <h3 style={{ marginBottom: "8px" }}>{title}</h3>
      <p style={{ color: "#94a3b8" }}>{desc}</p>
    </div>
  );
}

