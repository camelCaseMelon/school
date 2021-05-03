// Game idea originated on https://monsterico.github.io/, but code is original
var numList = [];
var score = 0;
var gameNum = 0;

// onEvent system of function creation designed by code.org
onEvent("proceed","click",function( ) {
  // getChecked function created by code.org
  if (getChecked("fourButton") == true) {
    newGame(4);
    // setScreen function part of code.org's user interface controls and designed by them
    setScreen("gameScreen");
  } else if (getChecked("sixButton") == true) {
    newGame(6);
    setScreen("gameScreen");
  } else {
    setProperty("warningLabel","hidden",false);
  }
});
onEvent("shape1","click",function( ) {
  gameCheck(1);
});
onEvent("shape2","click",function( ) {
  gameCheck(2);
});
onEvent("shape3","click",function( ) {
  gameCheck(3);
});
onEvent("shape4","click",function( ) {
  gameCheck(4);
});
onEvent("shape5","click",function( ) {
  gameCheck(5);
});
onEvent("shape6","click",function( ) {
  gameCheck(6);
});
onEvent("newGameButton","click",function( ) {
  hardGameReset();
  setScreen("startScreen");
});

function newGame(numShapes) {
  // i must start at 1 to allow usage of the IDs of the shapes (no shape0)
  for (var i = 1; i < numShapes + 1; i++) {
    // setProperty function part of code.org's user interface controls and designed by them
    setProperty("shape" + i,"hidden",false);
    gameNum++;
  }
  // randomNumber and appendItem functions provided by code.org -- I did not make them
  appendItem(numList,randomNumber(1,numShapes));
  for (var j = 1; j < numShapes; j = numList.length) {
    var add = true;
    var tempNum = randomNumber(1,numShapes);
    for (var k = 0; k < numShapes; k++) {
      if (numList[k] == tempNum) {
        add = false;
      }
    }
    if (add == true) {
      appendItem(numList,tempNum);
    }
  }
}
function gameCheck(clicked) {
  if (clicked == numList[score]) {
    score++;
    setProperty("shape" + clicked, "background-color", "rgb(241, 229, 217)");
  } else {
    softGameReset();
  }
  if (score == gameNum) {
    setScreen("finishScreen");
  }
}
function softGameReset() {
  for (var i = 1; i < gameNum + 1; i++) {
    setProperty("shape" + i,"background-color","rgb(228, 103, 0)");
    score = 0;
  }
}
function hardGameReset() {
  softGameReset();
  setProperty("fourButton","checked",false);
  setProperty("sixButton","checked",false);
  setProperty("warningLabel","hidden",true);
  numList = [];
  gameNum = 0;
  for (var i = 1; i < 7; i++) {
    setProperty("shape" + i,"hidden",true);
  }
}