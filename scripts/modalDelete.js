'use strict';

const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay', 'modal-overlay_hidden');

const modalDelete = document.createElement('div');
modalDelete.classList.add('delete-modal');

const deleteTitle = document.createElement('h3');
deleteTitle.classList.add('delete-modal__question');
deleteTitle.textContent = 'Вы действительно хотите удалить эту задачу?';

const deleteModalButtons = document.createElement('div');
deleteModalButtons.classList.add('delete-modal__buttons');
const cancelBtn_Modal = document.createElement('button');
cancelBtn_Modal.classList.add(
  'delete-modal__button',
  'delete-modal__cancel-button'
);
cancelBtn_Modal.textContent = 'Отмена';
const deleteBtn_Modal = document.createElement('button');
deleteBtn_Modal.classList.add(
  'delete-modal__button',
  'delete-modal__confirm-button'
);
deleteBtn_Modal.textContent = 'Удалить';
deleteModalButtons.append(cancelBtn_Modal, deleteBtn_Modal);

modalDelete.append(deleteTitle, deleteModalButtons);
modalOverlay.append(modalDelete);
document.body.prepend(modalOverlay);

taskList.addEventListener('click', (event) => {
  const deleteBtns = [...document.querySelectorAll('.delete-button')];
  if (!deleteBtns.includes(event.target)) return;

  modalOverlay.classList.remove('modal-overlay_hidden');
  const closestTask = event.target.closest('.task-item');

  deleteModalButtons.addEventListener('click', (modalEvent) => {
    const modalClickTarget = modalEvent.target;

    if (modalClickTarget === deleteBtn_Modal) {
      modalOverlay.classList.add('modal-overlay_hidden');
      closestTask.remove();

      const deleteTaskId = closestTask.dataset.taskId;
      const deleteTaskIdIndexInTasks = tasks.findIndex(
        (task) => task.id === deleteTaskId
      );

      deleteTaskIdIndexInTasks >= 0
        ? tasks.splice(deleteTaskIdIndexInTasks, 1)
        : tasks.splice(deleteTaskIdIndexInTasks, deleteTaskIdIndexInTasks);
    } else if (modalClickTarget === cancelBtn_Modal) {
      modalOverlay.classList.add('modal-overlay_hidden');
    }
  });
});
