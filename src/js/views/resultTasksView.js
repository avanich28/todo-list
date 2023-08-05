import View from './View.js';
import { filterDate, getNextDay } from '../helpers.js';

class ResultTasksView extends View {
  _parentElement = document.querySelector('.task-lists');

  addHandlerFavourite(handler) {
    this._parentElement.addEventListener('click', e => {
      const star = e.target.closest('.bi-star-fill');
      if (!star) return;

      handler(this._getItemIndex(e.target));
    });
  }

  addHandlerDelete(handler) {
    this._parentElement.addEventListener('click', e => {
      const bin = e.target.closest('.bi-trash3-fill');
      if (!bin) return;

      handler(this._getItemIndex(e.target));
    });
  }

  addHandlerEdit(handler) {
    this._parentElement.addEventListener('click', e => {
      const pencil = e.target.closest('.bi-pencil-square');
      if (!pencil) return;

      handler(this._getItemIndex(e.target));
    });
  }

  clear() {
    this._parentElement.innerHTML = '';
  }

  _getItemIndex(target) {
    const data = target.closest('.task__item');
    const dataIndex = +data.dataset.index;
    return dataIndex;
  }

  _convertDate(date) {
    const options = {
      day: 'numeric',
      month: 'short',
      year: '2-digit',
    };

    if (date === filterDate(new Date())) return 'Today';
    else if (date === filterDate(getNextDay())) return 'Tomorrow';
    else
      return new Intl.DateTimeFormat('en-GB', options).format(new Date(date));
  }

  _generateMarkup(render = true) {
    return `
    <li class="task__item" data-index="${
      render ? this._parentElement.children.length : this._dummyArr.length
    }">
      <div class="task-box-1">
        <label for="check-task" class="check-task-label"
          ><input type="checkbox" name="task" id="check-task"
        /></label>
        <p class="para">${this._data.todo}</p>
      </div>
      <div class="task-box-2">
        <p class="date">${this._convertDate(this._data.date)}</p>
        <button class="favourite-btn">
          <i class="bi bi-star-fill ${
            this._data.favourite ? 'favourite' : ''
          }"></i>
        </button>
        <button class="edit-btn">
          <i class="bi bi-pencil-square"></i>
        </button>
        <button class="bin-btn"><i class="bi bi-trash3-fill"></i></button>
      </div>
    </li>`;
  }
}

export default new ResultTasksView();
