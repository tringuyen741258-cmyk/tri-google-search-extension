chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === "FILL_GOOGLE_SEARCH") {
    const searchBox = document.querySelector("input[name='q']");

    if (searchBox) {
      searchBox.value = msg.data;
      searchBox.dispatchEvent(new Event("input"));

      // Tự động submit
      const form = searchBox.closest("form");
      if (form) form.submit();
    }
  }
});
