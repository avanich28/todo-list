export default class TaskView {
  clickCancelBtn(edit = false) {
    this._parentEl.querySelector('.cancel-btn').addEventListener('click', e => {
      e.preventDefault();
      if (edit) this.toggleModal(edit);
      else this.toggleModal();
      this.clearInput();
    });
  }

  clearInput() {
    this._form
      .querySelectorAll('textarea, input')
      .forEach(el => (el.value = ''));
  }

  hideModal() {
    this._addBtn.classList.remove('hide');
    this._form.classList.add('hide');
  }

  toggleModal(edit = false) {
    if (edit) {
      this._parentEl.classList.toggle('hide');
    } else {
      this._addBtn.classList.toggle('hide');
      this._form.classList.toggle('hide');
    }
  }
}
