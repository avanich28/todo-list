export default class View {
  _data;
  _dummyArr = [];

  render(data, render = true) {
    console.log(data);
    if (!data) return;
    this._data = data;
    const markup = this._generateMarkup(render);

    if (!render) return markup;
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  update(dataSet) {
    this._data = dataSet;
    const newMarkUp = this._data
      .map(data => {
        const html = this.render(data, false);
        this._dummyArr.push(0);
        return html;
      })
      .join('');
    this._dummyArr = [];

    // In memory
    const newDOM = document.createRange().createContextualFragment(newMarkUp);
    // Convert to Array
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    // Compare
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      // Update text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Update attribute
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  activeNav(el) {
    // Latest update
    const allNav = document.querySelectorAll(
      '.filter-btn, .project-folder-btn'
    );
    allNav.forEach(el => el.classList.remove('active'));

    el.classList.add('active');
  }
}
