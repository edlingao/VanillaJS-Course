import { ToggleSwitch, VeroToggleSwitch } from "./components/toggleSwitch.js";
import { Vero } from "./components/Vero.js";

const textArea = document.querySelector('.text-area');
const executionResponse = document.querySelector('.execution-response-content');

const button = Vero(`
  <button class="control-button">
    <h1>Boton</h1>
  </button>`, 
  { hola: 'mundo' },
  {'click': (e) =>{
    console.log(Object.getPrototypeOf(e.target))  
  }});

const myToggleSwitch = VeroToggleSwitch({state: false, onChange: (newState) => {
  const title = document.querySelector('.main-title');
  !newState ? 
    title.innerText = 'Write some JS code' :
    title.innerText = 'Write HML code';
  console.log(Object.getPrototypeOf(myToggleSwitch))
}});

function prventTabChange(event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    textArea.value += `  `;
  }
}

function executeCode(event) {
  if(event.keyCode == 13 && event.shiftKey)  {
    event.preventDefault();
    let response = '';
    const codeToEvaluate = textArea.value;
    try {
      if(!myToggleSwitch.state) {
        response = eval(codeToEvaluate);      
      } else {
        response = textArea.value;
      }
    } catch(err) {
      response = `<span class="error-boundry">${err}</span>`;
    }
    executionResponse.innerHTML = response;
  }
}

textArea.addEventListener('keypress', executeCode);
textArea.addEventListener('keydown', prventTabChange);

document.querySelector('.controls').appendChild(myToggleSwitch)
document.querySelector('.controls').appendChild(button)

