import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Head from "next/head";
import Link from "next/link";
import "plyr-react/dist/plyr.css";
import { useRef } from "react";
import { useSelector } from "react-redux";
import Header from "../components/layout/Header";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

const Id = () => {
  const { fullExperience } = useSelector((state) => state.settings);
  const parallax = useRef(null);
  const plyr = useRef(null);

  const onMouseOver = (e) => {
    document.getElementById("earth_background-text").style.display = "block";
  };

  const onMouseLeave = (e) => {
    document.getElementById("earth_background-text").style.display = "none";
  };
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossorigin="anonymous"
        />
      </Head>

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." height="36"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li>
              <hr className="dropdown-divider"/>
            </li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
      <Header />
      <Parallax
        ref={parallax}
        pages={3}
        offset={1}
        speed={1}
        style={{ backgroundColor: "#020205" }}
      >
        <Parallax />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#020205" }}
        />
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none", display: "none" }}
        >
          <img
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "70%" }}
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
            alt=""
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
            alt=""
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
            alt=""
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
            alt=""
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
            alt=""
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
            alt=""
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
            alt=""
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h3
            id="earth_background-text"
            style={{ display: "none" }}
            className="earth_background-text"
          >
            Portland Oregon
          </h3>

          <Link id="toggler" className="toggler" href="/contact">
            <img
              className="animate-flicker glitch "
              src={url("earth")}
              style={{ width: "50%" }}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
              alt=""
            />
          </Link>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
            display: "none",
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={1.2}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.8}
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <section className="blog-posts grid-system">
            <div className="container">
              <div className="row container">
                <div className="col-lg-8 ">
                  <div className="all-blog-posts ">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="blog-post">
                          <div className="blog-thumb">
                            <img
                              style={{ width: "100%", height: "50%" }}
                              src="https://etimg.etb2bimg.com/photo/71884644.cms"
                              alt=""
                            />
                          </div>
                          <div className="down-content">
                            <span>Lifestyle</span>
                            <a href="post-details.html">
                              <h4>Aenean pulvinar gravida sem nec</h4>
                            </a>
                            <ul className="post-info">
                              <li>
                                <a href="#">Admin</a>
                              </li>
                              <li>
                                <a href="#">May 12, 2020</a>
                              </li>
                              <li>
                                <a href="#">10 Comments</a>
                              </li>
                            </ul>
                            <p>
                              asdvasdvsadvsvdsads Lorem ipsum dolor sit amet
                              consectetur adipisicing elit. Veniam, odit! Lorem,
                              ipsum dolor sit amet consectetur adipisicing elit.
                              A iste perspiciatis nam pariatur iusto unde
                              dolore, cum deleniti eum. Ut.
                            </p>
                            <div className="post-options">
                              <div className="row">
                                <div className="col-6">
                                  <ul className="post-tags">
                                    <li>
                                      <i className="fa fa-tags"></i>
                                    </li>
                                    <li>
                                      <a href="#">Best </a>,
                                    </li>
                                    <li>
                                      <a href="#">Tasam</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6">
                                  <ul className="post-share">
                                    <li>
                                      <i className="fa fa-share-alt"></i>
                                    </li>
                                    <li>
                                      <a href="#">Facebook</a>,
                                    </li>
                                    <li>
                                      <a href="#"> Twitter</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="sidebar-item comments">
                          <div className="sidebar-heading">
                            <h2>4 comments</h2>
                          </div>
                          <div className="content">
                            <ul>
                              <li>
                                <div className="author-thumb">
                                  <img src="https://etimg.etb2bimg.com/photo/71884644.cms" />
                                </div>
                                <div className="right-content">
                                  <h4>
                                    Charles Kate<span>May 16, 2020</span>
                                  </h4>
                                  <p>
                                    Fusce ornare mollis eros. Duis et diam vitae
                                    justo fringilla condimentum eu quis leo.
                                    Vestibulum id turpis porttitor sapien
                                    facilisis scelerisque. Curabitur a nisl eu
                                    lacus convallis eleifend posuere id tellus.
                                  </p>
                                </div>
                              </li>
                              <li className="replied">
                                <div className="author-thumb">
                                  <img
                                    src="https://etimg.etb2bimg.com/photo/71884644.cms"
                                    alt=""
                                  />
                                </div>
                                <div className="right-content">
                                  <h4>
                                    Thirteen Man<span>May 20, 2020</span>
                                  </h4>
                                  <p>
                                    In porta urna sed venenatis sollicitudin.
                                    Praesent urna sem, pulvinar vel mattis eget.
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="author-thumb">
                                  <img
                                    src="https://etimg.etb2bimg.com/photo/71884644.cms"
                                    alt=""
                                  />
                                </div>
                                <div className="right-content">
                                  <h4>
                                    Belisimo Mama<span>May 16, 2020</span>
                                  </h4>
                                  <p>
                                    Nullam nec pharetra nibh. Cras tortor nulla,
                                    faucibus id tincidunt in, ultrices eget
                                    ligula. Sed vitae suscipit ligula.
                                    Vestibulum id turpis volutpat, lobortis
                                    turpis ac, molestie nibh.
                                  </p>
                                </div>
                              </li>
                              <li className="replied">
                                <div className="author-thumb">
                                  <img
                                    src="https://etimg.etb2bimg.com/photo/71884644.cms"
                                    alt=""
                                  />
                                </div>
                                <div className="right-content">
                                  <h4>
                                    Thirteen Man<span>May 22, 2020</span>
                                  </h4>
                                  <p>
                                    Mauris sit amet justo vulputate, cursus
                                    massa congue, vestibulum odio. Aenean elit
                                    nunc, gravida in erat sit amet, feugiat
                                    viverra leo.
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="sidebar-item submit-comment">
                          <div className="sidebar-heading">
                            <h2>Your comment</h2>
                          </div>
                          <div className="content">
                            <form id="comment" action="#" method="post">
                              <div className="row">
                                <div className="col-md-6 col-sm-12">
                                  <fieldset>
                                    <input
                                      className="comment_form"
                                      name="name"
                                      type="text"
                                      id="name"
                                      placeholder="Your name"
                                      required=""
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                  <fieldset>
                                    <input
                                      name="email"
                                      type="text"
                                      className="comment_form"
                                      id="email"
                                      placeholder="Your email"
                                      required=""
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                  <fieldset>
                                    <input
                                      className="comment_form"
                                      name="subject"
                                      type="text"
                                      id="subject"
                                      placeholder="Subject"
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-lg-12">
                                  <fieldset>
                                    <textarea
                                      name="message"
                                      rows="6"
                                      className="comment_form"
                                      id="message"
                                      placeholder="Type your comment"
                                      required=""
                                    ></textarea>
                                  </fieldset>
                                </div>
                                <div className="col-lg-12">
                                  <fieldset>
                                    <button
                                      type="submit"
                                      id="form-submit"
                                      className="main-button"
                                    >
                                      Submit
                                    </button>
                                  </fieldset>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sidebar">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="sidebar-item recent-posts">
                          <div className="sidebar-heading">
                            <h2>Recent Posts</h2>
                          </div>
                          <div className="content">
                            <ul>
                              <li>
                                <a href="post-details.html">
                                  <h5>
                                    Vestibulum id turpis porttitor sapien
                                    facilisis scelerisque
                                  </h5>
                                  <span>May 31, 2020</span>
                                </a>
                              </li>
                              <li>
                                <a href="post-details.html">
                                  <h5>
                                    Suspendisse et metus nec libero ultrices
                                    varius eget in risus
                                  </h5>
                                  <span>May 28, 2020</span>
                                </a>
                              </li>
                              <li>
                                <a href="post-details.html">
                                  <h5>
                                    Swag hella echo park leggings, shaman
                                    cornhole ethical coloring
                                  </h5>
                                  <span>May 14, 2020</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="sidebar-item categories">
                          <div className="sidebar-heading">
                            <h2>Categories</h2>
                          </div>
                          <div className="content">
                            <ul>
                              <li>
                                <a href="#">- Nature Lifestyle</a>
                              </li>
                              <li>
                                <a href="#">- Awesome Layouts</a>
                              </li>
                              <li>
                                <a href="#">- Creative Ideas</a>
                              </li>
                              <li>
                                <a href="#">- Responsive Templates</a>
                              </li>
                              <li>
                                <a href="#">- HTML5 / CSS3 Templates</a>
                              </li>
                              <li>
                                <a href="#">- Creative &amp; Unique</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="sidebar-item tags">
                          <div className="sidebar-heading">
                            <h2>Tag Clouds</h2>
                          </div>
                          <div className="content">
                            <ul>
                              <li>
                                <a href="#">Lifestyle</a>
                              </li>
                              <li>
                                <a href="#">Creative</a>
                              </li>
                              <li>
                                <a href="#">HTML5</a>
                              </li>
                              <li>
                                <a href="#">Inspiration</a>
                              </li>
                              <li>
                                <a href="#">Mo tivation</a>
                              </li>
                              <li>
                                <a href="#">PSD</a>
                              </li>
                              <li>
                                <a href="#">Responsive</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={url("clients-main")} style={{ width: "40%" }} alt="" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Id;
