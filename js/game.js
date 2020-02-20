let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".squares");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let h1 = document.getElementById("info");
let message = document.querySelector("#notification");

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  //add color to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listener
  squares[i].addEventListener("click", function() {
    //get the clicked color
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      message.textContent = "Correct!!";
      colorChange(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again !!";
    }
  });
}
function colorChange(colors) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors;
  }
}
function pickColor() {
  var randomNumber = Math.floor(Math.random() * colors.length);
  return colors[randomNumber];
}
function generateRandomColors(number) {
  //make array
  let colorArray = [];
  //repeat number times
  for (let i = 0; i < number; i++) {
    //get random number and push to the array
    colorArray.push(randomColor());
  }
  // return array
  return colorArray;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
// var s = "The sunset sets at twelve o' clock.";
// for (var i = 0; i < s.lenghth; i++) {
//   console.log(s[i]);
// }
// console.log(s.lenghth);
