import TaskView from './taskView.js';

class AddProjectTaskView extends TaskView {
  _parentEl = document.querySelector('.add-projects');
  _addBtn = document.querySelector('.add-btn--project');
  _form = document.querySelector('.form-project');

  constructor() {
    super();
    this.clickCancelBtn();
  }

  addHandlerUploadFolder(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      const dataArr = [...new FormData(this._form)];
      const folder = Object.fromEntries(dataArr);
      handler(folder);
      this.toggleModal();
      this.clearInput();
    });
  }

  clickAddProjectBtn(func, func2) {
    this._addBtn.addEventListener('click', () => {
      this.toggleModal();
      func();
      func2();
    });
  }
}

export default new AddProjectTaskView();
