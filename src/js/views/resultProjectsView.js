import View from './View.js';

class ResultProjectsView extends View {
  _parentElement = document.querySelector('.project-folder-lists');
  _navNum;
  _preFolderEl; // For delete folder

  addHandlerClickFolder(handler) {
    this._parentElement.addEventListener('click', e => {
      const folder = e.target.closest('.project-folder-btn');
      const deleteMark = e.target.closest('.bi-x');
      if (!folder) return;
      if (deleteMark) return; // 🔥 prevent double click
      this.activeNav(folder);
      this._preFolderEl = folder;

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

  getPreFolderNav() {
    return this._preFolderEl.querySelector('span').textContent;
  }

  activePreFolderNav(folderIndex) {
    const el = this._parentElement.querySelectorAll('.project-folder-btn')[
      folderIndex
    ];
    return this.activeNav(el);
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
