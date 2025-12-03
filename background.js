chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "OPEN_GOOGLE_SEARCH") {
    const q = encodeURIComponent(msg.query);

    // Mở trực tiếp trang tìm kiếm
    const url = "https://www.google.com/search?q=" + q;

    chrome.tabs.create({ url });
  }
});
