const form = document.querySelector("form");
const button = document.querySelector(".btn");
const cardOne = document.querySelector(".card-1");
const cardTwo = document.querySelector(".card-2");
// console.log('done');
form.addEventListener("submit", (e) => {
  e.preventDefault();

  cardTwo.classList.remove("hide");
  cardOne.style.display = "none";
  console.log("done");
});

button.addEventListener("click", (e) => {
  cardTwo.classList.add("hide");
  cardOne.style.display = "flex";
});
