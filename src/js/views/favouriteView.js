class FavouriteView {
  _parentEl = document.querySelector('.task-lists');

  addHandlerFavouriteView(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const star = e.target.closest('.bi-star-fill');
      if (!star) return;

      const data = e.target.closest('.task__item');
      const dataIndex = +data.dataset.index;
      handler(dataIndex);
    });
  }
}

export default new FavouriteView();
