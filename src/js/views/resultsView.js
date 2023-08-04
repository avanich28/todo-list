import View from './View.js';
import { filterDate, getNextDay } from '../helpers.js';

class ResultView extends View {
  _parentElement = document.querySelector('.task-lists');

  clear() {
    this._parentElement.innerHTML = '';
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
      render ? this._parentElement.children.length : this._arrDummy.length
    }">
      <div class="task-box-1">
        <label for="check-task" class="check-task-label"
          ><input type="checkbox" name="task" id="check-task"
        /></label>
        <p class="para">${this._data.todo}</p>
      </div>
      <div class="task-box-2">
        <p class="date">${this._convertDate(this._data.date)}</p>
        <button class="favourite-btn ${
          this._data.favourite ? 'favourite' : ''
        }">
          <i class="bi bi-star-fill"></i>
        </button>
        <button class="edit-btn">
          <i class="bi bi-pencil-square"></i>
        </button>
        <button class="bin-btn"><i class="bi bi-trash3-fill"></i></button>
      </div>
    </li>`;
  }
}

export default new ResultView();
