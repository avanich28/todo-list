import View from './View.js';

class FilterView extends View {
  filterNum = 0; // Default
  _parentEl = document.querySelector('.filter-lists');
  _allNav = document.querySelectorAll('.filter-btn');

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
      self.filterNum = dataTypeIndex; // FIXME

      handler(dataTypeIndex);
    });
  }

  getCurFilter() {
    return this.filterNum;
  }

  resetCurFilter() {
    this.filterNum = undefined;
  }
}

export default new FilterView();
