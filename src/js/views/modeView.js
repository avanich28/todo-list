class Mode {
  _parentEl = document.querySelector('.slider');
  _root = document.documentElement;

  constructor() {
    this._toggleMode();
  }

  _toggleMode() {
    this._parentEl.addEventListener('click', () => {
      this._root.classList.toggle('dark');
      this._root.classList.toggle('light');
    });
  }
}

export default new Mode();
