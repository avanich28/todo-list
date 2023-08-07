import View from './View.js';

class ResultProjectsView extends View {
  _parentElement = document.querySelector('.project-folder-lists');
  _projectNum;

  addHandlerClickFolder(handler) {
    this._parentElement.addEventListener('click', e => {
      const folder = e.target.closest('.project-folder-btn');
      if (!folder) return;
      this.activeNav(folder);

      const folderIndex = +folder.dataset.folder;
      // For resultTasksView
      this._projectNum = folderIndex;
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

  getCurProject() {
    return this._projectNum;
  }

  resetCurProject() {
    this._projectNum = undefined;
  }
}

export default new ResultProjectsView();
