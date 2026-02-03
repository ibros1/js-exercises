const items = document.querySelector(".items");

function addItem() {
  const newItem = document.createElement("li");
  newItem.textContent = "new el";

  items.appendChild(newItem);
}

function removeItem() {
  if (items.lastChild) {
    items.removeChild(items.lastChild);
  } else {
    alert("No items found!");
  }
}
