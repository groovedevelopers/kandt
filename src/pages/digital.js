import { LitElement, html, property } from 'lit-element';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { getAllDigital } from '../util/firebase.config';
import {
  queryString$,
  queryParamMapper,
  loaderSubject$,
  routerSubject$,
} from '../util/page-router';

class Digital extends LitElement {
  createRenderRoot() {
    return this;
  }

  
  subs = new SubSink();
  digitalsubject$ = new BehaviorSubject([]);
  // categoryName$ = queryString$.pipe(queryParamMapper('blogCategory'));

  // fetch categories from firebase
//   blogCategories$ = getBlogCategoriesFromFirebase().pipe(tap((blogCat) => this.blogCategories = blogCat))

  // fetch all blogs from firebase, but customizse date first
  digital$ = getAllDigital().pipe( tap((theDigitals) => this.digitals = theDigitals))
   

  @property()
  digitals = [];

  connectedCallback() {
    super.connectedCallback();
    routerSubject$.next(false);
    // this.blogsubject$.next(category);
    // this.subs.sink = this.blogCategories$.subscribe();
    this.subs.sink = this.digital$.subscribe();
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
      <h2>Digital </h2>
    
    </div>
  </div>
</section>
<!-- blog page blog grids -->
<section class="w3l-blog" id="blog">
<div class="blog-1 py-5" id="blog">
    <div class="container py-md-3">
       
        <div class="blog-grids row">
        ${this.digitals.map(
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

customElements.define('digital-page', Digital);