player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1score = 0;
player2score = 0;

document.getElementById("p1n").innerHTML = player1 + " : ";
document.getElementById("p2n").innerHTML = player2 + " : ";

document.getElementById("p1s").innerHTML = player1score;
document.getElementById("p2s").innerHTML = player2score;

document.getElementById("pq").innerHTML = "Question turn = " + player1;
document.getElementById("pa").innerHTML = "Answer turn = " + player2;

function send() {
    getword = document.getElementById("word").value;

    word = getword.toLowerCase();

    charat1 = word.charAt(1);
    charat01 = Math.floor(word.lengh / 2);
    charat2 = word.charAt(charat01);
    charat23 = word.length - 1;
    charat3 = word.charAt(charat23);

    rc1 = word.replace(charat1, "_");
    rc2 = rc1.replace(charat2, "_");
    rc3 = rc2.replace(charat3, "_");

    qw = "<h4 id='display'>Q. " + rc3 + "</h4>";
    ib = "<br>answer: <input type='text' id='answer'>";
    cb = "<br><button class='btn btn-info' onclick='check()'>check</button>";
    row = qw + ib + cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

qt = "player1";
at = "player2";

function check() {
    ag = document.getElementById("answer").value;
    answer = ag.toLowerCase();
    if (answer == word) {
        if (at == "player1") {
            player1score++;
            document.getElementById("p1s").innerHTML = player1score;
        }
        if (at == "player2") {
            player2score++;
            document.getElementById("p2s").innerHTML = player2score;
        }
    }
    if (qt == "player1") {
        qt = "player2";
        document.getElementById("pq").innerHTML = "Question turn = " + player2;;
    }
    else{
        qt = "player1";
        document.getElementById("pq").innerHTML = "Question turn = " + player1;;
    }
    if (at == "player1") {
        at = "player2";
        document.getElementById("pa").innerHTML = "Answer turn = " + player2;;
    }
    else{
        at = "player1";
        document.getElementById("pa").innerHTML = "Answer turn = " + player1;;
    }
    document.getElementById("output").innerHTML="";
}
