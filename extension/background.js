import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
console.log("Background service worker loaded");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("🔔 Background received message:", request);
  if (request.type === "SAVE_TOKEN") {
    chrome.storage.local.set({ token: request.token }, () => {
      if (chrome.runtime.lastError) {
        console.error("❌ Storage error:", chrome.runtime.lastError);
        sendResponse({ success: false });
        return;
      }

      console.log("💾 Token stored successfully");

      sendResponse({
        success: true,
        message: "Token saved successfully",
      });
    });

    return true; // ✅ REQUIRED
  }
});