// Wait until DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('portraitCanvas');
    const ctx    = canvas.getContext('2d');
    drawPortrait(ctx);
  
    // When button is clicked, reveal the paragraph
    document.getElementById('showBtn').addEventListener('click', () => {
      const descDiv = document.getElementById('description');
      if (descDiv.style.display === 'none') {
        descDiv.style.display = 'block';
        // Optionally disable the button so it can't be clicked again
        document.getElementById('showBtn').disabled = true;
        document.getElementById('showBtn').textContent = 'Description Shown';
      }
    });
  });
  
  /**
   * drawPortrait(ctx)
   *
   * Draws a simplified, stylized portrait of Michelle Obama on the given canvas context.
   * You can tweak colors and proportions as you like.
   */
  function drawPortrait(ctx) {
    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
    // 1. Draw head shape (oval)
    ctx.fillStyle = '#f1c27d'; // skin tone
    ctx.beginPath();
    ctx.ellipse(200, 240, 130, 170, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  
    // 2. Draw hair (simple silhouette)
    ctx.fillStyle = '#3b2e2d'; // dark brown/black hair
    ctx.beginPath();
    // Top of head: wide arc
    ctx.ellipse(200, 170, 150, 140, 0, Math.PI, 0, true);
    // Sides down to ears
    ctx.lineTo(50, 300);
    ctx.lineTo(350, 300);
    ctx.closePath();
    ctx.fill();
  
    // 3. Draw eyes
    // Left eye white
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.ellipse(150, 240, 25, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    // Right eye white
    ctx.beginPath();
    ctx.ellipse(250, 240, 25, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    // Irises
    ctx.fillStyle = '#4b3621'; // dark brown iris
    ctx.beginPath();
    ctx.arc(150, 240, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(250, 240, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    // Pupils
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(150, 240, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(250, 240, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  
    // 4. Draw eyebrows
    ctx.strokeStyle = '#3b2e2d';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    // Left brow
    ctx.beginPath();
    ctx.moveTo(125, 215);
    ctx.quadraticCurveTo(150, 200, 175, 215);
    ctx.stroke();
    ctx.closePath();
    // Right brow
    ctx.beginPath();
    ctx.moveTo(225, 215);
    ctx.quadraticCurveTo(250, 200, 275, 215);
    ctx.stroke();
    ctx.closePath();
  
    // 5. Draw nose (simple shape)
    ctx.strokeStyle = '#a56f52';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(200, 250);
    ctx.lineTo(200, 300);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(200, 300, 5, Math.PI, 0, false);
    ctx.stroke();
    ctx.closePath();
  
    // 6. Draw mouth
    ctx.fillStyle = '#b25640'; // lip color
    ctx.beginPath();
    ctx.moveTo(160, 335);
    ctx.quadraticCurveTo(200, 365, 240, 335);
    ctx.quadraticCurveTo(200, 345, 160, 335);
    ctx.fill();
    ctx.closePath();
    // Mouth line
    ctx.strokeStyle = '#7f3a2f';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(160, 335);
    ctx.quadraticCurveTo(200, 355, 240, 335);
    ctx.stroke();
    ctx.closePath();
  
    // 7. Draw neck and shoulders
    // Neck
    ctx.fillStyle = '#f1c27d';
    ctx.beginPath();
    ctx.rect(160, 390, 80, 90);
    ctx.fill();
    ctx.closePath();
    // Shoulders (simple trapezoid for clothing)
    ctx.fillStyle = '#2e5b99'; // navy-ish dress
    ctx.beginPath();
    ctx.moveTo(80, 480);
    ctx.lineTo(320, 480);
    ctx.lineTo(260, 550);
    ctx.lineTo(140, 550);
    ctx.closePath();
    ctx.fill();
  
    // 8. Add earrings (simple circles)
    ctx.fillStyle = '#e1d700'; // gold
    ctx.beginPath();
    ctx.arc(110, 310, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(290, 310, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
  