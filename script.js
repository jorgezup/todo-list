/* eslint-disable max-lines-per-function */
/* eslint-disable editorconfig/editorconfig */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
window.onload = function () {
  const input = document.getElementById('texto-tarefa');
  const btnCriarTarefa = document.getElementById('criar-tarefa');
  const olElement = document.getElementById('lista-tarefas');
  
  function changeBackgroundColor(e) {
    const listOfLi = document.querySelectorAll('li');
    for (let i = 0; i < listOfLi.length; i += 1) {
      if (listOfLi[i].style.backgroundColor === 'rgb(128, 128, 128)') {
        listOfLi[i].style.backgroundColor = 'rgb(255,255,255)';
      }
    }
    e.style.backgroundColor = 'rgb(128, 128, 128)';
  }

  function completeTask(e) {
    e.classList.toggle('completed');
  }

  btnCriarTarefa.addEventListener('click', function () {
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    olElement.appendChild(liElement);
    input.value = '';
    liElement.addEventListener('click', function () {
      changeBackgroundColor(liElement);
    });
    liElement.addEventListener('dblclick', function () {
      completeTask(liElement);
    });
  });

};
