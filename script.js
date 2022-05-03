/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable editorconfig/editorconfig */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
window.onload = function () {
  const input = document.getElementById('texto-tarefa');
  const btnCriarTarefa = document.getElementById('criar-tarefa');
  const olElement = document.getElementById('lista-tarefas');
  const btnLimparListaTarefas = document.getElementById('apaga-tudo');
  const btnLimparTarefasFinalizadas = document.getElementById('remover-finalizados');
  const btnSalvarTarefas = document.getElementById('salvar-tarefas');
  const btnRemoverTarefaSelecionada = document.getElementById('remover-selecionado');

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

  btnLimparListaTarefas.addEventListener('click', function () {
    const listOfLi = document.querySelectorAll('li');
    for (let i = 0; i < listOfLi.length; i += 1) {
      listOfLi[i].remove();
    }
  });

  btnLimparTarefasFinalizadas.addEventListener('click', function () {
    const listOfLi = document.querySelectorAll('li');
    for (let i = 0; i < listOfLi.length; i += 1) {
      if (listOfLi[i].classList.contains('completed')) {
        listOfLi[i].remove();
      }
    }
  });

  btnSalvarTarefas.addEventListener('click', function () {
    const listOfLi = document.querySelectorAll('li');
    for (let i = 0; i < listOfLi.length; i += 1) {
      const obj = {
        text: listOfLi[i].textContent,
        /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT */
        class: !!listOfLi[i].classList.contains('completed'),
      };
      localStorage.setItem(i, JSON.stringify(obj));
    }
  });

  function checkLocalStorage() {
      const keys = Object.keys(localStorage);
      for (let key = 0; key < keys.length; key += 1) {
        const liElement = document.createElement('li');
        const taskString = localStorage.getItem(key);
        const taskObj = JSON.parse(taskString);
        if (taskString) {
          liElement.textContent = taskObj.text;
          if (taskObj.class === true) {
            liElement.classList.add('completed');
          }
          olElement.appendChild(liElement);
        }
    }
  }

  checkLocalStorage();

  btnRemoverTarefaSelecionada.addEventListener('click', function () {
    
  });
};
