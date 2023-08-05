import TaskView from './taskView.js';

class AddTaskView extends TaskView {
  _parentEl = document.querySelector('.add-lists');
  _addTaskBtn = document.querySelector('.add-btn--task');
  _form = document.querySelector('.form-task');

  constructor() {
    super();
    this._clickAddTaskBtn();
    this.clickCancelBtn();
  }

  addHandlerUpload(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      const dataArr = [...new FormData(this._form)];
      const data = Object.fromEntries(dataArr);
      data.favourite = false;

      handler(data);
      this._toggleModal();
      this.clearInput();
    });
  }

  hideAddTaskView() {
    this._parentEl.classList.add('hide');
  }

  unHideAddTaskView() {
    this._parentEl.classList.remove('hide');
  }

  _clickAddTaskBtn() {
    this._addTaskBtn.addEventListener('click', e => {
      e.preventDefault();
      this._toggleModal();
    });
  }

  _toggleModal() {
    this._addTaskBtn.classList.toggle('hide');
    this._form.classList.toggle('hide');
  }
}

export default new AddTaskView();
