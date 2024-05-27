function confetti() {
  const root = document.querySelector(':root');
  const vpWidth = root.getClientRects()[0].width;
  const vpHeight = root.getClientRects()[0].height;
  const confettiList = document.querySelectorAll('.Confetti');

  let lastX = 0;
  let lastY = 0;
  let ticking = false;

  const onMove = e => {
    lastX = e.clientX;
    lastY = e.clientY;
    requestTick();
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };

  const update = () => {
    const x = lastX / vpWidth * 2 - 1;
    const y = lastY / vpHeight * 2 - 1;

    root.style.setProperty('--x', x);
    root.style.setProperty('--y', y);

    ticking = false;
  };

  root.addEventListener('mousemove', onMove, { capture: false, passive: true });
}

confetti();