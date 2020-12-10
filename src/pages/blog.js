import { LitElement, html, property } from 'lit-element';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { SubSink } from 'subsink';
import {  getBlogCategoriesFromFirebase, getAllBlog } from '../util/firebase.config';
import {
  queryString$,
  queryParamMapper,
  loaderSubject$,
  routerSubject$,
} from '../util/page-router';

class Blog extends LitElement {
  createRenderRoot() {
    return this;
  }

  subs = new SubSink();
  blogsubject$ = new BehaviorSubject([]);
  // categoryName$ = queryString$.pipe(queryParamMapper('blogCategory'));

  // fetch categories from firebase
  blogCategories$ = getBlogCategoriesFromFirebase().pipe(tap((blogCat) => this.blogCategories = blogCat))

  // fetch all blogs from firebase, but customizse date first
  blogs$ = getAllBlog().pipe( map(items => {

// for evervy item in a blog, change the dat 
    items.forEach(item => {
      // firebase timestap returns a date object. from that object, call the tostring medthod.
      // The tostring method create a date.
      // but we want to the date to be in a local so we put it in a new date object and call the
      // localedatestring methos 

      const firebaseTimesate = item.date.toDate()
      item.date = new Date(firebaseTimesate).toLocaleDateString()
    })
    return items
  }),  tap((theBlogs) => this.blogs = theBlogs))
   

  @property()
  blogs = [];
  @property()
  blogCategories = []

  connectedCallback() {
    super.connectedCallback();
    routerSubject$.next(false);
    // this.blogsubject$.next(category);
    this.subs.sink = this.blogCategories$.subscribe();
    this.subs.sink = this.blogs$.subscribe();
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
      <h2>Blog </h2>
    
    </div>
  </div>
</section>
<!-- blog page blog grids -->
<section class="w3l-blog" id="blog">
<div class="blog-1 py-5" id="blog">
    <div class="container py-md-3">
       
        <div class="blog-grids row">
        ${this.blogs.map(
                    (item) => html`
            <div class="col-lg-4 col-md-6 col-sm-12 blog-grid" id="zoomIn">
                <a href="${`view-blog?blogid=${item.id}`}">
                    <figure><img src=${item.image} class="img-fluid" alt=""></figure>
                </a>
                <div class="blog-info">
                    <h3><a href="${`view-blog?blogid=${item.id}`}">${item.name}</a> </h3>
                    <ul>
                        <li><a href="#author"><span class="fa fa-user-o mr-2"></span>${item.by}</a></li>
                        <li><a href="#author"><span class="fa fa-calendar mr-2"></span>${item.date }</a></li>
                    </ul>
                    <p style="overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3; 
   -webkit-box-orient: vertical;">${item.desc}</p>
                    <a href="${`view-blog?blogid=${item.id}`}" class="read mt-3">Read More <span class="fa fa-angle-double-right pl-1" aria-hidden="true"></span></a>
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

customElements.define('blog-page', Blog);