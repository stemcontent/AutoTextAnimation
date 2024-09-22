const container = document.querySelector(".container");

const careers = ["Social Media Moderator", "Web Developer","Software Engineer"];

let careerIndex=0;

let charIndex =0;
updateText();
function updateText(){
  charIndex++;
  container.innerHTML = `
  <h1>I am a ${careers[careerIndex].slice(0,charIndex)}</h1>

  
 `;
  if(charIndex === careers[careerIndex].length){
    careerIndex++;
    charIndex=0;
  }

  if(careerIndex=== careers.length){
    careerIndex=0;
  }
 
 setTimeout(updateText,100);
}
