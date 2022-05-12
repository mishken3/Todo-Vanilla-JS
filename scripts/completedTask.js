'use strict';

taskList.addEventListener('change', (event) => {
  const status = event.target.checked;
  const taskItem = event.target.closest('.task-item');
  const taskItemText = taskItem.querySelector('.task-item__text');
  taskItemText.classList.toggle('completed');

  tasks.forEach((task) => {
    if (task.id === taskItem.dataset.taskId) {
      task.completed = status;
    }
  });
});
