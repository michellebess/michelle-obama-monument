window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleBtn');
  const descDiv   = document.getElementById('description');

  // If either element is missing, abort and log an error
  if (!toggleBtn || !descDiv) {
    console.error("⚠️ Could not find #toggleBtn or #description in index.html");
    return;
  }

  toggleBtn.addEventListener('click', () => {
    // If description is hidden (or empty), show it; otherwise hide it
    if (descDiv.style.display === 'none' || descDiv.style.display === '') {
      descDiv.style.display = 'block';
      toggleBtn.textContent = 'Hide Monument Description';
    } else {
      descDiv.style.display = 'none';
      toggleBtn.textContent = 'Show Monument Description';
    }
  });
});
