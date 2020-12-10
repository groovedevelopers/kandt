import { html, LitElement } from 'lit-element';
import {routerSubject$} from '../util/page-router'

class Contact extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback(){
    super.connectedCallback()
    routerSubject$.next(false)
    
  }
  render() {
    return html`
<section class="w3l-contact-breadcrum">
  <div class="breadcrum-bg py-sm-5 py-4">
    <div class="container py-lg-3 py-2">
      <h2>Contact Us</h2>
     
    </div>
  </div>
</section>
<!-- contact -->
<section class="w3l-contacts-12" id="contact">
    <div class="contact-top">
     
        <!-- map -->
        <div class="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281066703!2d-0.24168144921176335!3d51.5287718408761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1569921526194!5m2!1sen!2sin"
                frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
        <!-- //map -->
    </div>
</section>
<!-- //contact -->
<section class="w3l-features-1">
	<!-- /features -->
		<div class="features py-3">
            <div class="container">
			
			<div class="fea-gd-vv row ">	
			   <div class="col-lg-4 col-sm-6">	
				<div class="float-lt feature-gd">	
					 <div class="icon"> <span class="fa fa-comments-o" aria-hidden="true"></span></div>
					 <div class="icon-info">
						<h5>Live chat</h5>
						<p class="">Typical response time: 30s </p>
					</div>
				</div>
				</div>	
				<div class="col-lg-4 col-sm-6 mt-sm-0 mt-4">	
					<div class="float-mid feature-gd">	
					 <div class="icon"> <span class="fa fa-at" aria-hidden="true"></span></div>
					 <div class="icon-info">
						<h5>Email</h5>
						<p class="">Typical response time: 30-60 mins</p>
					</div>
				</div>
			 </div> 
				<div class="col-lg-4 col-sm-6 mt-lg-0 mt-4">	
					<div class="float-rt feature-gd">
					 <div class="icon"> <span class="fa fa-phone" aria-hidden="true"></span></div>
					 <div class="icon-info">
						<h5>Phone</h5>
						<p class="">Typical response time: 40s </p>
					</div>
				</div>
			 </div>	 
			
		</div>  
		 </div>
	   </div>
   <!-- //features -->
</section>
<!-- contact form -->
<section class="w3l-contacts-2">
	<div class="contacts-main">
		
		<div class="form-41-mian py-5">
			<div class="container py-md-3">
				<h3 class="cont-head">Get in touch</h3>
				<div class="d-grid align-form-map">
					<div class="form-inner-cont">
						
						<form action="https://sendmail.w3layouts.com/submitForm" method="post" class="main-input">
							<div class="top-inputs d-grid">
								<input type="text" placeholder="Name" name="w3lName" id="w3lName" required="">
								<input type="email" name="email" placeholder="Email" id="w3lSender" required="">
							</div>
							<input type="text" placeholder="Phone Number" name="w3lName" id="w3lName" required="">
							<textarea placeholder="Message" name="w3lMessage" id="w3lMessage" required=""></textarea>
							<div class="text-right">
								<button type="submit" class="btn btn-theme3">Send Now</button>
							</div>
						</form>
					</div>
					
					<div class="contact-right">
						<img src="assets/images/g6.jpg" class="img-fluid" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="contant11-top-bg py-5">
			<div class="container py-md-3">
				<div class="d-grid contact section-gap">
					<div class="contact-info-left d-grid text-center">
						<div class="contact-info">
							<span class="fa fa-location-arrow" aria-hidden="true"></span>
							<h4>Address</h4>
							<p>485 Pretty View Lane, Lorem ipsum, London, England</p>
						</div>
						<div class="contact-info">
							<span class="fa fa-phone" aria-hidden="true"></span>
							<h4>Phone</h4>
							<p><a href="tel:+44 7834 857829">+44 7834 857829</a></p>
							<p><a href="tel:+44 987 654 321">+44 987 654 321</a></p>
						</div>
						<div class="contact-info">
							<span class="fa fa-envelope-open-o" aria-hidden="true"></span>
							<h4>Mail</h4>
							<p><a href="mailto:mail@example.com" class="email">mail@example.com</a></p>
							<p><a href="mailto:mail@example.com" class="email">mail@example.com</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
</section>
<!-- //contact form -->

`;
}
}

customElements.define('contact-page', Contact);