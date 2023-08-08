// const name = document.querySelector("");

//! ELEMENTS SELECTION
const pages = document.querySelectorAll(".page");
const page1 = document.querySelector("#main-1");
const page2 = document.querySelector("#main-2");
const page3 = document.querySelector("#main-3");
const startBtn = document.querySelector("#start-btn");
const locationBtn = document.querySelector("#access-location-btn");
const btnPrev = document.querySelectorAll(".btn-prev");

//! VARIABLES
let pageNum = 1;

function pageChange() {
  const currentPage = document.querySelector(`#main-${pageNum}`);
  pages.forEach((page) => page.classList.add("d-none"));
  currentPage.classList.remove("d-none");
}

startBtn.addEventListener("click", () => {
  pageNum++;
  pageChange();
});

locationBtn.addEventListener("click", () => {
  pageNum++;
  pageChange();
});

btnPrev.forEach((btn) =>
  btn.addEventListener("click", () => {
    pageNum--;
    pageChange();
  })
);
