$(document).ready(function(){
  createGrid();
  $(".grid").hover(function(){
    $(this).addClass("highlighted");
  })
});

function createGrid(){
  var gridDiv;
  for (var i = 0; i < 16; i++) {
    gridDiv = "<div class='grid' id='" + i + "'></div>"
    $(".wrapper").append(gridDiv);
  };
}
