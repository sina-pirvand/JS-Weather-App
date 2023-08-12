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

  if (SearchCityInput.value !== "") {
    //*Search city
    requestApi(SearchCityInput.value);
    //* Change page
    pageNum++;
    pageChange();
  }
});

//! SEARCH CITY REQUEST API
const apiKey = `c31fe415291450443037b3e14668e91b`;
function requestApi(city) {
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  //* first we return the api response by parsing it into a JS obj
  //* then weather details will be called with response as an argument
  fetch(api)
    .then((response) => response.json())
    .then((result) => weatherDetails(result));
}

function weatherDetails(info) {
  console.log(info);
}
