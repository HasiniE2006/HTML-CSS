function a(){
    var v1=document.getElementById("a").value.toUpperCase();
    var v2=document.getElementById("b").value.toUpperCase();
    var v3=document.getElementById("c").value.toUpperCase();
    var v4=document.getElementById("d").value;
    if(v1.length < 3 || v2.length < 1 || v3.length < 1 || v4.length < 4){
        alert("Please enter valid inputs.");
        return;
    }
    var part1 = v1.slice(0,3);
    var part2 = v2.charAt(0);
    var part3 = v3.charAt(0);
    var part4 = v4.slice(-4);
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var part5 = letters.charAt(Math.floor(Math.random() * letters.length));
    var panNumber = part1 + part2 + part3 + part4 + part5;
    document.getElementById("cardName").innerText = v1;
    document.getElementById("cardFather").innerText = v2;
    document.getElementById("cardMother").innerText = v3;
    document.getElementById("cardAadhar").innerText = v4;
    document.getElementById("cardPAN").innerText = panNumber;
    document.getElementById("panCard").style.display = "block";
}
