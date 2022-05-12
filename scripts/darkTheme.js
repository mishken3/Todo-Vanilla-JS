'use strict';

const changeTheme = () => {
  document.body.classList.toggle('body_dark');
  const tasks = document.querySelectorAll('.task-item');
  tasks.forEach((task) => task.classList.toggle('item-dark'));
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => button.classList.toggle('button-dark'));
};

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
  changeTheme();
});
