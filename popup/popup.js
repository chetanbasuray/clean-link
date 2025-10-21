document.addEventListener("DOMContentLoaded", async () => {
  const statsEl = document.getElementById("stats");
  const resetBtn = document.getElementById("reset");
  const toggle = document.getElementById("enableToggle");

  // Load stats
  const data = await chrome.storage.local.get(["cleanCount", "enabled"]);
  const count = data.cleanCount || 0;
  statsEl.textContent = `Cleaned ${count} URLs`;

  // Load toggle state (default true)
  toggle.checked = data.enabled !== false;

  // Toggle event
  toggle.addEventListener("change", async () => {
    await chrome.storage.local.set({ enabled: toggle.checked });
    // Optional: show feedback
    statsEl.textContent = toggle.checked 
      ? `Cleaning enabled (Cleaned ${count} URLs)` 
      : `Cleaning disabled`;
  });

  // Reset button
  resetBtn.addEventListener("click", async () => {
    await chrome.storage.local.set({ cleanCount: 0 });
    statsEl.textContent = toggle.checked
      ? `Cleaned 0 URLs`
      : `Cleaning disabled`;
  });
});
