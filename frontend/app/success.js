import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    localStorage.setItem("paid", "true");

    // auto redirect after 2 seconds
    setTimeout(() => {
      window.location.href = "https://chromewebstore.google.com/";
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Payment Successful 🎉</h2>
      <p>Redirecting to Chrome Web Store...</p>
    </div>
  );
}