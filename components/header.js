class Header extends HTMLElement {
  constructor() {
    super();
  }


connectedCallback() {
  this.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light center">
  <div class="navbar-brand" id="navbar-brand"> True American</div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="navbar-collapse collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="aboutUs.html">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="theRules.html">The Rules</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="theGame.html">Play the Game</a>
        </li>
  </div>
  </nav>
  `;
}
}
customElements.define('header-component', Header);