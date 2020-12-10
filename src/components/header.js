import { html, LitElement } from 'lit-element';
import {routerSubject$} from '../util/page-router'

class Header extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback(){
    super.connectedCallback()
    routerSubject$.next(false)
    
  }
  render() {
    return html`




<!-- //Top Menu 1 -->
<section class="w3l-bootstrap-header">
  <nav class="navbar navbar-expand-lg navbar-light py-lg-2 py-2">
    <div class="container">
      <a class="navbar-brand" href="home">K<span>&</span>T</a>
      <!-- if logo is image enable this   
    <a class="navbar-brand" href="#index.html">
        <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
    </a> -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon fa fa-bars"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="blog">News</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="digital">Digital</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="events">Events</a>
          </li>
        
          <li class="nav-item">
            <a class="nav-link" href="contact">Contact</a>
          </li>
        </ul>
        <p>For Support Call<span class="fa fa-headphones pl-1"></span><br><a href="tel:900-369-8527">900-369-8527</a></p>
      </div>
    </div>
  </nav>
</section>

`;
  }
}

customElements.define('header-component', Header);
