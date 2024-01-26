const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Cathedral-in-Quito-Ecuador.png") {
    myImage.setAttribute("src", "images/Cathedral-in-Quito-Ecuador.png");
  } else {
    myImage.setAttribute("src", "images/Cathedral-in-Quito-Ecuador.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Quito is the best place on earth, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Quito is the best place on earth, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };

