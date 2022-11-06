function calculateScrollPercentage() {
  const tiefe = document.body.clientHeight - window.innerHeight;
  const scrollpercantage = (window.scrollY / tiefe) * 100;
  const scrollprocent = scrollpercantage + "%";
  return scrollprocent;
}

document.addEventListener("scroll", () => {
  if (calculateScrollPercentage() <= 20 && calculateScrollPercentage() >= 10) {
  }
});
