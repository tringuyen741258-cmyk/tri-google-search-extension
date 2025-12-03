document.getElementById("goBtn").addEventListener("click", () => {
  const text = document.getElementById("textInput").value;

  chrome.runtime.sendMessage({
    type: "OPEN_GOOGLE_SEARCH",
    query: text
  });
});
