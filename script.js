window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('portraitCanvas');
  const ctx    = canvas.getContext('2d');
  console.log("🚀 drawPortrait starting");  // sanity‐check log

  drawPortrait(ctx);

  const showBtn = document.getElementById('showBtn');
  const descDiv = document.getElementById('description');
  showBtn.addEventListener('click', () => {
    console.log("🔘 Show button clicked");
    if (descDiv.style.display === 'none') {
      descDiv.style.display = 'block';
      showBtn.disabled = true;
      showBtn.textContent = 'Description Shown';
    }
  });
});

function drawPortrait(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // 1. Face (oval)
  ctx.fillStyle = '#f1c27d';
  ctx.beginPath();
  ctx.ellipse(200, 250, 110, 140, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  // 2. Hair (bangs + sides)
  ctx.fillStyle = '#2f1e1b';
  ctx.beginPath();
  ctx.moveTo(90, 200);
  ctx.bezierCurveTo(140, 180, 160, 180, 160, 200);
  ctx.bezierCurveTo(180, 180, 220, 180, 240, 200);
  ctx.bezierCurveTo(260, 180, 310, 180, 310, 200);
  ctx.lineTo(310, 350);
  ctx.bezierCurveTo(310, 420, 270, 480, 200, 480);
  ctx.bezierCurveTo(130, 480, 90, 420, 90, 350);
  ctx.closePath();
  ctx.fill();

  // 3. Neck and Shoulders
  ctx.fillStyle = '#f1c27d';
  ctx.fillRect(170, 380, 60, 100);
  ctx.fillStyle = '#2e5b99';
  ctx.beginPath();
  ctx.moveTo(120, 480);
  ctx.lineTo(280, 480);
  ctx.lineTo(260, 520);
  ctx.lineTo(140, 520);
  ctx.closePath();
  ctx.fill();

  // 4. Eyes
  // Left eye
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.ellipse(160, 240, 28, 15, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  // Right eye
  ctx.beginPath();
  ctx.ellipse(240, 240, 28, 15, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  // Irises
  ctx.fillStyle = '#4b3621';
  ctx.beginPath();
  ctx.arc(160, 240, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(240, 240, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  // Pupils
  ctx.fillStyle = '#000000';
  ctx.beginPath();
  ctx.arc(160, 240, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(240, 240, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.strokeStyle = '#000';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(160, 240, 28, 15, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.ellipse(240, 240, 28, 15, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.closePath();

  // 5. Eyebrows
  ctx.strokeStyle = '#2f1e1b';
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(130, 210);
  ctx.quadraticCurveTo(160, 200, 190, 210);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.moveTo(210, 210);
  ctx.quadraticCurveTo(240, 200, 270, 210);
  ctx.stroke();
  ctx.closePath();

  // 6. Nose
  ctx.strokeStyle = '#a56f52';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(200, 250);
  ctx.lineTo(200, 300);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(195, 305, 4, 0, Math.PI, false);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(205, 305, 4, 0, Math.PI, false);
  ctx.stroke();
  ctx.closePath();

  // 7. Lips
  // Upper lip
  ctx.fillStyle = '#bf5a41';
  ctx.beginPath();
  ctx.moveTo(170, 345);
  ctx.bezierCurveTo(200, 360, 240, 360, 230, 345);
  ctx.bezierCurveTo(200, 355, 170, 345, 170, 345);
  ctx.fill();
  ctx.closePath();
  // Lower lip
  ctx.fillStyle = '#9e3f2b';
  ctx.beginPath();
  ctx.moveTo(170, 345);
  ctx.bezierCurveTo(200, 370, 240, 370, 230, 345);
  ctx.bezierCurveTo(200, 360, 170, 345, 170, 345);
  ctx.fill();
  ctx.closePath();

  // 8. Earrings
  ctx.fillStyle = '#e1d700';
  ctx.beginPath();
  ctx.arc(120, 300, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(280, 300, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
