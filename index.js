/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-shadow */

// Passo 1: capturar elementos
const list = document.querySelector('#my-ul');
const input = document.getElementById('my-input');
const button = document.querySelector('button');
const h2 = document.querySelector('#new-task-preview');

// Passo 2: criar eventos no DOM
button.onclick = function () {
  const newTaskName = input.value;

  const newLi = `
    <div>
      <li class="my-li-class">${newTaskName}</li>
      <button class="delete-button">Delete Task</button>
    </div>
  `;

  list.innerHTML += newLi;

  const deleteButtons = document.querySelectorAll('.delete-button');

  deleteButtons.forEach(function (button) {
    button.onclick = function (event) {
      const parent = event.target.parentElement;
      const grandFather = parent.parentElement;

      grandFather.removeChild(parent);
    };
  });

  input.value = '';
  h2.innerText = '';
};

input.oninput = function (event) {
  const myInputValue = event.target.value;

  h2.innerText = myInputValue;
};
