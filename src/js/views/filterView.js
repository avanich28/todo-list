class FilterView {
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
      self._activeNav(btn);

      const dataTypeIndex = +btn.dataset.filter;
      handler(dataTypeIndex);
      // For adding favourite
      self._curFilter = dataTypeIndex;
    });
  }

  _activeNav(el) {
    this._allNav.forEach(el => el.classList.remove('active'));

    el.classList.add('active');
  }
}

export default new FilterView();
