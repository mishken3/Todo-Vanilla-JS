'use strict';

import { tasks } from './scripts/data.js';
import { createTaskElement } from './scripts/createTask.js';
import { modalDeleteHandler } from './scripts/modalDelete.js';
import { changeTheme } from './scripts/darkTheme.js';

const taskList = document.querySelector('.tasks-list');
taskList.addEventListener('click', (event) => modalDeleteHandler(event));

tasks.forEach((task) => taskList.append(createTaskElement(task)));

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => changeTheme());

/**
 * ❤️
 * **/
