/**
 * Creates an HTML element based on the string given
 * @param { string } html 
 */
export function createElement(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  const element = div.firstElementChild;
  return element;
} 
