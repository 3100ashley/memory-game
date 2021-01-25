let imageArr = ["flower","fruit","rainbow","sun"];


$(".box").click(function(){
  alert(randImage);
});

$("#btn").click(function(){
  $("#btn").text("0");
  startOfGame();
});


function random(){
  let random = Math.floor(Math.random() * 4);
  return random;
}

function startOfGame(){
  let flowerCount = 0;
  let fruitCount = 0;
  let rainbowCount = 0;
  let sunCount = 0;


  for (let i = 1; i <= 8; i++){
    let rand = random();
    let randImage = imageArr[rand];
    let randImageSrc ="";


    if(randImage === "flower" && flowerCount < 2){
      flowerCount++
      rand = random();
      randImage = imageArr[rand];
      randImageSrc = "images/"+randImage+".svg"
      // if(flowerCount < 3){
      //   randImageSrc = ("images/" + imageArr[rand] + ".svg");
      // }
    }
    if(imageArr[rand] === "fruit" && fruitCount < 2){
      fruitCount++
      rand = random();
      randImage = imageArr[rand];
      randImageSrc = "images/"+randImage+".svg"
      // if(fruitCount < 3){
      //   randImageSrc = ("images/" + imageArr[rand] + ".svg");
      // }
    }
    if(imageArr[rand] === "rainbow" && rainbowCount < 2){
      rainbowCount++
      rand = random();
      randImage = imageArr[rand];
      randImageSrc = "images/"+randImage+".svg"
      // if(rainbowCount < 3){
      //   randImageSrc = ("images/" + imageArr[rand] + ".svg");
      // }
    }
    if(imageArr[rand] === "sun" && sunCount < 2){
      sunCount++
      rand = random();
      randImage = imageArr[rand];
      randImageSrc = "images/"+randImage+".svg"
      // if(sunCount < 3){
      //   randImageSrc = ("images/" + imageArr[rand] + ".svg");
      // }
    }



    $("." + i).attr("src", randImageSrc);




    // if(flowerCount >= 2){
    //   rand = random();
    //   randImageSrc = ("images/" + imageArr[rand] + ".svg");
    // }
    // else if(fruitCount >= 2){
    //   rand = random();
    //   randImageSrc = ("images/" + imageArr[rand] + ".svg");
    // }
    // else if(rainbowCount >= 2){
    //   rand = random();
    //   randImageSrc = ("images/" + imageArr[rand] + ".svg");
    // }
    // else if(sunCount >= 2){
    //   rand = random();
    //   randImageSrc = ("images/" + imageArr[rand] + ".svg");
    // }
    // else{
    //
    // }


  };

  console.log("flowerCount: " + flowerCount);
  console.log("fruitCount: " + fruitCount);
  console.log("rainbowCount: " + rainbowCount);
  console.log("sunCount: " + sunCount);
}
