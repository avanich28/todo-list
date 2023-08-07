import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    handler();
  }

  _generateMarkUp() {
    return `
      <button class="page-btn page-btn--left">
        <i class="bi bi-arrow-left-short"></i><span>Page 1</span>
      </button>
      <button class="page-btn page-btn--right">
        <span>Page 2</span><i class="bi bi-arrow-right-short"></i>
      </button>`;
  }
}

export default new PaginationView();
