const BtnRegistration = document.querySelector(".download");
const BtnCash = document.querySelector(".select");
const registration = document.querySelector(".registration");
const closeBtnRegistr = document.querySelector(".registration .container .arrow");
const container = document.querySelector('.container');

BtnRegistration.addEventListener("click", (e) => {
  registration.classList.add("active");
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";
  closeBtnRegistr.addEventListener("click", (e) => {
    registration.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

const title = document.querySelector(".registration .title");
const toCome = title.querySelectorAll(".title .to_come");

title.addEventListener("click", (e) => {
  let target = e.target;
  if (target.closest(".to_come")) {
    title.classList.toggle("revers");
    toCome.forEach((tc) => {
      tc.classList.remove("active");
    });
    target.classList.add("active");
  }
});
