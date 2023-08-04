export default class View {
  _data;
  _arrDummy = [];

  render(data, render = true) {
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
        this._arrDummy.push(0);
        return html;
      })
      .join('');
    this._arrDummy = [];

    // In memory
    const newDOM = document.createRange().createContextualFragment(newMarkUp);
    // Convert to Array
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          // BUG
          console.log(attr);
          console.log(curEl);
          console.log(newEl);
          curEl.setAttribute(attr.class, attr.value);
        });
      }
    });
  }
}
