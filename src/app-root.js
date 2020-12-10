import {  LitElement, html, property } from 'lit-element';
import './components/footer';
import './components/header';

import page from 'page';
import { queryString$, lazyLoad, routerSubject$ } from './util/page-router';
// import { cond } from 'lodash';



export class AppRoot extends LitElement {

  constructor(){
    super()
    this.installRoute();
  }
  createRenderRoot() {
    return this;
  }

  // 'home'|'products' |'view-product'
 
  
  @property()
  routes = '';

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback(){
    super.disconnectedCallback()
  }
 

  installRoute() {
    page.redirect('', '/home');
    page('/home', (context)=> {this.changeRoute(context)});
    page('/artist', (context)=> {this.changeRoute(context)});
    page('/about', (context)=> {this.changeRoute(context)});
    page('/blog', (context)=> {this.changeRoute(context)});
    page('/view-blog', (context)=> {this.changeRoute(context)});
    page('/contact', (context)=> {this.changeRoute(context)});
    page('/digital', (context)=> {this.changeRoute(context)});
    page('/events', (context)=> {this.changeRoute(context)});
    page('*', (context)=> {this.changeRoute(context)});
    page()

    

  }

  changeRoute(context) {
    window.scrollTo(0,0)
    queryString$.next(context.querystring)
    routerSubject$.next(true)
    this.routes = context.pathname
    this.requestUpdate();
   
  }

  currentView() {
    switch (this.routes) {
      case '/home':
        
        return lazyLoad(import('./pages/home'),html`<home-page></home-page>`);
      case '/products':
        return lazyLoad(import('./pages/artist'),html`<artist-page></artist-page>`);
      case '/about':
        return lazyLoad(import('./pages/about'),html`<about-page></about-page>`);
      case '/blog':
        return lazyLoad(import('./pages/blog'),html`<blog-page></blog-page>`);
      case '/view-blog':
        return lazyLoad(import('./pages/view-blog'),html`<view-blog-page></view-blog-page>`);
      case '/contact':
        return lazyLoad(import('./pages/contact'),html`<contact-page></contact-page>`);
      case '/digital':
        return lazyLoad(import('./pages/digital'),html`<digital-page></digital-page>`);
      case '/events':
        return lazyLoad(import('./pages/events'),html`<events-page></events-page>`);
    }
  }
  render() {
    return html`
      <header-component></header-component>
      ${this.currentView()}
      
      <footer-component></footer-component>
    `;
  }
}

customElements.define('app-root', AppRoot);
