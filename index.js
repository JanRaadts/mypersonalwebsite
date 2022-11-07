const webdesign1 = document.querySelector('[data-js="section--BG1"]');
const webdesign2 = document.querySelector('[data-js="section--BG2"]');
const webdesign3 = document.querySelector('[data-js="section--BG3"]');
const webdesign4 = document.querySelector('[data-js="section--BG4"]');
const webdesign5 = document.querySelector('[data-js="section--BG5"]');
const webdesign6 = document.querySelector('[data-js="section--BG6"]');

function calculateScrollPercentage() {
  const tiefe = document.body.clientHeight - window.innerHeight;
  const scrollpercantage = (window.scrollY / tiefe) * 100;
  const scrollprocent = scrollpercantage;
  return scrollprocent;
}

document.addEventListener("scroll", () => {
  // console.log(calculateScrollPercentage());
  if (calculateScrollPercentage() <= 20) {
    webdesign1.classList.add("dark_focus");
    webdesign2.classList.remove("dark_focus");
    webdesign3.classList.remove("dark_focus");
    webdesign4.classList.remove("dark_focus");
    webdesign5.classList.remove("dark_focus");
    webdesign6.classList.remove("dark_focus");
  } else if (calculateScrollPercentage() <= 35) {
    webdesign1.classList.remove("dark_focus");
    webdesign2.classList.add("dark_focus");
    webdesign3.classList.remove("dark_focus");
    webdesign4.classList.remove("dark_focus");
    webdesign5.classList.remove("dark_focus");
    webdesign6.classList.remove("dark_focus");
  } else if (calculateScrollPercentage() <= 55) {
    webdesign1.classList.remove("dark_focus");
    webdesign2.classList.remove("dark_focus");
    webdesign3.classList.add("dark_focus");
    webdesign4.classList.remove("dark_focus");
    webdesign5.classList.remove("dark_focus");
    webdesign6.classList.remove("dark_focus");
  } else if (calculateScrollPercentage() <= 75) {
    webdesign1.classList.remove("dark_focus");
    webdesign2.classList.remove("dark_focus");
    webdesign3.classList.remove("dark_focus");
    webdesign4.classList.add("dark_focus");
    webdesign5.classList.remove("dark_focus");
    webdesign6.classList.remove("dark_focus");
  } else if (calculateScrollPercentage() <= 90) {
    webdesign1.classList.remove("dark_focus");
    webdesign2.classList.remove("dark_focus");
    webdesign3.classList.remove("dark_focus");
    webdesign4.classList.remove("dark_focus");
    webdesign5.classList.add("dark_focus");
    webdesign6.classList.remove("dark_focus");
  } else if (calculateScrollPercentage() <= 100) {
    webdesign1.classList.remove("dark_focus");
    webdesign2.classList.remove("dark_focus");
    webdesign3.classList.remove("dark_focus");
    webdesign4.classList.remove("dark_focus");
    webdesign5.classList.remove("dark_focus");
    webdesign6.classList.add("dark_focus");
  }
});

// 20 -45 event ... 45-65 photo .... 65-85 molekuel
