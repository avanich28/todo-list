import View from './View.js';

class FilterView extends View {
  _parentEl = document.querySelector('.filter-lists');
  _allNav = document.querySelectorAll('.filter-btn');
  _filterNum = 0; // Default

  getDefaultClick() {
    this._allNav[0].click();
  }

  addHandlerClick(handler) {
    const self = this;
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      self.activeNav(btn);

      const dataTypeIndex = +btn.dataset.filter;
      // For adding favourite
      self._filterNum = dataTypeIndex; // FIXME

      handler(dataTypeIndex);
    });
  }

  getCurFilter() {
    return this._filterNum;
  }

  resetCurFilter() {
    this._filterNum = undefined;
  }
}

export default new FilterView();
