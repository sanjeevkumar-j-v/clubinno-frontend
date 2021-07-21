import React from 'react';
import contact_svg from '../assets/assets/images/contact.svg';


function Contact(props) {
  return (
    <div class="main-content" style={{ padding: 0 }}>
      <section id="contact" class="contact_area pt-70 pb-120">
        <div
          class="
                  contact_image
                  d-flex
                  align-items-center
                  justify-content-end
                "
        >
          <div class="image">
            <img
              class="wow fadeInLeftBig"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
              src={contact_svg}
              alt="about"
            />
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-end">
            <div class="col-lg-6">
              <div
                class="contact_wrapper mt-45 wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.9s"
              >
                <div class="section_title pb-15">
                  <h5 class="sub_title">Contact</h5>
                  <h4 class="main_title">Get In Touch</h4>
                  <p>Feel free to ask doubts</p>
                </div>

                <div class="contact_form">
                  <form id="contact-form" action="/">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="single_form">
                          <input name="name" type="text" placeholder="Name" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="single_form">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="single_form">
                          <textarea
                            name="message"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <p class="form-message"></p>
                      <div class="col-md-12">
                        <div class="single_form">
                          <button class="main-btn">Submit</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
