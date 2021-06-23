import React from "react";

const Services = () => {
  return (
    <div>
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
    </div>
  );
};

export default Services;
