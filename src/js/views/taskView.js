export default class TaskView {
  clickCancelBtn() {
    this._parentEl.querySelector('.cancel-btn').addEventListener('click', e => {
      e.preventDefault();
      this._toggleModal();
      this.clearInput();
    });
  }

  clearInput() {
    // FIXME
    this._form
      .querySelectorAll('.form-textarea, #date, #project-name')
      .forEach(el => (el.value = ''));
  }
}
