# Simple Ad Blocker

A minimalist Chrome Extension that blocks requests to known ad servers using Manifest V3’s Declarative Net Request API.

## Features

- Blocks network requests to all domains listed in `blocklist.txt`.
- No UI—works silently in the background.
- Easy to expand: just add more domains to `blocklist.txt`.
- Leverages Chrome’s high-performance blocking engine.

## Installation

1. Clone or download this repository.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the `ad-blocker/` directory.
5. Ensure the extension is enabled.

## How It Works

1. On install/startup, the service worker (`background.js`) loads your `blocklist.txt`.
2. It parses each domain and builds a set of blocking rules (`||domain^`).
3. Chrome enforces these rules at the network layer, stopping any matching requests.

## Customization

- **Add/Remove Domains**  
  Edit `blocklist.txt` and reload the extension.
- **Adjust Blocked Resource Types**  
  Modify the `resourceTypes` array in `background.js`.

## Testing

- Open DevTools → Network → filter by a blocked domain → reload pages to confirm requests are canceled.
- Use a local HTML test file that dynamically loads a script from a blocked domain and observe the failure.

## Where the Logo Appears

- **Toolbar Icon**: appears next to the address bar when the extension is active.
- **chrome://extensions**: displayed at 16×16, 48×48, and 128×128 in the extensions list.

## License

MIT © Bharani K T
