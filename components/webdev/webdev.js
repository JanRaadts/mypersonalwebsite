const changeOne = document.querySelector('[data-js="changeOne"]');
const changeTwo = document.querySelector('[data-js="changeTwo"]');
const changeThree = document.querySelector('[data-js="changeThree"]');

const productOne = document.querySelector('[data-js="productOne"]');
const productTwo = document.querySelector('[data-js="productTwo"]');
const productThree = document.querySelector('[data-js="productThree"]');

const pictureOne = document.querySelector('[data-p="pictureOne"]');
const pictureTwo = document.querySelector('[data-p="pictureTwo"]');
const pictureThree = document.querySelector('[data-p="pictureThree"]');

changeOne.addEventListener("click", () => {
  productThree.setAttribute("hidden", "");
  productTwo.setAttribute("hidden", "");
  productOne.removeAttribute("hidden", "");
  pictureOne.removeAttribute("hidden", "");
  pictureTwo.setAttribute("hidden", "");
  pictureThree.setAttribute("hidden", "");
});

changeTwo.addEventListener("click", () => {
  console.log("test2");
  productThree.setAttribute("hidden", "");
  productTwo.removeAttribute("hidden", "");
  productOne.setAttribute("hidden", "");
  pictureTwo.removeAttribute("hidden", "");
  pictureThree.setAttribute("hidden", "");
  pictureOne.setAttribute("hidden", "");
});

changeThree.addEventListener("click", () => {
  productThree.removeAttribute("hidden", "");
  productTwo.setAttribute("hidden", "");
  productOne.setAttribute("hidden", "");
  pictureThree.removeAttribute("hidden", "");
  pictureTwo.setAttribute("hidden", "");
  pictureOne.setAttribute("hidden", "");
});
