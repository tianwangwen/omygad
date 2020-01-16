import img from './img.png';

function component() {
  console.log(img);
  var element = document.createElement('img');
  element.src = img;
  return element;
}

document.body.appendChild(component());