var playing = false;
var score;
var action;
var timevariable;
var correctAnswer;
var wrongAnswer;
//if we click on start/reset 
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if(playing == true){
        location.reload();
    }else{ //if we are not playing
        //change mode to playing
        playing= true;
        //set score to 0
         score = 0;

    document.getElementById("scorevalue").innerHTML = score;
    //show countdown box
    document.getElementById("timeremaining").style.display ="block";
    show("timeremaining")
    timeremaining = 60;
    document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    
    //hide game over box
    hide("gameover");
    //change button to reset
    document.getElementById("startreset").innerHTML = "Reset Game";
    
    //start countdown
    startCountdown();

    //generate a new Q&A
    generateQA();
    }
}

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
        if(playing == true){
            if(this.innerHTML == correctAnswer){
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000);
    
                //generate new question
                generateQA();
            }else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000);
            }
        }
    }
}
//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score by 1
                //show corrrect box for 1 sec
                //generate new Q&A 
            //no
                //show try again for 1 sec
//functions

//function start counter
function startCountdown(){
    action= setInterval(function(){
        timeremaining -=1;
document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){
            stopCountdown();
            show("gameover")
document.getElementById("gameover").innerHTML = 
"<p> Game over!</p><p> Your score is " +score+".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML =" Start Game";
}
    },1000);
}

//stop counter
function stopCountdown(){
    clearInterval(action);
}
//hide an element
function hide(Id){
    document.getElementById(Id).style.display="none";
}
//show an element
function show(Id){
    document.getElementById(Id).style.display="block";
}
function generateQA(){
    var x =1+ Math.round(20*Math.random());
    var y =1+ Math.round(20*Math.random());
    correctAnswer = x*y;

    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    //fill one box with right answer
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    //fill other box with wrong answer
    for(i=1; i<5; i++){
        if(i != correctPosition){
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
            }while(answers.indexOf(wrongAnswer)>-1)
                 
            
                document.getElementById("box"+i).innerHTML = wrongAnswer;
                    answers.push(wrongAnswer);
        }
    }

}