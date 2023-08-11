// const name = document.querySelector("");

//! ELEMENTS SELECTION
const pages = document.querySelectorAll(".page");
const page1 = document.querySelector("#main-1");
const page2 = document.querySelector("#main-2");
const page3 = document.querySelector("#main-3");
const startBtn = document.querySelector("#start-btn");
const locationBtn = document.querySelector("#access-location-btn");
const btnPrev = document.querySelectorAll(".btn-prev");
const SearchCityForm = document.querySelector("#search-city-form");
const SearchCityInput = document.querySelector("#search-city-input");

//! VARIABLES
let pageNum = 1;

//! NAVIGATE BETWEEN PAGES
function pageChange() {
  const currentPage = document.querySelector(`#main-${pageNum}`);
  pages.forEach((page) => page.classList.add("d-none"));
  currentPage.classList.remove("d-none");
}

startBtn.addEventListener("click", (e) => {
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

SearchCityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //! SEARCH CITY
  if (SearchCityInput.value !== "") {
    requestApi(SearchCityInput.value);
    pageNum++;
    pageChange();
  }
});

//! SEARCH CITY REQUEST API
const apiKey = `c31fe415291450443037b3e14668e91b`;
function requestApi(city) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(api).then((response) => console.log(response.json()));
}
