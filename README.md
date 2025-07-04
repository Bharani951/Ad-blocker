# Ad-Blocker

A lightweight Chrome extension that blocks common online advertisements by using Chrome’s `declarativeNetRequest` API to cancel requests to known ad-serving domains. :contentReference[oaicite:0]{index=0}

## Features

- Blocks requests to popular ad servers (e.g., DoubleClick, Google Ad Services). :contentReference[oaicite:1]{index=1}
- Uses Manifest V3’s `declarativeNetRequest` for efficient, background filtering. :contentReference[oaicite:2]{index=2}
- No background page or heavy scripts—pure JSON-based ruleset.

## Installation

1. **Clone or download** this repository.
   ```bash
   git clone https://github.com/Bharani951/Ad-blocker.git
   ```

## Installation

1. **Open Chrome** and navigate to: chrome://extensions/

2. **Enable “Developer mode”** (toggle in the top right).
3. **Click “Load unpacked”** and select the cloned `Ad-blocker/` folder.
4. The extension will immediately start blocking matching ad URLs.

---

## Usage

Once loaded, the extension runs silently and blocks any HTTP(S) request matching the patterns in `rules.json`. No further interaction is required.

---

## Project Structure

Ad-Blocker/
├── README.md # This file
├── manifest.json # Extension metadata & permissions
├── rules.json # Array of declarativeNetRequest rules
└── icons/ # (Optional) toolbar icons

- **manifest.json**

  - **Name:** “simple ad-blocker”
  - **Version:** 1.0.0
  - **Permissions:** [`declarativeNetRequest`]
  - **Rule resource:** `rules.json`

- **rules.json**  
  Contains an array of rules.
