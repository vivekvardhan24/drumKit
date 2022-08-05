// for(var i = 0; i<document.querySelectorAll(".set button").length;i++){
//     document.querySelectorAll(".set button")[i].addEventListener("click", function () {
//         this.style.color = "white";
//         var clickedImage = getImagePath(this);
//         var audioLocation = getAudioPath(clickedImage);
//         playAudio(audioLocation);
//     })
// }
// function playAudio(audioLocation){
//     new Audio(audioLocation).play();
// }

// function getImagePath(element){
//     return window.getComputedStyle(element).getPropertyValue("background-image");
// }

// function getAudioPath(clickedImage){
//     var pathDetails = clickedImage.split("/");
//     return ("sounds/"+pathDetails[pathDetails.length-1]).replace(".png",".mp3").replace(")","").replace("\"","");
// }


for(var i = 0; i<document.querySelectorAll(".set button").length;i++){
    document.querySelectorAll(".set button")[i].addEventListener("click", function () {
        this.style.color = "white";
        playAudio(this.innerHTML);
    })
}

document.addEventListener("keydown", function(event){
    playAudio(event.key);
})


function playAudio(key){

    keyAnimation(key);
    switch (key){
        case 'w':
            new Audio('sounds/tom1.mp3').play();
            break;
        case 'a':
            new Audio('sounds/tom2.mp3').play();
            break; 
        case 's':
            new Audio('sounds/tom3.mp3').play();
            break;
        case 'd':
            new Audio('sounds/tom4.mp3').play();
            break; 
        case 'j':
                new Audio('sounds/crash.mp3').play();
                break;
        case 'k':
            new Audio('sounds/kick.mp3').play();
            break;
        case 'l':
            new Audio('sounds/snare.mp3').play();
            break;
    }
}

function keyAnimation(key){
    var clickedButton = document.querySelector("."+key);
    if(!key){
        clickedButton.classList.add("pressed");
    setTimeout(() => {
        clickedButton.classList.remove("pressed");        
    }, 100);

    }
}