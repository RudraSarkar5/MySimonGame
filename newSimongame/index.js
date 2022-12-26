var colorbox=["red","green","yellow","blue"];
var gamePattern=[];
var userChoicePattern=[];
var level =0;
var started=true;
$(document).keypress(function(){
    if(started){
        $("#heading").text(" level "+level);
        startgame();
        started=false;
    }
})
$(".btn").click(function(){
    var  userChoice =$(this).attr("id");
     userChoicePattern.push(userChoice);
      $("#" + userChoice).fadeIn(100).fadeOut(100).fadeIn(100);
    checking(userChoicePattern.length-1);
})
function checking(currentValue){
    if(gamePattern[currentValue]===userChoicePattern[currentValue]){
        console.log("success");
        if(gamePattern.length===userChoicePattern.length){
            setTimeout(function(){
                startgame();
            },1000);
        }
    }
    else{
        console.log("you are wrong");
    }
}
function startgame(){
    userChoicePattern=[];
    level++;
    $("#heading").text(" level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var changeablecolor=colorbox[randomNumber];
    gamePattern.push(changeablecolor);

    
  $("#"+ changeablecolor).fadeIn(100).fadeOut(100).fadeIn(100);
}

