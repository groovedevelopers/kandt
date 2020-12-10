import { html, LitElement, property } from 'lit-element';
import {routerSubject$} from '../util/page-router';
import { SubSink } from 'subsink';
import { getabout } from '../util/firebase.config';
import { switchMap, tap, map,filter } from 'rxjs/operators';

class About extends LitElement {
  createRenderRoot() {
    return this;
  }

  subs = new SubSink();

  about$ = getabout().pipe(
    tap((about) => (this.about = about)),
  );

  @property()
  about;

  connectedCallback() {
    super.connectedCallback();
    this.subs.sink = this.about$.subscribe();
    routerSubject$.next(false)
  }

  disconnectedCallback() {
    this.subs.unsubscribe();
    super.disconnectedCallback();
  }



//   connectedCallback(){
//     super.connectedCallback()
//     routerSubject$.next(false)
    
//   }
  render() {
    return html`
<section class="w3l-about-breadcrum">
  <div class="breadcrum-bg py-sm-5 py-4">
    <div class="container py-lg-3 py-2">
      <h2>About Us</h2>
     
    </div>
  </div>
</section>
<!-- content-with-photo4 block -->
<section class="w3l-content-with-photo-4" id="about">
    <div id="content-with-photo4-block" class="pt-5"> 
        <div class="container py-md-3">
            <div class="cwp4-two row">
               
                <div class="cwp4-text col-lg-6">
                        <h3>${this?.about?.header}</h3>
                    <p>${this?.about?.body}</p>
                  
                </div>
                <div class="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                    <img src=${this?.about?.image} class="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>
<!-- content-with-photo4 block -->
<section class="w3l-features-5">
	<!-- /features -->
		<div class="features py-4">
            <div class="container pb-5">
			
			<div class="fea-gd-vv row ">
                
            ${this.about?.point?.map(
                    (about) => html`
			   <div class="float-lt feature-gd col-lg-4 col-sm-6">	
					
					 <div class="icon-info">
						<h5>${about.header}</h5>
						<p>${about?.body}</p>
					</div>
					 
                </div> 
                `,
                  )}
			 	
		</div>  
		 </div>
	   </div>
   <!-- //features -->
</section>


`;
}
}

customElements.define('about-page', About);