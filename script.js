function addUser(){
    player1name= document.getElementById("player1name").value;
    player2name= document.getElementById("player2name").value;
    localStorage.setItem("player1name",player1name);
    localStorage.setItem("player2name",player2name);
    window.location= "game.html";
}

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer= parseInt(number1)*parseInt(number2);
    question_number="<h4>" + number1 + "x" + number2 + "</h4>";
    input_box= "<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-success' onclick='check()'>Check</button>";
    row= question_number + input_box + check_button ;

    document.getElementById("output").innerHTML= row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");

player1_score=0;
player1_score=0;

document.getElementById("player1name").innerHTML= player1name + " : ";
document.getElementById("player2name").innerHTML= player2name + " : ";

document.getElementById("player1_score").innerHTML= player1_score ;
document.getElementById("player2_score").innerHTML= player2_score ;

document.getElementById("player_question").innerHTML= " Question Turn - " + player1name ;
document.getElementById("player_answer").innerHTML= " Answer Turn - " + player2name ;
