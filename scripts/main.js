const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Cathedral-in-Quito-Ecuador.png") {
    myImage.setAttribute("src", "images/Cathedral-in-Quito-Ecuador.png");
  } else {
    myImage.setAttribute("src", "images/Cathedral-in-Quito-Ecuador.png");
  }
};