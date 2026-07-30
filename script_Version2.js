// script for index.html: yes shows the message, no evades the cursor
document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const message = document.getElementById('message');
  const msgText = document.getElementById('msgText');
  const closeBtn = document.getElementById('closeBtn');
  const container = document.querySelector('.container');

  // Yes button: show loving dialog
  yesBtn.addEventListener('click', () => {
    msgText.textContent = "I love you too! 💕";
    message.classList.remove('hidden');
    message.focus?.();
  });

  // Close dialog
  closeBtn.addEventListener('click', () => {
    message.classList.add('hidden');
  });

  // Make "No" button evade the cursor
  function moveNoButtonRandomly() {
    const bounds = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const padding = 12;

    // compute new position within container
    const maxX = bounds.width - btnRect.width - padding;
    const maxY = bounds.height - btnRect.height - padding;

    const x = Math.max(padding, Math.random() * maxX);
    const y = Math.max(padding, Math.random() * maxY);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  // Move when mouse gets close or on hover
  noBtn.addEventListener('mouseenter', moveNoButtonRandomly);

  // Also move if user tries to focus it with keyboard
  noBtn.addEventListener('focus', moveNoButtonRandomly);

  // Small accessibility: pressing Escape closes the message
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !message.classList.contains('hidden')) {
      message.classList.add('hidden');
    }
  });

  // Prevent the No button from being clicked easily
  noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // playful fallback: show a cute tooltip message
    msgText.textContent = "Oops — try again? 💘";
    message.classList.remove('hidden');
  });
});