import { createElement } from "../utils/createElement.js"
import { Vero } from "./Vero.js";

/**
 * Creates a custom ToggleSwitch Element
 * @param { props } prop = { state: boolean, onChange: (state) => void}
 * @returns HTMLElement
 */
export function ToggleSwitch( {state = false, onChange = () => {}} ) {
  
  const switchElement = createElement(`
    <div class="toggle-switch">
      <div class="ball ${state ? 'on' : 'off'}"></div>
    </div>
  `);

  Object.getPrototypeOf(switchElement).state = state;
  
  const onClick = (event) => {
    event.stopPropagation();
    switchElement.state = !switchElement.state;
    const switchState = switchElement.state;
    
    event.target.className = `toggle-switch ${switchState ? 'on' : 'off'}`
    event.target.querySelector('.ball').className = `ball ${switchState ? 'on' : 'off'}`
    onChange && switchElement.state != null && onChange(switchState);
  }

  switchElement.addEventListener('click', onClick);

  return switchElement;
}

/**
 * Creates a custom ToggleSwitch Element
 * @param { props } prop = { state: boolean, onChange: (state) => void}
 * @returns HTMLElement
 */
 export function VeroToggleSwitch( {state = false, onChange = () => {}} ) {
  
  const onClick = (event) => {
    event.stopPropagation();
    event.target.state = !event.target.state;
    const switchElement = event.target;
    const {state}  = switchElement; 
    const switchState = state;

    event.target.className = `toggle-switch ${switchState ? 'on' : 'off'}`
    event.target.querySelector('.ball').className = `ball ${switchState ? 'on' : 'off'}`
    onChange && state != null && onChange(switchState);
  }

  return Vero(`
    <div class="toggle-switch ${state ? 'on' : 'off'}">
      <div class="ball ${state ? 'on' : 'off'}"></div>
    </div>`, 
    { state, key: VeroToggleSwitch.name },
    { 'click': onClick }
  )
}