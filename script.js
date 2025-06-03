window.addEventListener('DOMContentLoaded', () => {
  console.log("🟢 script.js loaded");

  const showBtn = document.getElementById('showBtn');
  const descDiv = document.getElementById('description');

  if (!showBtn || !descDiv) {
    console.error("⚠️ Missing #showBtn or #description in index.html");
    return;
  }

  showBtn.addEventListener('click', () => {
    console.log("🔘 Button clicked");
    descDiv.style.display = 'block';
    showBtn.disabled = true;
    showBtn.textContent = 'Description Shown';
  });
});
