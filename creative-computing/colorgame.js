var numSquares = 6;
var colors = generateRandomColors(numSquares);
//모든 사각형 선택 
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  reset()
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
});


colorDisplay.textContent = pickedColor;
resetButton.addEventListener("click", function() {
  reset()
});


function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
}



for(var i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];
  //애드 클릭 리스너
  squares[i].addEventListener("click", function(){
    //클릭된 사각형 색을 빼옴
    var clickedColor = this.style.background;
    // pickedColor 랑 색 비교
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Great! Try the next level :)";
      resetButton.textContent = "Play again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
     } else {
      this.style.background = "white"
      messageDisplay.textContent = "Try again";
    }
  });
}

function changeColors(color) {
//모든 사각형을 loop
for(var i = 0; i < squares.length; i++){
  squares[i].style.background = color;
}
//각자의 색을 일정히 통일 
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = []
  for(var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b +")";
}








