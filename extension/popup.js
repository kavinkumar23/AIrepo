async function getToken() {
  const data = await chrome.storage.local.get("token");
  return data.token;
}
function requestFreshToken() {
  return new Promise((resolve) => {
    console.log("📤 Requesting fresh token (direct to background)");
    chrome.runtime.sendMessage(
      { type: "GET_FRESH_TOKEN" },
      (response) => {
        if (chrome.runtime.lastError) {
          console.error("❌ Runtime error:", chrome.runtime.lastError.message);
          resolve(null);
          return;
        }
        console.log("📥 Fresh token response:", response);
        resolve(response?.token || null);
      }
    );
  });
}
async function fetchWithAuth(url, options = {}) {
  let { token } = await chrome.storage.local.get("token");
  if (!token) return null;
  let res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("🔍 Initial response:", res.status);
  return res;
}
function formatSummary(summary) {
  if (!summary) return "No summary available";
  const points = summary
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  return `
    <div>
      <h3 style="margin-bottom:10px;">AI Summary</h3>
      <ul style="padding-left:18px;">
        ${points.map(p => `<li style="margin-bottom:6px;">${p}</li>`).join("")}
      </ul>
    </div>
  `;
}

// ✅ Main click handler
document.getElementById("summarize").addEventListener("click", async () => {
  try {
    const output = document.getElementById("output");
    output.innerHTML = "Processing...";

    const token = await getToken();

    if (!token) {
      output.innerHTML = "⚠️ Please login on website first";
      return;
    }

    let [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });

    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        func: () => document.body.innerText,
      },
      async (results) => {
        try {
          const text = results?.[0]?.result || "";

          if (!text) {
            output.innerHTML = "No page content found";
            return;
          }
          const verifyRes = await fetchWithAuth("http://localhost:5050/verify");
          console.log("Verify response:", verifyRes);

          if (!verifyRes) {
            output.innerHTML = "Session expired. Please login again.";
            return;
          }

          const verifyData = await verifyRes.json();

          if (!verifyData.access) {
            output.innerHTML = "Please purchase access";
            return;
          }

          // ✨ Summarize
          const res = await fetchWithAuth("http://localhost:5050/summarize", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
          });

          console.log("Summarize response:", res);

          if (!res) {
            output.innerHTML = "Session expired. Please login again.";
            return;
          }

          const data = await res.json();

          output.innerHTML = formatSummary(data.summary);

        } catch (err) {
          console.error(err);
          output.innerHTML = "Error while summarizing page";
        }
      }
    );

  } catch (err) {
    console.error(err);
    document.getElementById("output").innerHTML =
      "Unexpected error occurred";
  }
});