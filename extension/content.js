window.addEventListener("message", (event) => {
  if (!event.data?.type) return;
  console.log("📩 Content script received message:", event.data);
  if (event.data.type === "SAVE_TOKEN") {
    chrome.storage.local.set({ token: event.data.token }, () => {
      if (chrome.runtime.lastError) {
        console.error("❌ Storage error:", chrome.runtime.lastError);
        return;
      }
      console.log("💾 Token saved to chrome.storage.local");
      chrome.runtime.sendMessage(
        {
          type: "SAVE_TOKEN",
          token: event.data.token,
        },
        (response) => {
          if (chrome.runtime.lastError) {
            console.error("❌ sendMessage error:", chrome.runtime.lastError.message);
            return;
          }

          console.log("📥 Response from background:", response);

          // Store response
          chrome.storage.local.set({ saveTokenResponse: response }, () => {
            if (chrome.runtime.lastError) {
              console.error("❌ storage error:", chrome.runtime.lastError.message);
              return;
            }

            console.log("💾 Response stored in chrome.storage.local");
          });
        }
      );
    });
  }
});