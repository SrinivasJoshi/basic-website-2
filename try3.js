var cool=setInterval(myfunc,2000);

var heading=document.getElementById("selected");
console.log(heading.innerHTML)
function myfunc(){
    if(heading.innerHTML==="couturiers")
    {
        heading.innerHTML="suit makers";
        heading.style.left="40%";
    }
    else if(heading.innerHTML==="suit makers")
    {
        heading.innerHTML="needle-workers";
        heading.style.left="35%";
    }
    else{
        heading.innerHTML="couturiers";
        heading.style.left="40%";
    }
}
