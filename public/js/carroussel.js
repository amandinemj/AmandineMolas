document.addEventListener("DOMContentLoaded", function(event) { 
    nbr=4;
    p=0;
    container=document.getElementById("carroussel_container");
    left=document.getElementById("left");
    right=document.getElementById("right");
    container.style.width=(800*nbr)+"px";
    for(i=1; i<=nbr; i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('./public/img/image"+i+".png')";
        container.appendChild(div);
    }
    afficherMasquer();

    right.onclick=function(){
        if(p>-nbr+1)
            p--;
        container.style.transform="translate("+(p*800)+"px)";
        container.style.transition="all 0.5s ease";
        afficherMasquer();
    }
    
    left.onclick=function(){
        if(p<0)
            p++;
        container.style.transform="translate("+(p*800)+"px)";
        container.style.transition="all 0.5s ease";
        afficherMasquer();
    }
    
  });

function afficherMasquer(){
    if (p===-nbr+1){
        right.style.visibility = "hidden";
    }
    else{
        right.style.visibility = "visible";
    }
    if (p===0){
        left.style.visibility = "hidden";
    }
    else{
        left.style.visibility = "visible";
    }
}