import TaskView from './taskView.js';

class AddProjectTaskView extends TaskView {
  _parentEl = document.querySelector('.add-projects');
  _addProjectBtn = document.querySelector('.add-btn--project');
  _form = document.querySelector('.form-project');

  constructor() {
    super();
    // this.clickAddProjectBtn();
    this.clickCancelBtn();
  }

  addHandlerUploadFolder(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      const dataArr = [...new FormData(this._form)];
      const folder = Object.fromEntries(dataArr);
      handler(folder);
      this._toggleModal();
      this.clearInput();
    });
  }

  hideModal() {
    this._addProjectBtn.classList.remove('hide');
    this._form.classList.add('hide');
  }

  clickAddProjectBtn(func, func2) {
    this._addProjectBtn.addEventListener('click', () => {
      this._toggleModal();
      func();
      func2();
    });
  }

  _toggleModal() {
    this._addProjectBtn.classList.toggle('hide');
    this._form.classList.toggle('hide');
  }
}

export default new AddProjectTaskView();
