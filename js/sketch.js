$(document).ready(function(){
  createGrid(4);
});

function randomColor() {
  var hex = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random()*16)]
  };
  return color;
};

function colorGrid(){
  $(".grid").hover(function(){
    $(this).css('background-color', randomColor);
  })
};

function createGrid(sketchSize){
  var sketchDiv;
  var gridSize = 800/sketchSize;
  var $sketchPad = $(".sketchPad")
  for (var i = 0; i < sketchSize * sketchSize; i++) {
    $sketchPad.append("<div class='grid'></div>");
  };
  $(".grid").css({"width" : gridSize + "px", "height": gridSize + "px"})
  colorGrid();
};

function reset() {
  $(".grid").remove(".grid");
  var userSize = prompt("Pick a grid width between 1 and 64");
  if (userSize >= 1 && userSize <= 64) {
    createGrid(userSize);
  } else {
    alert("You did not choose a number between 1 and 64")
    createGrid(4);
  }
};
