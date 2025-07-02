// background.js

/**
 * Initializes the ad-blocker by loading the domain blocklist
 * and converting each entry into a Declarative Net Request rule.
 */
async function initAdBlocker() {
  try {
    // 1. Fetch blocklist.txt from the extension package
    const response = await fetch(chrome.runtime.getURL("blocklist.txt"));
    const text = await response.text();

    // 2. Parse domains (ignore blank lines and comments)
    const domains = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("//"));

    // 3. Build a DNR rule for each domain
    const rules = domains.map((domain, index) => ({
      id: index + 1,
      priority: 1,
      action: { type: "block" },
      condition: {
        // "||domain^" matches http(s) requests to domain and all subdomains
        urlFilter: `||${domain}^`,
        resourceTypes: [
          "main_frame",
          "sub_frame",
          "script",
          "image",
          "xmlhttprequest",
          "stylesheet",
        ],
      },
    }));

    // 4. Register (and replace) the dynamic rules
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: rules.map((r) => r.id),
      addRules: rules,
    });

    console.log(`Ad-Blocker: Loaded and registered ${rules.length} rules.`);
  } catch (err) {
    console.error("Ad-Blocker initialization failed:", err);
  }
}

// Run on initial install and on every startup
chrome.runtime.onInstalled.addListener(initAdBlocker);
chrome.runtime.onStartup.addListener(initAdBlocker);
