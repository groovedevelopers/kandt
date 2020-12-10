import { LitElement, html, property } from 'lit-element';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { getAllEvent } from '../util/firebase.config';
import {
  queryString$,
  queryParamMapper,
  loaderSubject$,
  routerSubject$,
} from '../util/page-router';

class Events extends LitElement {
  createRenderRoot() {
    return this;
  }

  
  subs = new SubSink();
  eventsubject$ = new BehaviorSubject([]);
  // categoryName$ = queryString$.pipe(queryParamMapper('blogCategory'));

  // fetch categories from firebase
//   blogCategories$ = getBlogCategoriesFromFirebase().pipe(tap((blogCat) => this.blogCategories = blogCat))

  // fetch all blogs from firebase, but customizse date first
  event$ = getAllEvent().pipe( tap((theEvents) => this.events = theEvents))
   

  @property()
  events = [];

  connectedCallback() {
    super.connectedCallback();
    routerSubject$.next(false);
    // this.blogsubject$.next(category);
    // this.subs.sink = this.blogCategories$.subscribe();
    this.subs.sink = this.event$.subscribe();
    // this.subs.sink = this.category$.subscribe();
    // this.subs.sink = this.brand$.subscribe();
  }

  disconnectedCallback() {
    this.subs.unsubscribe();
    super.disconnectedCallback();
  }

  render() {
    return html`
<section class="w3l-blog-breadcrum">
  <div class="breadcrum-bg py-sm-5 py-4">
    <div class="container py-lg-3 py-2">
      <h2>Upcoming Events </h2>
    
    </div>
  </div>
</section>
<!-- blog page blog grids -->
<section class="w3l-blog" id="blog">
<div class="blog-1 py-5" id="blog">
    <div class="container py-md-3">
       
        <div class="blog-grids row">
        ${this.events.map(
                    (item) => html`
            <div class="col-lg-4 col-md-6 col-sm-12 blog-grid" id="zoomIn">
                <a href=${item.link} target="_blank">
                    <figure><img src=${item.image} class="img-fluid" alt=""></figure>
                </a>
                <div class="blog-info">
                    <h3><a href=${item.link}>${item.name}</a> </h3>
                </div>
            </div>
            `,
                  )}
            
        </div>
    </div>
</div>
</section>
<!-- blog page blog grids -->

`;
}
}

customElements.define('events-page', Events);