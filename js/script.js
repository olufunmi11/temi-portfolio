function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

//Typewriter Effect

const texts ={
    "CLOUD ENGINEER";
}

let speed =100;
const textElements =document.querySelector(".typeWriter-text");

let textIndex =0;
let characterIndex =0;

function typeWrite(){
    if(characterIndex < text[textIndex].length){
        textElements.innerHTML += texts[textIndex].CharAT(characterIndex)
        characterIndex++;

        setTimeout(typeWriter,speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML =textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex =(textIndex + 1)% texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload =typeWriter