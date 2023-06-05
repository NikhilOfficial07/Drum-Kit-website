var numberOFdrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOFdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var innerhtml = this.innerHTML;
        makeSound(innerhtml);
        buttonAnimation(innerhtml);
    });
}
    document.addEventListener("keypress",function(event_which_buttonPressed){
        makeSound(event_which_buttonPressed.key);
        buttonAnimation(event_which_buttonPressed.key);
        
    });
function makeSound(key){
    switch(key){
            case "w":
            var tom1 =new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

            case "j":
            var tom5=new Audio("sounds/snare.mp3");
            tom5.play();
            break;

            case "k":
            var tom6=new Audio("sounds/crash.mp3");
            tom6.play();
            break;

            case "l":
            var tom7=new Audio("sounds/kick-bass.mp3");
            tom7.play();
            break;

    }
}

function buttonAnimation(key){
//   var currentButton =  document.querySelector("."+key);
document.querySelector("."+key).classList.add("pressed");

setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed")
},100);
}