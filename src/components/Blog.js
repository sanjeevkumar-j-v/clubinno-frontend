import React from 'react';
import blog1 from '../assets/assets/images/blog-1.jpeg';
import blog2 from '../assets/assets/images/blog-2.jpeg';
import blog3 from '../assets/assets/images/blog-3.png';


function Blog(props) {
  return (
    <div class="main-content" style={{padding: 0}}>
      <section id="blog" class="blog_area pt-115">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section_title text-center pb-25">
                <h4 class="main_title">Art by our friends</h4>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-7">
              <div
                class="single_blog mt-30 wow fadeIn"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div class="blog_image">
                  <img src={blog2} alt="blog" />
                </div>
                <div class="blog_content">
                  <ul class="d-flex justify-content-between">
                    <li>
                      By: <a href="#">E.Jansi Rani</a>
                    </li>
                    <li>III year BT</li>
                  </ul>
                  <ul class="justify-content-between">
                    <li>
                      Category: <a href="#">Quote</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-7">
              <div
                class="single_blog mt-30 wow fadeIn"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div class="blog_image">
                  <img src={blog1} alt="blog" />
                </div>
                <div class="blog_content">
                  <ul class="d-flex justify-content-between">
                    <li>
                      By: <a href="#">Aksharaa S</a>
                    </li>
                    <li>III year CSE</li>
                  </ul>
                  <ul class="justify-content-between">
                    <li>
                      Category: <a href="#">Drawing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-7">
              <div
                class="single_blog mt-30 wow fadeIn"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <div class="blog_image">
                  <img src={blog3} alt="blog" />
                </div>
                <div class="blog_content">
                  <ul class="d-flex justify-content-between">
                    <li>
                      By: <a href="#">Abithaa V</a>
                    </li>
                    <li>III year BT</li>
                  </ul>
                  <ul class="justify-content-between">
                    <li>
                      Category: <a href="#">Painting</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Blog;
