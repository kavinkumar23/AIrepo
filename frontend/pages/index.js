import { useState } from "react";
import { login } from "../firebase";
function TopBar({ onSignup }) {
  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 60px", // 👈 increased padding (fix)
        borderBottom: "1px solid #eee",
        background: "white",

        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxSizing: "border-box", // 👈 prevents overflow issues
      }}
    >
      {/* LEFT: Logo */}
      <div style={{ fontSize: "22px", fontWeight: "700" }}>
        AI Summarizer
      </div>

      {/* RIGHT: Signup Button */}
      <div style={{ marginRight: "10px" }}> {/* 👈 extra spacing */}
        <button
          onClick={onSignup}
          style={{
            background: "#ff4d4f",
            color: "white",
            border: "none",
            padding: "10px 22px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

/* 🏠 Main Page */
export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  const price = isYearly ? 12 : 1;

  /* 🔐 Signup/Login */
  const handleSignup = async () => {
    try {
      const loggedInUser = await login();
      setUser(loggedInUser);

      const token = await loggedInUser.getIdToken(true);

      await fetch("http://localhost:5050/auth/sync-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("✅ User synced");
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  /* 💳 Payment */
  const handlePay = async () => {
    try {
      setLoading(true);

      let currentUser = user;

      if (!currentUser) {
        currentUser = await login();
        setUser(currentUser);
      }

      const token = await currentUser.getIdToken();

      const res = await fetch(
        "http://localhost:5050/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            plan: isYearly ? "yearly" : "monthly",
          }),
        }
      );

      const text = await res.text();

      try {
        const data = JSON.parse(text);
        window.location.href = data.url;
      } catch (err) {
        console.error("❌ Not JSON:", text);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔝 Navbar */}
      <TopBar onSignup={handleSignup} />

      {/* 💰 Pricing */}
      <div style={{ textAlign: "center", padding: "60px" }}>
        <h1>AI Summarizer</h1>

        <div
          style={{
            background: "#FFD700",
            padding: "40px",
            borderRadius: "12px",
            display: "inline-block",
            minWidth: "320px",
          }}
        >
          {/* 🔁 Toggle */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                background: "#f5f5f5",
                borderRadius: "30px",
                padding: "4px",
              }}
            >
              <div
                onClick={() => setIsYearly(false)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  background: !isYearly ? "white" : "transparent",
                  fontWeight: !isYearly ? "600" : "400",
                }}
              >
                Monthly
              </div>

              <div
                onClick={() => setIsYearly(true)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  background: isYearly ? "white" : "transparent",
                  fontWeight: isYearly ? "600" : "400",
                }}
              >
                Yearly
              </div>
            </div>
          </div>

          <h2>Flexible User Pricing</h2>

          <h1 style={{ fontSize: "60px", margin: "10px 0" }}>
            ${price}
          </h1>

          <p>
            {isYearly
              ? "/year (billed annually)"
              : "/month (billed monthly)"}
          </p>

          <button
            onClick={handlePay}
            disabled={loading}
            style={{
              background: "#ff4d4f",
              color: "white",
              padding: "12px 30px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            {loading ? "Loading..." : "Signup and Pay"}
          </button>
        </div>
      </div>
    </>
  );
}