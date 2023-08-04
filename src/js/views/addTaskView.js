class AddTaskView {
  _parentEl = document.querySelector('.add-lists');
  _addTaskBtn = document.querySelector('.add-btn--task');
  _form = document.querySelector('.form-task');

  constructor() {
    this._clickAddTaskBtn();
    this._clickCancelBtn();
  }

  addHandlerUpload(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      const dataArr = [...new FormData(this._form)];
      const data = Object.fromEntries(dataArr);
      data.favourite = false;

      handler(data);
      this._toggleModal();
      this._clearInput();
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

  _clickCancelBtn() {
    this._parentEl.querySelector('.cancel-btn').addEventListener('click', e => {
      e.preventDefault();
      this._toggleModal();
      this._clearInput();
    });
  }

  _clearInput() {
    this._form
      .querySelectorAll('.form-textarea, #date')
      .forEach(el => (el.value = ''));
  }

  _toggleModal() {
    this._addTaskBtn.classList.toggle('hide');
    this._form.classList.toggle('hide');
  }
}

export default new AddTaskView();
