const addTaskToLocalStorage = (task) => {
	const localStorage = window.localStorage;

	const localTasks = localStorage.getItem('tasks');
	const tasks = localTasks ? JSON.parse(localTasks) : [];
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
};

const deleteTaskFromLocalStorage = (taskId) => {
	const localStorage = window.localStorage;
	const tasks = JSON.parse(localStorage.getItem('tasks'));
	const deleteTaskIdIndexInTasks = tasks.findIndex((task) => task.id === taskId);

	deleteTaskIdIndexInTasks >= 0
		? tasks.splice(deleteTaskIdIndexInTasks, 1)
		: tasks.splice(deleteTaskIdIndexInTasks, deleteTaskIdIndexInTasks);

	localStorage.setItem('tasks', JSON.stringify(tasks));
};

export { addTaskToLocalStorage, deleteTaskFromLocalStorage };
