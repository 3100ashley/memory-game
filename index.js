let imageArr = ["flower","fruit","rainbow","sun"];

$(".box").click(function(){
  alert(randImage);
});

$("#btn").click(function(){
  $("#btn").text("0");
  shuffle();
});

function shuffle(){
  for(let i = 1; i <= 8; i++){
    let randomPos = Math.floor(Math.random() * 9);
    $(".grid"+i).css("order",randomPos);
  }
}
