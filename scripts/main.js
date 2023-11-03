const myImage = document.querySelector("img");

myImage.onclick = function() {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/OIP.JPG") {
    myImage.setAttribute("src", "images/Dudet.JPG");
  } else {
    myImage.setAttribute("src", "images/OIP.JPG");
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
    myHeading.textContent = `Among us is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Amoung Us is cool, ${storedName}`;
}

myButton.onclick = function() {
  setUserName();
}