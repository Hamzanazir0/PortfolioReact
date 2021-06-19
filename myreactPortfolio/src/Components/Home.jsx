import React from "react";

const Home = () => {
  return (
    <div>
      <div className="cursor"></div>
      <div className="site-wrapper">
        <div className="doc-loader">
          <img src="images/preloader.gif" alt="Hamza" />
        </div>

        <header className="header-holder">
          <div className="menu-wrapper center-relative relative">
            <div className="header-logo">
              <a href="/index.html">
                <img src="images/HamzaLogoHeader.png" alt="Hamza" />
              </a>
            </div>

            <div className="toggle-holder">
              <div id="toggle" className="">
                <div className="first-menu-line"></div>
                <div className="second-menu-line"></div>
                <div className="third-menu-line"></div>
              </div>
            </div>

            <div className="menu-holder">
              <nav id="header-main-menu">
                <ul className="main-menu sm sm-clean">
                  <li>
                    <a href="/#home">Home</a>
                  </li>
                  <li>
                    <a href="/#services">Services</a>
                  </li>
                  <li>
                    <a href="/#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="/#inspire">Inspire</a>
                  </li>
                  <li>
                    <a href="/#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#team">Team</a>
                  </li>
                  <li>
                    <a href="#clients">Clients</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="clear"></div>
          </div>
        </header>

        <div id="content" className="site-content center-relative">
          {/* <!-- Home --> */}
          <div id="home" className="section full-screen full-width">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="content-wrapper">
                <img
                  src="images/Hamza.png"
                  alt=""
                  className="center-relative block"
                />
              </div>
            </div>
          </div>

          {/* <!-- Services --> */}
          <div id="services" className="section page-split">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="bg-holder float-left">
                <div className="split-color"></div>
              </div>
              <div className="sticky-spacer">
                <div className="section-title-holder float-left">
                  <div className="section-top-image">
                    <img src="images/01_left.png" alt="" />
                  </div>
                  <h2 className="entry-title">
                    WHAT <br />
                    I <br />
                    DO
                  </h2>
                  <p className="page-desc">
                    My modest <br />
                    list of services
                  </p>
                </div>
              </div>

              <div className="section-content-holder float-right">
                <div className="content-wrapper">
                  <div className="info-text">
                    My modest list of services to <br />
                    suit all your digital needs
                  </div>
                  <p>&nbsp;</p>

                  <div className="one_half animate">
                    <div className="service-holder">
                      <div className="service-img">
                        <img src="images/icon_preciese.png" alt="" />
                      </div>
                      <div className="service-txt">
                        <h4>WordPress</h4>
                        Professional Websites Created On WordPress CMS.
                      </div>
                    </div>
                  </div>

                  <div className="one_half last animate">
                    <div className="service-holder">
                      <div className="service-img">
                        <img src="images/icon_support.png" alt="" />
                      </div>
                      <div className="service-txt">
                        <h4>MERN Stack</h4>
                        Complete MERN Stack Apps and Solution.
                      </div>
                    </div>
                  </div>
                  <div className="clear"></div>

                  <div className="one_half animate">
                    <div className="service-holder">
                      <div className="service-img">
                        <img src="images/icon_responsive.png" alt="" />
                      </div>
                      <div className="service-txt">
                        <h4>Graphics Design</h4>
                        Creative and Dedicated Graphics Design Solution.
                      </div>
                    </div>
                  </div>

                  <div className="one_half last animate">
                    <div className="service-holder">
                      <div className="service-img">
                        <img src="images/icon_community.png" alt="" />
                      </div>
                      <div className="service-txt">
                        <h4>Marketing</h4>
                        If You Want TO Increase Your Business Sales.
                      </div>
                    </div>
                  </div>
                  <div className="clear"></div>

                  <div className="one_half animate">
                    <div className="service-holder">
                      <div className="service-img">
                        <img src="images/icon_portfolio.png" alt="" />
                      </div>
                      <div className="service-txt">
                        <h4>Portfolio</h4>A Verity Of Projects Created By Us.
                      </div>
                    </div>
                  </div>

                  <div className="one_half last animate">
                    <div className="service-holder">
                      <div className="service-img">
                        <img src="images/icon_support.png" alt="" />
                      </div>
                      <div className="service-txt">
                        <h4>Satisfaction</h4>
                        100% Client Satisfactory Service.
                      </div>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>

          {/* <!-- Portfolio --> */}
          <div id="portfolio" className="section page-split">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="bg-holder float-left">
                <div className="split-color"></div>
              </div>
              <div className="sticky-spacer">
                <div
                  className="
                  section-title-holder
                  float-left
                  portfolio-title-fix-class
                "
                >
                  <div className="section-top-image">
                    <img src="images/02_left.png" alt="" />
                  </div>
                  <h2 className="entry-title">
                    PORT
                    <br />
                    FOL
                    <br />
                    IO
                  </h2>
                  <p className="page-desc">
                    Check my <br />
                    recent work
                  </p>
                </div>
              </div>

              <div className="section-content-holder float-right">
                <div className="content-wrapper">
                  <div id="portfolio-wrapper">
                    <div className="portfolio-load-content-holder"></div>
                    <div className="grid" id="portfolio-grid">
                      <div className="grid-sizer"></div>

                      <div
                        id="p-item-1"
                        className="grid-item element-item p_one"
                      >
                        <a
                          className="item-link ajax-portfolio"
                          href="portfolio-1.html"
                          data-id="1"
                        >
                          <img src="images/img_01s.jpg" alt="" />
                          <div className="portfolio-text-holder">
                            <p className="portfolio-title">Smartphone</p>
                            <p className="portfolio-desc">BUSINESS CARDS</p>
                          </div>
                        </a>
                      </div>

                      <div
                        id="p-item-2"
                        className="grid-item element-item p_one_half"
                      >
                        <a
                          className="item-link ajax-portfolio"
                          href="portfolio-2.html"
                          data-id="2"
                        >
                          <img src="images/img_02s.jpg" alt="" />
                          <div className="portfolio-text-holder">
                            <p className="portfolio-title">At Work</p>
                            <p className="portfolio-desc">PSD MOCKUP</p>
                          </div>
                        </a>
                      </div>

                      <div
                        id="p-item-3"
                        className="grid-item element-item p_one_half"
                      >
                        <a
                          className="item-link ajax-portfolio"
                          href="portfolio-3.html"
                          data-id="3"
                        >
                          <img src="images/img_10s.jpg" alt="" />
                          <div className="portfolio-text-holder">
                            <p className="portfolio-title">Carbon Bike</p>
                            <p className="portfolio-desc">ULTRAFAST</p>
                          </div>
                        </a>
                      </div>

                      <div className="grid-item element-item p_one_half">
                        <a
                          className="item-link"
                          href="images/img_05s.jpg"
                          data-rel="prettyPhoto[portfolio]"
                        >
                          <img src="images/img_11s.jpg" alt="" />
                          <div className="portfolio-text-holder">
                            <p className="portfolio-title">Tower</p>
                            <p className="portfolio-desc">SKYSCRAPER</p>
                          </div>
                        </a>
                      </div>

                      <div className="grid-item element-item p_one">
                        <a
                          className="item-link"
                          href="https://www.youtube.com/watch?v=15cpIHjEsWI"
                          data-rel="prettyPhoto[portfolio]"
                        >
                          <img src="images/img_12s.jpg" alt="" />
                          <div className="portfolio-text-holder">
                            <p className="portfolio-title">A4 Paper</p>
                            <p className="portfolio-desc">PSD MOCKUP</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="clear"></div>
                  </div>
                  <div
                    className="
                    block
                    center-relative center-text
                    more-posts-portfolio-holder
                  "
                  >
                    <a className="more-posts-portfolio" href="# ">
                      <img src="images/icon_plus.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>

          {/* <!-- Inspire --> */}
          <div id="inspire" className="section full-screen full-width">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="content-wrapper">
                <script>
                  var slider1_speed = "2000"; var slider1_auto = "true"; var
                  slider1_hover = "true";
                </script>
                <div className="image-slider-wrapper relative">
                  <div
                    id="slider1"
                    className="owl-carousel owl-theme image-slider slider"
                  >
                    <div className="owl-item">
                      <a href="#contact" className="scroll">
                        <img src="images/img_01.png" alt="" />
                      </a>
                    </div>
                    <div className="owl-item">
                      <a href="#contact" className="scroll">
                        <img src="images/img_02.png" alt="" />
                      </a>
                    </div>
                    <div className="owl-item">
                      <a href="#contact" className="scroll">
                        <img src="images/img_03.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Skills --> */}
          <div id="skills" className="section page-split">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="bg-holder float-left">
                <div className="split-color"></div>
              </div>
              <div className="sticky-spacer">
                <div className="section-title-holder float-left">
                  <div className="section-top-image">
                    <img src="images/05_left.png" alt="" />
                  </div>
                  <h2 className="entry-title">
                    MY
                    <br />
                    SKI
                    <br />
                    LLS
                  </h2>
                  <p className="page-desc">
                    My set of <br />
                    competences
                  </p>
                </div>
              </div>
              <div className="section-content-holder float-right">
                <div className="content-wrapper">
                  <div className="info-text">
                    Here you will find the details about <br />
                    my talents and standings in different things.
                  </div>
                  <p>&nbsp;</p>

                  <div className="skills-holder">
                    <div className="skill-holder">
                      <div className="skill-percent">90%</div>
                      <div className="skill-text">
                        <span>WordPress</span>
                        <div className="skill">
                          <div className="skill-fill" data-fill="90%"></div>
                        </div>
                      </div>
                    </div>

                    <div className="skill-holder">
                      <div className="skill-percent">70%</div>
                      <div className="skill-text">
                        <span>MERN Stack</span>
                        <div className="skill">
                          <div className="skill-fill" data-fill="70%"></div>
                        </div>
                      </div>
                    </div>

                    <div className="skill-holder">
                      <div className="skill-percent">80%</div>
                      <div className="skill-text">
                        <span>Graphics Design</span>
                        <div className="skill">
                          <div className="skill-fill" data-fill="80%"></div>
                        </div>
                      </div>
                    </div>

                    <div className="skill-holder">
                      <div className="skill-percent">65%</div>
                      <div className="skill-text">
                        <span>Marketing</span>
                        <div className="skill">
                          <div className="skill-fill" data-fill="65%"></div>
                        </div>
                      </div>
                    </div>

                    <div className="skill-holder">
                      <div className="skill-percent">100%</div>
                      <div className="skill-text">
                        <span>Satisfaction</span>
                        <div className="skill">
                          <div className="skill-fill" data-fill="100%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>

          {/* <!-- Pricing --> */}
          <div id="pricing" className="section full-width">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="content-wrapper">
                <div className="two_third">
                  <div className="info-text">
                    Here you will find a detail information about pricing and
                    solution for the work. Please keep in mind that these prices
                    are just rough estimate for further details according to
                    your project you can contact us.
                  </div>
                </div>
                <div className="one_third last">
                  <b>Disclaimer:</b> All these prices are estimated for the
                  basic scale of application. For complete pricing info
                  accroding to the need of project you can contact us.
                </div>
                <div className="clear"></div>

                <div className="one_third">
                  <div className="pricing-table">
                    <div className="pricing-table-header">
                      <div className="pricing-table-title pricing-orange">
                        BASIC
                      </div>
                    </div>
                    <div className="pricing-table-price">$50</div>
                    <div className="pricing-table-desc">Basic Website</div>
                    <div className="pricing-table-content-holder">
                      <ul>
                        <li>5 Pages</li>
                        <li>24/7 Support</li>
                        <li>Up to 5 Plugins</li>
                        <li>Premium Theme</li>
                        <li>Responsive</li>
                      </ul>
                    </div>
                    <a href="#contact" className="pricing-button scroll">
                      CHOOSE
                    </a>
                  </div>
                </div>

                <div className="one_third">
                  <div className="pricing-table">
                    <div className="pricing-table-header">
                      <div className="pricing-table-title pricing-blue">
                        ADVANCED
                      </div>
                    </div>
                    <div className="pricing-table-price">$200</div>
                    <div className="pricing-table-desc">E-Commerce Site</div>
                    <div className="pricing-table-content-holder">
                      <ul>
                        <li>Complete Professional Store</li>
                        <li>24/7 Support</li>
                        <li>Up to 50 Products</li>
                        <li>Payment Integration</li>
                        <li>Premium Themes and Plugins</li>
                      </ul>
                    </div>
                    <a href="#contact" className="pricing-button scroll">
                      CHOOSE
                    </a>
                  </div>
                </div>
                <div className="one_third last">
                  <div className="pricing-table">
                    <div className="pricing-table-header">
                      <div className="pricing-table-title pricing-green">
                        EXPERT
                      </div>
                    </div>
                    <div className="pricing-table-price">$50</div>
                    <div className="pricing-table-desc">
                      Graphics Design(Any One)
                    </div>
                    <div className="pricing-table-content-holder">
                      <ul>
                        <li>Logo Design</li>
                        <li>Complete Book Design</li>
                        <li>Cover Pages or Ads</li>
                        <li>Web Banners or Posters</li>
                        <li>Flip Books</li>
                      </ul>
                    </div>
                    <a href="#contact" className="pricing-button scroll">
                      CHOOSE
                    </a>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
              <div className="clear"></div>
            </div>
          </div>

          {/* <!-- Team --> */}
          <div id="team" className="section page-split">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="bg-holder float-left">
                <div className="split-color"></div>
              </div>
              <div className="sticky-spacer">
                <div className="section-title-holder float-left">
                  <div className="section-top-image">
                    <img src="images/06_left.png" alt="" />
                  </div>
                  <h2 className="entry-title">
                    MEET <br />
                    THE <br />
                    TEAM
                  </h2>
                  <p className="page-desc">
                    Get to know me <br />
                    much better
                  </p>
                </div>
              </div>

              <div className="section-content-holder float-right">
                <div className="content-wrapper">
                  <div id="team-holder">
                    <div className="team-load-content-holder"></div>
                    <ul className="member-holder-wrapper">
                      <li id="team-member-1" className="member-holder one_half">
                        <a
                          className="img-link ajax-member-content"
                          href="team-1.html"
                          data-id="1"
                        >
                          <img
                            className="attachment-post-thumbnail"
                            src="images/HamzaTeam.jpg"
                            alt=""
                          />
                          <div className="member-mask">
                            <div className="member-info-holder">
                              <p className="member-name">M Hamza Nazir</p>
                              <p className="member-position">
                                Developer + Designer
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <div className="clear"></div>
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>

          {/* <!-- Clients --> */}
          <div id="clients" className="section full-width">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="content-wrapper">
                <div className="one_half">
                  <script>
                    var textSlider1_speed = "2000"; var textSlider1_auto =
                    "true"; var textSlider1_hover = "true";
                  </script>
                  <div className="text-slider-wrapper relative">
                    <div className="text-slider-header-quotes"></div>

                    <div
                      id="textSlider1"
                      className="text-slider slider owl-carousel owl-theme"
                    >
                      <div className="text-slide">
                        <p className="text-slide-content">
                          The best designer on Fiver :) He is a very humble and
                          very open mind. he can create amazing and stunning
                          ideas :) his skills are the best :)
                        </p>
                        <img
                          className="text-slide-img"
                          src="images/gian franco.png"
                          alt=""
                        />
                        <p className="text-slide-name">Gian Franco</p>
                        <p className="text-slide-position">
                          CEO <br />
                          Fat Wrecker System
                        </p>
                      </div>

                      <div className="text-slide">
                        <p className="text-slide-content">
                          Easy to work with, goes the extra mile to deliver.
                        </p>
                        <img
                          className="text-slide-img"
                          src="images/dardana.png"
                          alt=""
                        />
                        <p className="text-slide-name">Dardana</p>
                        <p className="text-slide-position">
                          CEO <br />
                          Autodiagnoza
                        </p>
                      </div>

                      <div className="text-slide">
                        <p className="text-slide-content">
                          Thank you so much for the website. The site itself
                          looks amazing and it's so user friendly plus all the
                          functionality that we needed. We will certainly work
                          with you again soon.
                        </p>
                        <img
                          className="text-slide-img"
                          src="images/RL Logo testimonial (1).png"
                          alt=""
                        />
                        <p className="text-slide-name">Rosmery Larbi</p>
                        <p className="text-slide-position">
                          Doctor <br />
                          RL Pain Clinic
                        </p>
                      </div>
                    </div>

                    <div className="clear"></div>
                  </div>
                </div>

                <div className="one_fourth top-80">
                  <img
                    src="images/rlclinic.png"
                    alt=""
                    className="bottom-25 aligncenter"
                  />
                  <img
                    src="images/invites and videos.png"
                    alt=""
                    className="bottom-25 aligncenter"
                  />
                  <img
                    src="images/accuja logo.png"
                    alt=""
                    className="bottom-25 aligncenter"
                  />
                </div>

                <div className="one_fourth last top-80">
                  <img
                    src="images/batter buddies.png"
                    alt=""
                    className="bottom-25 aligncenter"
                  />
                  <img
                    src="images/euniversal care.png"
                    alt=""
                    className="bottom-25 aligncenter"
                  />
                  <img
                    src="images/next level.png"
                    alt=""
                    className="bottom-25 aligncenter"
                  />
                </div>
                <div className="clear"></div>
              </div>
              <div className="clear"></div>
            </div>
          </div>

          {/* <!-- Contact --> */}
          <div id="contact" className="section page-split">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="bg-holder float-left">
                <div className="split-color"></div>
              </div>
              <div className="sticky-spacer">
                <div className="section-title-holder float-left">
                  <div className="section-top-image">
                    <img src="images/07_left.png" alt="" />
                  </div>
                  <h2 className="entry-title">
                    STAY <br />
                    IN <br />
                    TOUCH
                  </h2>
                  <p className="page-desc">
                    Use contact <br />
                    form on the right
                  </p>
                </div>
              </div>

              <div className="section-content-holder float-right">
                <div className="content-wrapper">
                  <div className="info-text">
                    If you have any query about my work <br />
                    or you need pricing and information. <br />
                    Feel free to <b>contact us.</b>
                  </div>
                  <p>&nbsp;</p>

                  <div className="contact-form">
                    <p>
                      <input
                        id="name"
                        type="text"
                        name="your-name"
                        placeholder="Name"
                      />
                    </p>
                    <p>
                      <input
                        id="contact-email"
                        type="email"
                        name="your-email"
                        placeholder="Email"
                      />
                    </p>
                    <p>
                      <input
                        id="subject"
                        type="text"
                        name="your-subject"
                        placeholder="Subject"
                      />
                    </p>
                    <p>
                      <textarea
                        id="message"
                        name="your-message"
                        placeholder="Message"
                      ></textarea>
                    </p>
                    <p className="contact-submit-holder">
                      <input type="submit" value="SEND" />
                    </p>
                  </div>

                  <p>&nbsp;</p>

                  <div className="one_half">
                    I appreciate your concern and happy to resolve your queries.
                    I am looking forward to working with you. <br />
                    <b>Thanks!</b>
                  </div>

                  <div className="one_half last">
                    Phone: +92 303 0235 198 <br />
                    E-mail: hamzanazir0@gmail.com <br />
                    Website: www.hamzanazir.com <br />
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
          </div>

          {/* <!-- Milestones --> */}
          <div id="milestones" className="section full-width">
            <div className="section-wrapper block content-1170 center-relative">
              <div className="content-wrapper">
                <ul className="milestones-holder">
                  <li className="milestone">
                    <p className="milestone-num">50+</p>
                    <p className="milestone-text">
                      Websites <br />
                      Completed
                    </p>
                  </li>
                  <li className="milestone">
                    <p className="milestone-num">10K+</p>
                    <p className="milestone-text">Lines of Code Written</p>
                  </li>
                  <li className="milestone">
                    <p className="milestone-num">30+</p>
                    <p className="milestone-text">Logos and Books Designed</p>
                  </li>
                  <li className="milestone">
                    <p className="milestone-num">20+</p>
                    <p className="milestone-text">
                      Happy <br />
                      clients served
                    </p>
                  </li>
                </ul>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <footer className="footer">
          <div className="footer-content center-relative">
            <div className="footer-mail">
              <a href="mailto:hamzanazir0@gmail.com">hamzanazir0@gmail.com</a>
            </div>
            <div className="footer-number">
              <a href="tel:00923030235198">+92 (303) 0235 198</a>
            </div>
            <div className="footer-info">
              Faisalabad <br />
              Pakistan
            </div>

            <div className="social-holder">
              <a href="https://www.instagram.com/hamzanazir0/">
                <span className="fa fa-instagram"></span>
              </a>
              <a href="https://www.facebook.com/Hamza.HN198/">
                <span className="fa fa-facebook"></span>
              </a>
            </div>

            <div className="copyright-holder">
              © 2021 Designed By:
              <a href="http://Hamzanazir.com">Hamza Nazir</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
