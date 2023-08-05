import View from './View.js';

class FilterView extends View {
  _parentEl = document.querySelector('.filter-lists');
  _allNav = document.querySelectorAll('.filter-btn');
  _curFilter;

  getDefaultClick() {
    this._allNav[0].click();
  }

  getCurFilter() {
    return this._curFilter;
  }

  addHandlerClick(handler) {
    const self = this;
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      self.activeNav(btn);

      const dataTypeIndex = +btn.dataset.filter;
      handler(dataTypeIndex);
      // For adding favourite
      self._curFilter = dataTypeIndex; // FIXME
    });
  }
}

export default new FilterView();
