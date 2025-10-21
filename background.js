const JUNK_PARAMS = [
  "utm_source","utm_medium","utm_campaign","utm_term","utm_content",
  "fbclid","gclid","yclid","mc_cid","mc_eid",
  "affid","aff","affiliate","ref","referrer","tag","clickid","cid"
];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!changeInfo.url) return;

  // Use a separate async function to properly await
  async function cleanTab() {
    try {
      // Get current toggle value; default true
      const { enabled = true } = await chrome.storage.local.get("enabled");
      if (!enabled) return; // Stop if cleaning is disabled

      const url = new URL(changeInfo.url);
      let modified = false;

      JUNK_PARAMS.forEach(param => {
        if (url.searchParams.has(param)) {
          url.searchParams.delete(param);
          modified = true;
        }
      });

      if (modified) {
        // Only update if something was removed
        chrome.tabs.update(tabId, { url: url.toString() });

        // Increment clean count
        const { cleanCount = 0 } = await chrome.storage.local.get("cleanCount");
        await chrome.storage.local.set({ cleanCount: cleanCount + 1 });
      }
    } catch (err) {
      console.warn("CleanLink error:", err);
    }
  }

  cleanTab();
});
