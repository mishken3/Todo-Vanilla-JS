'use strict';

const changeTheme = () => {
  /** TODO: не критично, но если элеменетов будет в разы больше, то код станет очень тяжелым
   * #1 - получить все элементы
   * #2 - каждый элемент пройти в цикле и оттоглить класс
   *
   * есть подход, когда класс темы указывается только у <body> или у корневого элеменета
   * и классы .dark-theme/.light-theme тогляться только у него**/
  document.body.classList.toggle('body_dark');
  const tasks = document.querySelectorAll('.task-item');
  tasks.forEach((task) => task.classList.toggle('item-dark'));
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => button.classList.toggle('button-dark'));
};

export { changeTheme };
