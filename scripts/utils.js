import { tasks } from './data.js';

const isUniqTask = (newTaskText) =>
  tasks.every(({ text }) => newTaskText !== text);

export { isUniqTask };
