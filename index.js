//Issues: none

let boxClass = [];
let imgSources = [];

let startGame = false;
let ableToClick = true;
let score = 0;
var count = 0;
$("img").css("visibility","hidden");

$("#btn").click(function(){

    if(!startGame){
      count = 0;
      score = 0;
      boxClass = [];
      imgSources = [];
      $("#btn").text(score);
      shuffle();
      $("img").css("visibility","visible");
      startGame = true;
      setTimeout(function(){
        $("img").css("visibility","hidden");
        boxClick();

      },3000);
  }
});


  function boxClick(){
    if(ableToClick){
      $(".box").click(function(){
        var imgSrc = $("img", this).attr("src")
        count++;
        console.log(this);
        if(count <= 2){
          $("img", this).css("visibility", "visible");
          imgSources.push(imgSrc);
          boxClass.push(this);
        }
        if(count === 2){
        console.log("clickCount check: " + count);
        solutionCheck(imgSources, this);
        }
      });
    }
  }



  function solutionCheck(array, boxObject){
    let length = array.length;
    if(array[length - 1] === array[length - 2] && boxClass[length - 1] != boxClass[length - 2]){
      console.log("correct");
      count = 0;
      score++;
      console.log("score: " + score);
      $("#btn").text(score);
      if(score >= 4){
        //start=true;
        clickAble();
        $("#btn").text("Winner!! click me to play again");
        $("#btn").click(function(){
          document.location.reload(true)
        });

      }
    }
    else {
      console.log("incorrect");

      setTimeout(function(){
        let bCLength = boxClass.length;
        count = 0;
        $("img", boxClass[bCLength - 1]).css("visibility", "hidden")
        $("img", boxClass[bCLength - 2]).css("visibility", "hidden")
      }, 3000);
    }
  }


function clickAble(){
  ableToClick = false;
}

function shuffle(){
  for(let i = 1; i <= 8; i++){
    let randomPos = Math.floor(Math.random() * 9);
    $(".grid"+i).css("order",randomPos);
  }
}
