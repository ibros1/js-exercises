const changeImage = () => {
  const image = document.querySelector(".image");
  const imageUrl = prompt("Please enter image url");
  const borderColor = prompt("Please enter a borderColor");
  const borderWidth = prompt("Please enter a border width");
  const widthImage = prompt("Please enter a image width (in pixels)");
  const heightImage = prompt("Please enter a height image (in pixels)");
  const borderRaduis = prompt("please enter a border raduis ");

  image.setAttribute("src", imageUrl);
  image.setAttribute("style", borderColor);
  image.style.border = `${borderWidth}px solid ${borderColor}`;
  image.style.width = ` ${widthImage}`;
  image.style.height = `${heightImage}`;
  image.style.borderRaduis = `${borderRaduis}`;
};
