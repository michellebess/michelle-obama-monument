window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleBtn');
  const descDiv   = document.getElementById('description');

  if (!toggleBtn || !descDiv) {
    console.error("⚠️ Could not find #toggleBtn or #description");
    return;
  }

  toggleBtn.addEventListener('click', () => {
    if (descDiv.style.display === 'none' || descDiv.style.display === '') {
      // If currently hidden → show it
      descDiv.style.display = 'block';
      toggleBtn.textContent = 'Hide Monument Description';
    } else {
      // If currently visible → hide it
      descDiv.style.display = 'none';
      toggleBtn.textContent = 'Show Monument Description';
    }
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
