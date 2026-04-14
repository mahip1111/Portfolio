const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercent = scrollTop / docHeight;

  progressBar.style.transform = `scaleX(${scrollPercent})`;
});