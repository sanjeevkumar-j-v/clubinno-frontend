import React from 'react';
import shape1 from '../assets/assets/images/shape/shape-1.svg';
import shape2 from '../assets/assets/images/shape/shape-2.svg';
import shape3 from '../assets/assets/images/shape/shape-3.svg';
import shape4 from '../assets/assets/images/shape/shape-4.svg';
import header_image from '../assets/assets/images/header-image.svg';
import about_svg from '../assets/assets/images/about.svg';

function Home(props) {
  return (
    <div class="main-content">
      <section class="header_area">
        <div id="home" class="header_hero d-lg-flex align-items-center">
          <div class="hero_shape shape_1">
            <img src={shape1} alt="shape" />
          </div>

          <div class="hero_shape shape_2">
            <img src={shape2} alt="shape" />
          </div>

          <div class="hero_shape shape_3">
            <img src={shape3} alt="shape" />
          </div>

          <div class="hero_shape shape_4">
            <img src={shape4} alt="shape" />
          </div>

          <div class="hero_shape shape_6">
            <img src={shape1} alt="shape" />
          </div>

          <div class="hero_shape shape_7">
            <img src={shape4} alt="shape" />
          </div>

          <div class="hero_shape shape_8">
            <img src={shape3} alt="shape" />
          </div>

          <div class="hero_shape shape_9">
            <img src={shape2} alt="shape" />
          </div>

          <div class="hero_shape shape_10">
            <img src={shape4} alt="shape" />
          </div>

          <div class="hero_shape shape_11">
            <img src={shape1} alt="shape" />
          </div>

          <div class="hero_shape shape_12">
            <img src={shape2} alt="shape" />
          </div>

          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="header_hero_content">
                  <h2
                    class="hero_title wow fadeInUp"
                    // style="color: black"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    Welcome To <span> Club Innovative</span>
                  </h2>
                  <p
                    class="wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.6s"
                  >
                    This webpage is a new initiative by us to bring all our
                    events under one roof
                  </p>
                  <ul>
                    <li
                      class="wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.9s"
                    >
                      <a class="main-btn" rel="nofollow" href="#">
                        Register Now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="header_shape d-none d-lg-block"></div>

          <div class="header_image d-flex align-items-center">
            <div class="image">
              <img
                class="wow fadeInRightBig"
                data-wow-duration="2s"
                data-wow-delay="1.6s"
                src={header_image}
                alt="Header Image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="why" class="about_area pt-115">
        <div class="about_image d-flex align-items-end justify-content-end">
          <div class="image">
            <img
              class="wow fadeInLeftBig"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
              src={about_svg}
              alt="about"
            />
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-end">
            <div class="col-lg-6">
              <div
                class="about_content wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <div class="section_title pb-35">
                  <h5 class="sub_title">Why Join Us?</h5>
                  <h4 class="main_title">Your Goal is Our Achievement</h4>
                </div>

                <p>
                  We motivate students to bring out their design talents in
                  various streams. We provide platform to realize and believe in
                  themselves. We build up great orators and improve their
                  creative leadership skills
                </p>
                <ul class="about_list">
                  <li class="d-flex">
                    <div class="about_check">
                      <i class="lni lni-checkmark-circle"></i>
                    </div>
                    <div class="about_list_content">
                      <p>Explore New things</p>
                    </div>
                  </li>
                  <li class="d-flex">
                    <div class="about_check">
                      <i class="lni lni-checkmark-circle"></i>
                    </div>
                    <div class="about_list_content">
                      <p>Enhance your Innovative skills</p>
                    </div>
                  </li>
                  <li class="d-flex">
                    <div class="about_check">
                      <i class="lni lni-checkmark-circle"></i>
                    </div>
                    <div class="about_list_content">
                      <p>Empower yourself to become young entrepreneurs</p>
                    </div>
                  </li>
                  <li class="d-flex">
                    <div class="about_check">
                      <i class="lni lni-checkmark-circle"></i>
                    </div>
                    <div class="about_list_content">
                      <p>Enjoy the Experience</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" class="work_area pt-115 pb-120">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-9">
              <div class="section_title text-center pb-25">
                <h5 class="main_title">
                  Register once and you can use the same account to participate
                  in all the events
                </h5>
                <h4 class="sub_title text-center">
                  No more hassle of registration before each event
                </h4>
              </div>

              <a class="main-btn" href="#" rel="nofollow">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
    </div>
  );
}

export default Home;
