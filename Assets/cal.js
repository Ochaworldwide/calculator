function clicker(a){
 var displayer=document.getElementById("disp");
 displayer.value+=a;


  
}
function doublez(){
    var displayer=document.getElementById("disp");
    displayer.value+="00";
    // displayer.innerText+="*"
    
}

function star(){
    var displayer=document.getElementById("disp");
    displayer.value+="*";
    // displayer.innerText+="*"
    
}
function sub(){
    var displayer=document.getElementById("disp");
    displayer.value+="-";
    // displayer.innerText+="-"
    
}
function add(){
    var displayer=document.getElementById("disp");
    displayer.value+="+";
    // displayer.innerText+="+"
    
}
function equal(){
    var displayer=document.getElementById("disp");
    displayer.value+= "  =   " + eval(displayer.value);
    // displayer.innerText=eval()
    
    
}
function dot(){
    var displayer=document.getElementById("disp");
    displayer.value+=".";
    // displayer.innerText+="."
    
}
function mod(){
    var displayer=document.getElementById("disp");
    displayer.value+="%";
    // displayer.innerText+="."
    
}
function divide(){
    var displayer=document.getElementById("disp");
    displayer.value+="/";
    // displayer.innerText+="."
    
}
function sqroot(){
    var displayer=document.getElementById("disp");
    displayer.value+="^";
    // displayer.innerText+="."
    
}
function clearer(){
    var displayer=document.getElementById("disp").value="";
    // displayer.value="";
    // displayer.innerText+="."
    
}