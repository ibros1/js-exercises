const menuBarBtn = document.querySelector(".toggle-button");
const navBar = document.querySelector(".navbar");

// functions
const toggleMenuFn = () => {
  navBar.classList.toggle("active");
};

// events
menuBarBtn.addEventListener("click", toggleMenuFn);
