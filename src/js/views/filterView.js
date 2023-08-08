import View from './View.js';

class FilterView extends View {
  _parentEl = document.querySelector('.filter-lists');
  _allNav = document.querySelectorAll('.filter-btn');
  _navNum = 0; // Default

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
      self._navNum = dataTypeIndex;

      handler(dataTypeIndex);
    });
  }
}

export default new FilterView();
