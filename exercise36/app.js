const colorEl = document.querySelector(".colorEl");
const previewEl = document.querySelector(".preview");
const historyEl = document.querySelector(".historyEl");
const clearBtn = document.querySelector(".clearBtn");
// events
colorEl.addEventListener("input", function () {
  const color = colorEl.value;
  previewEl.style.backgroundColor = `${color}`;
  addHistory(color);
  console.log(color);
});

// function add history

function addHistory(color) {
  const newLi = document.createElement("li");

  historyEl.append(newLi);

  newLi.textContent = `${color}`;
  newLi.style.color = `${color}`;
}

clearBtn.addEventListener("click", function () {
  historyEl.innerHTML = "";
});
