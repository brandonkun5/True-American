class Welcome extends HTMLElement {
  constructor() {
    super();
  }


connectedCallback() {
  this.innerHTML = `
  <div class="jumbotron">
    <h1 class="display-4">Welcome to True American!</h1>
    <p class="lead">A mix of candyland and drinking. It's actually 90% drinking with a loose candyland structure.</p>
    <hr class="my-4">
  </div>
  `;
}
}
customElements.define('welcome-component', Welcome);