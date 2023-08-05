class EditTaskView {
  curDataIndex;
  _parentEl = document.querySelector('.edit-lists');
  _form = document.querySelector('.form-edit-task');

  addHandlerUploadEdit(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();
      const dataArr = [...new FormData(this._form)];
      const newData = Object.fromEntries(dataArr);

      handler(newData, this.curDataIndex);
      this._toggleModal();
      this._clearInput();
    });
  }

  getForm(data, dataIndex) {
    this.curDataIndex = dataIndex;
    const inputs = Object.values(data);
    this._form
      .querySelectorAll('.edit-textarea, #date')
      .forEach((el, i) => (el.value = inputs[i]));
    this._toggleModal();
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
    this._parentEl.classList.toggle('hide');
  }
}

export default new EditTaskView();
