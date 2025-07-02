// call the chrome API's
// add the event listener== to check where the request is going
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    //call back function
    return { cancel: true }; // cancel the request our reuqest
  },
  // filter : object
  { urls: ["*://*.zedo.com/*"] }, // block all requests to zedo.com
  ["blocking"]
);
