function hit(){
    var score = Number(document.getElementById("yourScore").innerHTML);
    
    if(score<=20){
        var arr = ["images\\1.png","images\\2.png","images\\3.png","images\\4.png","images\\5.png","images\\6.png","images\\7.png","images\\8.png","images\\9.png","images\\10.png","images\\11.jpg","images\\12.jpg","images\\13.jpg"];
        var num = Math.floor(Math.random() * 13);
        var img = document.createElement("img");
        img.src = arr[num];
        img.style.width = "200px";
        img.style.height = "200px";

        document.getElementById("yourScore").innerHTML = score+num+1;
        var presentScore =  score+num+1; 

        document.getElementById("your_cards").appendChild(img);
        
        if(Number(presentScore) > 20){
            document.getElementById("letsPlay").innerHTML = "burst!!!"
            var lose = Number(document.getElementById("lose").innerHTML);
            document.getElementById("lose").innerHTML = lose+1;
        }
    } 
}

function stand(){
    var score = Number(document.getElementById("botScore").innerHTML);
    var score1 = Number(document.getElementById("yourScore").innerHTML);
    
    if(score<=20 && score1<20){
        var arr = ["images\\1.png","images\\2.png","images\\3.png","images\\4.png","images\\5.png","images\\6.png","images\\7.png","images\\8.png","images\\9.png","images\\10.png","images\\11.jpg","images\\12.jpg","images\\13.jpg"];
        var num = Math.floor(Math.random() * 13);
        var img = document.createElement("img");
        img.src = arr[num];
        img.style.width = "200px";
        img.style.height = "200px";

        document.getElementById("botScore").innerHTML = score+num+1;
        var presentScore =  score+num+1; 

        document.getElementById("bot_cards").appendChild(img);
        
        if(Number(presentScore) > 20){
            document.getElementById("letsPlay").innerHTML = "Congratulations, You Win .."
            var win = Number(document.getElementById("win").innerHTML);
            document.getElementById("win").innerHTML = win+1;
        }
        else if(score1<presentScore && presentScore<=20){
            document.getElementById("letsPlay").innerHTML = "Upps....You Lose!!"
            var lose = Number(document.getElementById("lose").innerHTML);
            document.getElementById("lose").innerHTML = lose+1;
        }
        else{
            stand();
        }
    } 
}

function deal(){
    document.getElementById("letsPlay").innerHTML = "Lets Play";
    document.getElementById("yourScore").innerHTML = "0";
    document.getElementById("botScore").innerHTML = "0";
    
    var yourlist = document.getElementById("your_cards");
    var botlist = document.getElementById("bot_cards");

    while (yourlist.hasChildNodes()) {
      yourlist.removeChild(yourlist.childNodes[0]);
    }
    while (botlist.hasChildNodes()) {
      botlist.removeChild(botlist.childNodes[0]);
    }
}