import TaskView from './taskView.js';

class AddTaskView extends TaskView {
  _parentEl = document.querySelector('.add-lists');
  _addTaskBtn = document.querySelector('.add-btn--task');
  _form = document.querySelector('.form-task');

  constructor() {
    super();
    // this._clickAddTaskBtn();
    this.clickCancelBtn();
  }

  addHandlerUpload(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      const dataArr = [...new FormData(this._form)];
      const data = Object.fromEntries(dataArr);

      handler(data);
      this._toggleModal();
      this.clearInput();
    });
  }

  hideModal() {
    this._addTaskBtn.classList.remove('hide');
    this._form.classList.add('hide');
  }

  hideAddTaskView() {
    this._parentEl.classList.add('hide');
  }

  unHideAddTaskView() {
    this._parentEl.classList.remove('hide');
  }

  clickAddTaskBtn(func) {
    this._addTaskBtn.addEventListener('click', () => {
      this._toggleModal();
      func();
    });
  }

  _toggleModal() {
    this._addTaskBtn.classList.toggle('hide');
    this._form.classList.toggle('hide');
  }
}

export default new AddTaskView();
