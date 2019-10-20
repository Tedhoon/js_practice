function apple(){

    var str = "";
    str = "apple";
    
    document.getElementById('fruit').innerHTML ="<img src = 'img/apple.png' width =80%>"  ;
    document.getElementById('hello').innerHTML = str;
}


function banana(){

    var str = "";
    str = "banana";
    
    document.getElementById('fruit').innerHTML ="<img src = 'img/banana.png' width =80%>"  ;
    document.getElementById('hello').innerHTML = str;
}





function strawberry(){
    var str = "";
    str = "strawberry";
    
    document.getElementById('fruit').innerHTML ="<img src = 'img/strawberry.png' width =80%>"  ;
    document.getElementById('hello').innerHTML = str;


}

function watermelon(){
    var str = "";
    str = "watermelon";
    
    document.getElementById('fruit').innerHTML ="<img src = 'img/watermelon.png' width =80%>"  ;
    document.getElementById('hello').innerHTML = str;


}

function reset(){
    document.getElementById('fruit').innerHTML ="";
    document.getElementById('hello').innerHTML ="";

    
}

function ans(){
    if(document.getElementById('fruit_name').value == document.getElementById('textbox').value ){
        alert("정답입니다")


        // var fruit = "";
        // fruit = "document.getElementById('fruit_name').value";
        // document.getElementById('fruit').innerHTML =<img src = 'img/+ fruit +.png' width =80%>;
        // document.getElementById('hello').innerHTML = fruit;
        
    }
    


    else{
        alert("오답입니다")
        document.getElementById('textbox').value = "";
        // myform.textbox.focus();
        
    }


}

