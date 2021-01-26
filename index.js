let imageArr = ["flower","fruit","rainbow","sun"];

let firstClick = [];
let secondClick = [];

let startGame = false;
$("img").css("visibility","hidden");

$("#btn").click(function(){

    if(!startGame){
      $("#btn").text("0");
      shuffle();
      $("img").css("visibility","visible");
      startGame = true;
      setTimeout(function(){
        $("img").css("visibility","hidden");
      },3000);

    }
});

var count = 0;
$(".box").click(function(){
  count++;
  if(count <= 2){
    $("img", this).css("visibility", "visible");
    $("img", this).
  }
});



function shuffle(){
  for(let i = 1; i <= 8; i++){
    let randomPos = Math.floor(Math.random() * 9);
    $(".grid"+i).css("order",randomPos);
  }
}
