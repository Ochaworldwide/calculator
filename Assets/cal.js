function clicker(a){
 var displayer=document.getElementById("disp");
 if(displayer.value.includes("=")){
    displayer.value=a;
 }
 else{
    displayer.value+=a;
 }
 
}

function equal(){
    var displayer=document.getElementById("disp");
    displayer.value+= "  =   " + eval(displayer.value);
       
}

function clearer(){
    var displayer=document.getElementById("disp").value="";
       
}

function Off(){
    if(document.getElementById("disp").style.visibility=="hidden"){
        document.getElementById("disp").style.visibility="visible";
        document.getElementById("disp").value="";
    }
    else{
        document.getElementById("disp").style.visibility="hidden";
        document.getElementById("disp").value="";
    }
    
}

function switchTheme() {
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "Assets/light.css") {
      theme.href = "Assets/dark.css";
    } else {
      theme.href = "Assets/light.css";
    }
  }