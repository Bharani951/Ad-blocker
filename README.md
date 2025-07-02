# Simple Ad Blocker

A minimal Chrome extension that blocks requests to known ad servers for a smoother, faster, and more private browsing experience.

## Installation

1. Clone or download this repo.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select this `ad-blocker/` folder.

## How It Works

- On startup, the service worker loads `blocklist.txt` into memory.
- Every outgoing request is checked against that list.
- If the request’s hostname matches (or ends with) a blocked domain, it’s cancelled.

## Customizing

- **Add domains** to `blocklist.txt` (one per line).
- **Reload** the extension in `chrome://extensions` to apply changes.

## License

MIT © Bharani K T
