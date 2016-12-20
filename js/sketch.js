$(document).ready(function(){
  createGrid(4);
});

var paintColor = "black";

function randomColor() {
  var hex = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random()*16)]
  };
  return color;
};

function userColor() {
  paintColor = prompt("Choose a color");
  if (paintColor == "") {
    paintColor = "black"
  };
};

function createGrid(sketchSize){
  $(".grid").remove(".grid");
  var sketchDiv;
  var gridSize = 800/sketchSize;
  var $sketchPad = $(".sketchPad")
  for (var i = 0; i < sketchSize * sketchSize; i++) {
    $sketchPad.append("<div class='grid'></div>");
  };
  $(".grid").css({"width" : gridSize + "px", "height": gridSize + "px"})
  colorGrid();
};

function colorGrid(){
  $(".grid").mouseenter(function(){
    $(this).css("background-color", paintColor);
  });
};

function reset() {
  var userSize = prompt("Pick a grid width between 1 and 64");
  if (userSize >= 1 && userSize <= 64) {
    createGrid(userSize);
  } else {
    alert("You did not choose a number between 1 and 64")
    createGrid(4);
  }
};
