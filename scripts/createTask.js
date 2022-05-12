'use strict';

const createTaskElement = (task) => {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  taskItem.dataset.taskId = task.id;

  const taskItemContainer = document.createElement('div');
  taskItemContainer.classList.add('task-item__main-container');

  const taskItemContent = document.createElement('div');
  taskItemContent.classList.add('task-item__main-content');

  const checkboxForm = document.createElement('form');
  checkboxForm.classList.add('checkbox-form');

  const inputFrom = document.createElement('input');
  inputFrom.classList.add('checkbox-form__checkbox');
  inputFrom.type = 'checkbox';
  inputFrom.id = `task-${task.id}`;

  const labelForm = document.createElement('label');
  labelForm.htmlFor = `task-${task.id}`;
  checkboxForm.append(inputFrom, labelForm);

  const taskItemText = document.createElement('span');
  taskItemText.classList.add('task-item__text');
  taskItemText.textContent = task.text;

  taskItemContent.append(checkboxForm, taskItemText);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add(
    'task-item__delete-button',
    'default-button',
    'delete-button'
  );
  deleteButton.dataset.deleteTaskId = task.id;
  deleteButton.textContent = 'Удалить';

  taskItemContainer.append(taskItemContent, deleteButton);
  taskItem.append(taskItemContainer);

  return taskItem;
};

const createTask = (text, id = Date.now(), completed = false) => {
  const stringId = String(id);
  const task = { id: stringId, completed, text };
  return task;
};

const createErrorMessage = (errText) => {
  const errorSpan = document.createElement('span');
  errorSpan.classList.add('error-message-block');
  errorSpan.textContent = errText;
  return errorSpan;
};

const newTaskForm = document.querySelector('.create-task-block');
newTaskForm.addEventListener('submit', (event) => {
  const errBlock = document.querySelector('.error-message-block');
  if (errBlock !== null) errBlock.remove();

  const isUniqTask = (newTaskText) =>
    tasks.every(({ text }) => newTaskText !== text);

  event.preventDefault();
  const inputText = event.target.taskName.value;

  if (!isUniqTask(inputText)) {
    const errBlock = createErrorMessage('Задача с таким названием уже есть.');
    newTaskForm.append(errBlock);
  } else if (inputText === '') {
    const errBlock = createErrorMessage('Название не должно быть пустым.');
    newTaskForm.append(errBlock);
  } else {
    const newTask = createTask(inputText);
    tasks.push(newTask);
    const newTaskElement = createTaskElement(newTask);
    taskList.append(newTaskElement);
  }
});

tasks.forEach((task) => taskList.append(createTaskElement(task)));
