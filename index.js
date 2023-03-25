var numberOfDrumBtn = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumBtn; i++) {

    //Detecting button press.

    document.querySelectorAll("button")[i].addEventListener("click", function () { //what to do when mouse click event occurs
    var buttonInnerHtml = this.innerHTML;//identifies the button that triggered the event
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    });

    //Detecting key press.

    document.addEventListener("keypress", function (event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    });
}

function makeSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();//it is used to play sound in javascript
            break;
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();//it is used to play sound in javascript
            break;
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();//it is used to play sound in javascript 
            break; 
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();//it is used to play sound in javascript 
            break;
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();//it is used to play sound in javascript 
            break;
        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();//it is used to play sound in javascript 
            break; 
        case 'l':
            var bass = new Audio("kick-bass.mp3");
            bass.play();
            break;
    } 

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}






//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();//it is used to play sound in javascript.