/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
window.onload = function () {
  const input = document.getElementById('texto-tarefa');
  const btnCriarTarefa = document.getElementById('criar-tarefa');
  const olElement = document.getElementById('lista-tarefas');

  btnCriarTarefa.addEventListener('click', function () {
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    olElement.appendChild(liElement);
    input.value = '';
  });
};
