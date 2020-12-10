import { html, LitElement } from 'lit-element';
import {routerSubject$} from '../util/page-router'

class Home extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback(){
    super.connectedCallback()
    routerSubject$.next(false)
    
  }
  render() {
    return html`

<section class="w3l-main-slider" id="home">
  <!-- main-slider -->
 

  <!-- /main-slider -->
</section>
<!-- features-4 block -->
<section class="w3l-index1" id="about">
	<div class="calltoaction-20  py-5 editContent">
		<div class="container py-md-3">
		
			<div class="calltoaction-20-content row">
				<div class="column center-align-self col-lg-6 pr-lg-5">
					<h5 class="editContent">Who We Are</h5>
					<p class="more-gap editContent">Pati is cool and GD is the best develp company you can find. Thanks for your attention. Goodnight.</p>
						<p class="more-gap editContent">Numquam
							architecto, ex veritatis tempora aliquid labore natus autem iusto magni dicta incidunt nostrum
							odit veniam voluptas provident </p>
							<a class="btn btn-secondary btn-theme2 mt-2 mt-lg-3" href="about.html"> Read More</a>
				</div>
				<div class="column ccont-left col-lg-6 mt-lg-0 mt-5">
					<img src="assets/images/g1.jpg" class="img-responsive" alt="">
				</div>
			</div>
		</div>
	</div>
</section>
<!-- features-4 block -->
 <!--  services section -->
<section class="w3l-index6" id="service">
  <div class="features-with-17_sur py-5">
    <div class="container py-lg-5">
      <div class="features-with-17-top_sur">
        <div class="row">
          <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
            <div class="features-with-17-right-tp_sur">
              <div class="features-with-17-left1 mb-3">
                <span class="fa fa-lightbulb-o" aria-hidden="true"></span>
              </div>
              <div class="features-with-17-left2">
                <h6><a href="#url"><bold>Business </bold> Idea</a></h6>
                <p> Lorem Ipsum is simply dummy text of the printing and industry.
                  Lorem Ipsum has the industry's standard dummy text ever since the 1500s,</p>
                  <a href="services.html" class="actionbg">Read More </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
            <div class="features-with-17-right-tp_sur">
              <div class="features-with-17-left1 mb-3">
                <span class="fa fa-recycle" aria-hidden="true"></span>
              </div>
              <div class="features-with-17-left2">
                <h6><a href="#url"><bold>Team </bold> Work</a></h6>
                <p> Lorem Ipsum is simply dummy text of the printing and industry.
                  Lorem Ipsum has the industry's standard dummy text ever since the 1500s,</p>
                  <a href="services.html" class="actionbg">Read More </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-lg-0 mt-5">
            <div class="features-with-17-right-tp_sur">
              <div class="features-with-17-left1 mb-3">
                <span class="fa fa-bar-chart" aria-hidden="true"></span>
              </div>
              <div class="features-with-17-left2">
                <h6><a href="#url"><bold>Advanced </bold> Analytics</a> </h6>
                <p> Lorem Ipsum is simply dummy text of the printing and industry.
                  Lorem Ipsum has the industry's standard dummy text ever since the 1500s,</p>
                  <a href="services.html" class="actionbg">Read More </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="w3l-news" id="news">
  <section id="grids5-block" class="py-5">
    <div class="container py-lg-3">
      <div class="heading text-center mx-auto">
				<h3 class="head">Latest K<span>&</span>T News</h3>
			  </div>
      <div class="grid-view">
        <div class="row">
          <div class="col-lg-4 col-md-6 mt-md-4 mt-4">
            <div class="grids5-info">
              <a href="blog-single.html" class="d-block zoom"><img src="assets/images/g2.jpg" alt="" class="img-fluid news-image"></a>
              <div class="blog-info">
                <p class="date">Mar 29, 2020</p>
                <h4><a href="blog-single.html">Business Support</a></h4>
               
                <p class="blog-text">Lorem ipsum dolor sit amet nostrum ad minus libero fugiat molestiae ullam ipsam quas unde earum...</p>
                <a href="blog-single.html" class="btn btn-news">Read More <span class="fa fa-angle-right pl-1"></span> </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-md-4 mt-5">
            <div class="grids5-info">
              <a href="blog-single.html" class="d-block zoom"><img src="assets/images/g4.jpg" alt="" class="img-fluid news-image"></a>
              <div class="blog-info">
                <p class="date">Sep 28, 2020</p>
                <h4><a href="blog-single.html">Add Helper!</a></h4>
                
                <p class="blog-text">Lorem ipsum dolor sit amet nostrum ad minus libero fugiat molestiae ullam ipsam quas unde earum...</p>
                <a href="blog-single.html" class="btn btn-news">Read More <span class="fa fa-angle-right pl-1"></span> </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 offset-md-3 offset-lg-0 col-md-6 mt-md-4 mt-5">
            <div class="grids5-info">
              <a href="blog-single.html" class="d-block zoom"><img src="assets/images/g6.jpg" alt="" class="img-fluid news-image"></a>
              <div class="blog-info">
                <p class="date">Dec 28, 2020</p>
                <h4><a href="blog-single.html">Capital Management</a></h4>
               
                <p class="blog-text">Lorem ipsum dolor sit amet nostrum ad minus libero fugiat molestiae ullam ipsam quas unde earum...</p>
                <a href="blog-single.html" class="btn btn-news">Read More <span class="fa fa-angle-right pl-1"></span> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>

<section class="w3l-index6" id="service">
  <div class="container">
    <div class="heading text-center mx-auto">
          <h3 class="head">K<span>&</span>T VIDEOS</h3>
          <br>
    </div>
    <div class="row">
      <div class="col-sm-9">
      <iframe width="791" height="445" style="max-width:100%; max-height:100%;" src="https://www.youtube.com/embed/9y9a8adcL00" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
      <div class="col-sm-3">
      <iframe style="max-width:100%; max-height:100%;" src="https://www.youtube.com/embed/9y9a8adcL00" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe style="max-width:100%; max-height:100%;"  src="https://www.youtube.com/embed/9y9a8adcL00" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe style="max-width:100%; max-height:100%;"  src="https://www.youtube.com/embed/9y9a8adcL00" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </div>
    </div>
  </div>


</section>


`;
}
}

customElements.define('home-page', Home);
