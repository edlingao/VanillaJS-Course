import { createElement } from "../utils/createElement.js"

/**
 * Creates a custom ToggleSwitch Element
 * @param { Object } props = { }
 * @param { Array } events = [ {'click': () => void } ]
 * @returns HTMLElement
 */
export function Vero( html, props = {}, events ) {

  const element = createElement(html);
  Object.keys(props).forEach( propName => {
    const elementProperties = Object.getPrototypeOf(element)
    elementProperties[propName] = props[propName];
  })
  Object.keys(events).forEach((eventName) => {
    element.addEventListener(eventName, (e) => {
      e.stopPropagation();
      const event = events[eventName];
      if(e.target !== e.currentTarget) {
        event({...e, target: e.target.parentElement})
      } else {
        event(e)
      }
    }, false);
  });

  return element;
}