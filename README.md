# 🧽 CleanLink

CleanLink is a lightweight browser extension that automatically removes tracking and affiliate parameters from any link you click — giving you faster, cleaner, and more private browsing.

---

## ✨ Features

- Removes common tracking parameters (`utm_*`, `fbclid`, `gclid`, etc.)
- Strips affiliate tags like `ref`, `tag`, `affid`
- Works automatically in the background
- Tracks how many links were cleaned
- 100% local — no data ever leaves your browser

---

## 🧠 Example

**Before**

```
https://www.amazon.de/dp/B09XYZ/?tag=my-affiliate-21&utm_source=newsletter
```

**After**

```
https://www.amazon.de/dp/B09XYZ/
```

---

## ⚙️ Installation

1. Download or clone this repository.
2. Open your browser’s extensions page:
   - Chrome / Brave / Edge → `chrome://extensions`
   - Firefox → `about:debugging#/runtime/this-firefox`
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the `cleanlink` folder.
5. You’re done! 🎉

---

## 🧩 How It Works

CleanLink intercepts navigation requests using the WebExtensions API and removes known tracking or affiliate parameters before the page loads.

It currently strips:

```
utm_source, utm_medium, utm_campaign, utm_term, utm_content,
fbclid, gclid, yclid, mc_cid, mc_eid, affid, aff, affiliate,
ref, referrer, tag, clickid, cid
```

---

## 📜 License

MIT License © 2025
