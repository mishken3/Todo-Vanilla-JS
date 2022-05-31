'use strict';

import * as Utils from './utils.js';
import { tasks } from './data.js';
import { addTaskToLocalStorage } from './localTasks.js';

const createTaskElement = (task) => {
	const taskItem = document.createElement('div');
	taskItem.classList.add('task-item');
	taskItem.dataset.taskId = task.id;

	const taskItemHTML = `
    <div class="task-item__main-container">
      <div class="task-item__main-content">
        <form class="checkbox-form">
          <input class="checkbox-form__checkbox" type="checkbox" id="task-${task.id}">
          <label for="task-${task.id}"></label>
        </form>
        <span class="task-item__text">
          ${task.text}
        </span>
      </div>
      <button class="task-item__delete-button default-button delete-button" data-delete-task-id=${task.id}>
        Удалить
      </button>
    </div>
  `;

	taskItem.insertAdjacentHTML('afterbegin', taskItemHTML);
	return taskItem;
};

const createTask = (text, id = Date.now(), completed = false) => {
	const stringId = String(id);
	const task = { id: stringId, completed, text };
	addTaskToLocalStorage(task);

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

	event.preventDefault();
	const inputText = event.target.taskName.value;

	if (!Utils.isUniqTask(inputText)) {
		const errBlock = createErrorMessage('Задача с таким названием уже есть.');
		newTaskForm.append(errBlock);
	} else if (inputText === '') {
		const errBlock = createErrorMessage('Название не должно быть пустым.');
		newTaskForm.append(errBlock);
	} else {
		const newTask = createTask(inputText);
		tasks.push(newTask);
		const newTaskElement = createTaskElement(newTask);

		const taskList = document.querySelector('.tasks-list');
		taskList.append(newTaskElement);

		event.target.taskName.value = null;
	}
});

export { createTaskElement };
