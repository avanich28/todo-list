import TaskView from './taskView.js';

class AddTaskView extends TaskView {
  _parentEl = document.querySelector('.add-lists');
  _addBtn = document.querySelector('.add-btn--task');
  _form = document.querySelector('.form-task');

  constructor() {
    super();
    this.clickCancelBtn();
  }

  addHandlerUpload(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      const dataArr = [...new FormData(this._form)];
      const data = Object.fromEntries(dataArr);
      handler(data);
      this.toggleModal();
      this.clearInput();
    });
  }

  hideAddTaskView() {
    this._parentEl.classList.add('hide');
  }

  unHideAddTaskView() {
    this._parentEl.classList.remove('hide');
  }

  clickAddTaskBtn(func) {
    this._addBtn.addEventListener('click', () => {
      this.toggleModal();
      func();
    });
  }
}

export default new AddTaskView();
