document.querySelector("button").addEventListener("click", handleClick);

let sayings = ["Stop", "I mean it", "Desist", "Stahp", "Go away!", "That's enough", "Seriously!?"]

// (evt) => alert("Changed behavior")
function handleClick(event){
    alert("Hey, don't click me")
    console.log(event)
    const boundary = document.createElement("li");
    boundary.textContent = sayings[Math.floor(Math.random() * sayings.length)]
    const list = document.querySelector("ol");
    list.appendChild(boundary)
}

const fontChangeButtons = document.querySelectorAll('button.font-changer')

// for       each button       in the list of buttons
for (const fontChangeButton of fontChangeButtons) {
    // give it it's own event listener
    fontChangeButton.addEventListener('click', (evt) => {
      
      // the button ID contains the font we want to change to
      document.querySelector('body').style.fontFamily = evt.target.id;
    });
  }
