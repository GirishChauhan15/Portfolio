const themeDiv = document.querySelector(".theme");
const themeOne = document.querySelector(".theme_one");
const themeTwo = document.querySelector(".theme_two");

themeDiv.addEventListener("click", () => {
  if (themeOne.classList.value.split(" ")[2] === "active") {
    themeOne.classList.remove("active");
    themeOne.classList.add("hidden");
    themeTwo.classList.add("active");
    themeTwo.classList.remove("hidden");

    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    themeTwo.classList.remove("active");
    themeTwo.classList.add("hidden");
    themeOne.classList.add("active");
    themeOne.classList.remove("hidden");

    document.documentElement.setAttribute("data-theme", "light");
  }
});


