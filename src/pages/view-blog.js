import { LitElement, html, property } from 'lit-element';
import { switchMap, tap, map,filter } from 'rxjs/operators';
import {
  queryString$,
  queryParamMapper,
  loaderSubject$,
  routerSubject$,
} from '../util/page-router';
import { SubSink } from 'subsink';
import { getOneBlogFromFirebase } from '../util/firebase.config';
// import { filter } from 'lodash';

class viewBlog extends LitElement {
  createRenderRoot() {
    return this;
  }

  subs = new SubSink();



  blogId$ = queryString$.pipe(queryParamMapper('blogid'), filter(blog => blog?.length > 0));
  blog$ = this.blogId$.pipe(
    switchMap((id) => getOneBlogFromFirebase(id)),map( item => {
      const firebaseTimesate = item.date.toDate()
      item.date = new Date(firebaseTimesate).toLocaleDateString()
      return item
    }), 
    tap((news) => (this.blog = news)),
  );

  @property()
  blog;

  connectedCallback() {
    super.connectedCallback();
    this.subs.sink = this.blog$.subscribe();
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
      <h2>${this.blog?.name}</h2>
     
    </div>
  </div>
</section>
<section class="w3l-blog mt-lg-5">
  <div class="text-element-9 py-5 mt-lg-5">
    <div class="container py-lg-3">
      <div class="row grid-text-9">
        <div class="col-md-8">
          <div class="blog-single-post">
          

            <div class="single-post-image mb-4">
              <img src=${this.blog?.image} class="img-fluid w-100" alt="blog-post-image" />
            </div>
            <div class="single-post-content">
              <p class="mb-4">${this.blog?.desc} </p>

            </div>




          </div>
        </div>
        <div class="col-md-4 left-text-9 mt-md-0 mt-5 pl-md-4">
          <div class="blog-search">
            <form action="#" method="GET" class="d-flex search-form">
              <input type="search" class="form-control" placeholder="Search..." name="search" required="required">
              <button type="submit" class="btn search-btn"><span class="fa fa-search"></span></button>
            </form>
          </div>

          <div class="left-top-9 mt-5">
            <h6 class="heading-small-text-9 mb-3">Popular Post</h6>
            <a href="blog-single.html" class="p-post d-block py-2">
              <h6 class="text-left-inner-9">Can your business become better with new technology?</h6>
              <span class="sub-inner-text-9">May 11, 2020</span>
            </a>
            <a href="blog-single.html" class="p-post d-block py-2">
              <h6 class="text-left-inner-9">Company opens green design data center</h6>
              <span class="sub-inner-text-9">June 23, 2020</span>
            </a>
            <a href="blog-single.html" class="p-post d-block py-2">
              <h6 class="text-left-inner-9">International Business Opportunities</h6>
              <span class="sub-inner-text-9">July 15, 2020</span>
            </a>
            <a href="blog-single.html" class="p-post d-block py-2">
              <h6 class="text-left-inner-9">Fun Examples of CSS Imitating Print Design</h6>
              <span class="sub-inner-text-9">September 05, 2020</span>
            </a>
          </div>
          <div class="categories mt-5">
            <h6 class="heading-small-text-9">Categories</h6>
            <ul>
              <li>
                <a href="blog-single.html" class=""> Three quarters of construction</a>
              </li>
              <li> 
                <a href="blog-single.html" class=""> Magazine beside cup of coffee</a>
              </li>
              <li>
                <a href="blog-single.html" class=""> The way of success</a>
              </li>
              <li>
                <a href="https://w3layouts.com/" class=""> W3Layouts Website Templates</a>
              </li>

              <li>
                <a href="blog-single.html" class=""> Life Style of Hong Kong</a>
              </li>

            </ul>
          </div>
          <div class="categories mt-5">
            <h6 class="heading-small-text-9">Archives</h6>
            <ul>
              <li>
                <a href="blog-single.html" class=""> January 2019</a>
              </li>
              <li>
                <a href="blog-single.html" class=""> February 2018</a>
              </li>
              <li>
                <a href="blog-single.html" class=""> March 2018</a>
              </li>
              <li>
                <a href="blog-single.html" class="">April 2017</a>
              </li>

              <li>
                <a href="blog-single.html" class=""> May 2016</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



` }
}

customElements.define('view-blog-page', viewBlog)