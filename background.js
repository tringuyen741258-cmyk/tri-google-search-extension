chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "OPEN_GOOGLE_SEARCH") {
    const q = encodeURIComponent(msg.query || "");
    chrome.tabs.create({
      url: "https://www.google.com/search?q=" + q
    });
  }
});
