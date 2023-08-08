import View from './View.js';

class ResultProjectsView extends View {
  _parentElement = document.querySelector('.project-folder-lists');
  _navNum;

  addHandlerClickFolder(handler) {
    this._parentElement.addEventListener('click', e => {
      const folder = e.target.closest('.project-folder-btn');
      const deleteMark = e.target.closest('.bi-x');
      if (!folder) return;
      if (deleteMark) return; // 🔥 prevent double click
      this.activeNav(folder);

      const folderIndex = +folder.dataset.folder;
      // For resultTasksView
      this._navNum = folderIndex;
      handler(folderIndex);
    });
  }

  addHandlerDeleteFolder(handler) {
    this._parentElement.addEventListener('click', e => {
      const deleteMark = e.target.closest('.bi-x');
      if (!deleteMark) return;

      const folderIndex = +e.target.closest('.project-folder-btn').dataset
        .folder;
      handler(folderIndex);
    });
  }

  _generateMarkup() {
    return `
      <li class="folder__item">
        <button class="project-folder-btn" data-folder="${this._parentElement.children.length}">
          <i class="bi bi-folder"></i>
          <span>${this._data.name}</span>
          <i class="bi bi-x"></i>
        </button>
      </li>`;
  }
}

export default new ResultProjectsView();
