import TaskView from './taskView.js';

class EditTaskView extends TaskView {
  curDataIndex;
  _parentEl = document.querySelector('.edit-lists');
  _form = document.querySelector('.form-edit-task');

  constructor() {
    super();
    this.clickCancelBtn(true);
  }

  addHandlerUploadEdit(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      const dataArr = [...new FormData(this._form)];
      const newData = Object.fromEntries(dataArr);
      handler(newData, this.curDataIndex);
      this.toggleModal(true);
      this.clearInput();
    });
  }

  getForm(data, dataIndex) {
    this.curDataIndex = dataIndex;
    const inputs = Object.values(data);
    this._form
      .querySelectorAll('textarea, input')
      .forEach((el, i) => (el.value = inputs[i]));
    this.toggleModal(true);
  }

  hideModal() {
    this.clearInput();
    this._parentEl.classList.add('hide');
  }
}

export default new EditTaskView();
