import styles from './styles.css';


function component(){
  const element = document.createElement('div');

  element.innerHTML = 'Hello there';
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());
