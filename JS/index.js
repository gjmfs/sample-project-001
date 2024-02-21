var x = document.getElementById("hide");
var image = document.getElementById("navimg")
var y = 1;
function navbar(){
    /*
    if (x.style.display ="none"){
        x.style.display ="flex";
    }else if(x.style.display="flex"){
        x.style.display="none";
    }*/
    if (y==1){
        show();
        y--
    }else if(y==0){
        hide()
        y++
    }
};
function hide(){
        x.style.display="none";
        return x;
};
function show(){
    x.style.display="flex";
    return x;        
};



