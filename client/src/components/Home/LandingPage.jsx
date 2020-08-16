import React from "react";

export default function LandingPage() {
  return (
    <div>
      {/* <head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<title> Zonebiz - Business Consulting Bootstrap4 Responsive Template </title>
	<!-- Bootstrap core CSS -->
	<link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<!-- Fontawesome CSS -->
	<link href="css/all.css" rel="stylesheet">
	<!-- Owl Carousel CSS -->
	<link href="css/owl.carousel.min.css" rel="stylesheet">
	<!-- Owl Carousel CSS -->
	<link href="css/jquery.fancybox.min.css" rel="stylesheet">
	<!-- Custom styles for this template -->
	<link href="css/style.css" rel="stylesheet">
</head> */}
      {/* <body> */}
      <div class="wrapper-main">
        {/* <!-- Top Bar --> */}
        <div class="top-bar">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="social-media">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="contact-details">
                  <ul>
                    <li>
                      <i class="fas fa-phone fa-rotate-90"></i> +01 899 286 777
                    </li>
                    <li>
                      <i class="fas fa-map-marker-alt"></i> 8/99 , North khailkoir, NY
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navigation --> */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-light top-nav">
          <div class="container">
            <a class="navbar-brand" href="index.html">
              <img
                src="https://content3.jdmagicbox.com/comp/ahmedabad/x5/079pxx79.xx79.150917134520.v1x5/catalogue/panah-foundation-sahijpur-bogha-ahmedabad-charitable-trusts-2td45kseu7.jpg"
                width="100 px"
                height="100 px"
                alt="logo"
              />
            </a>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="fas fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link active" href="index.html">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="services.html">
                    Services
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link"
                    href="#"
                    id="navbarDropdownBlog"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages <i class="fas fa-sort-down"></i>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownBlog"
                  >
                    <a class="dropdown-item" href="faq.html">
                      FAQ
                    </a>
                    <a class="dropdown-item" href="404.html">
                      404
                    </a>
                    <a class="dropdown-item" href="pricing.html">
                      Pricing Table
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="login.html">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="signup.html">
                    SignUp
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="labour.html">
                    Labour Laws
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header class="slider-main">
          <div
            id="carouselExampleIndicators"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
              <div
                class="carousel-item active"
                style={{backgroundImage: "url('https://projectheena.com/uploads/ngo/38154791185648/profileImage/images/panah-foundation.png')"}}
              >
                <div class="carousel-caption d-none d-md-block">
                  <h3>Welcome to Panah Foundation</h3>
                  <p>Its All About Seva</p>
                </div>
              </div>
              {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
              <div
                class="carousel-item"
                style={{
                  backgroundImage:
                    "url('https://content3.jdmagicbox.com/comp/ahmedabad/x5/079pxx79.xx79.150917134520.v1x5/catalogue/panah-foundation-sahijpur-bogha-ahmedabad-charitable-trusts-2td45kseu7.jpg')",
                }}
              >
                <div class="carousel-caption d-none d-md-block">
                  <h3>Welcome to Panah Foundation</h3>
                  <p>Its All About Seva</p>
                </div>
              </div>
              {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
              <div
                class="carousel-item"
                style={{
                  backgroundImage:
                    "url('https://content3.jdmagicbox.com/comp/ahmedabad/x5/079pxx79.xx79.150917134520.v1x5/catalogue/panah-foundation-sahijpur-bogha-ahmedabad-charitable-trusts-o6ur32xs43.jpg?clr=462d20')",
                }}
              >
                <div class="carousel-caption d-none d-md-block">
                  <h3>Welcome to Panah Foundation</h3>
                  <p>Its All About Seva</p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </header>

        {/* <!-- Page Content --> */}
        <div class="container">
          {/* <!-- About Section --> */}
          <div class="about-main">
            <div class="row">
              <div class="col-lg-6">
                <h2>Welcome to Panah Foundation</h2>
                <p>
                  Panah is registered as a not for profit organization in 2015. works with migrant
                  laborers and daily wage earners to provide skill development opportunities and
                  support them in access to information and Education for Kids.
                </p>
                <p>
                  It also supports the laborers to seek jobs, organize themselves as collectives,
                  avail savings and credit facilities, linking them to Government/Semi-government
                  welfare schemes and social securities thus enabling them to become smart laborers.{" "}
                </p>
                <h5>Our smart approach</h5>
                <ul>
                  <li>
                    PANAH work for the multiple needs of the poor at once by providing them with
                    one-stop centres, through which slum residents have access to basic services.
                  </li>
                  <li>
                    {" "}
                    PANAH invests in human capacity of persons to manage Panah programs in their
                    communities.
                  </li>
                  <li>
                    Panah engages institutions, corporate and individuals throughout the world as
                    partners and supporters of integrated development in Ahmadabad.
                  </li>
                  <li>
                    Panah works with slum residents, migrants, children, women, youth and vulnerable
                    people in urban and rural areas.
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <img
                  class="img-fluid rounded"
                  src="https://scontent.fjai1-2.fna.fbcdn.net/v/t1.0-9/13327581_1166049400113259_7065520445872151107_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=a7O2q0J3-KkAX9QJ46c&_nc_ht=scontent.fjai1-2.fna&oh=bf3c4bb7d31d10127f2880b7d9356db6&oe=5F5EF483"
                  width="200 px"
                  alt=""
                />
              </div>
            </div>
            {/* <!-- /.row --> */}
          </div>
        </div>

        <div class="services-bar">
          <div class="container">
            <h1 class="py-4">Our Best Schemes </h1>
            {/* <!-- Services Section --> */}
            <div class="row">
              <div class="col-lg-4 mb-4">
                <div class="card h-100">
                  <div class="card-img">
                    <img
                      class="img-fluid"
                      src="https://www.jagranimages.com/images/23_10_2018-pm-jeevan-jyoti-bima_18560669_91446561.jpg"
                      alt=""
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-header"> Pradhan Mantri Jan Dhan Yojana </h4>
                    <p class="card-text">
                      Pradhan Mantri Jeevan Jyoti Bima Yojana (english translation: Prime Minister
                      Jeevan Jyoti Insurance Scheme) is a government-backed Life insurance scheme in
                      India. It was originally mentioned in the 2015 Budget speech by Finance
                      Minister Arun Jaitley in February 2015.[1
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card h-100">
                  <div class="card-img">
                    <img
                      class="img-fluid"
                      src="https://qphs.fs.quoracdn.net/main-qimg-3c71870a66ff69bbba2f3e1bc50af905"
                      alt=""
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-header"> National Social Assistance Scheme </h4>
                    <p class="card-text">
                      The National Social Assistance Programme (NSAP) is a Centrally Sponsored
                      Scheme of the Government of India that provides financial assistance to the
                      elderly, widows and persons with disabilities in the form of social pensions.
                    </p>
                    <p class="card-text">
                      The NSAP is launched with the aim of providing social assistance to destitutes
                      "defined as any person who has little or no regular means of subsistence from
                      his/her own source of income or through financial support from family members
                      or other sources".
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card h-100">
                  <div class="card-img">
                    <img
                      class="img-fluid"
                      src="https://www.companyvakil.com/pro/blog/wp-content/uploads/sites/4/2018/11/images-4-2.jpeg"
                      alt=""
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-header"> PM Rozgar Yojana </h4>
                    <p class="card-text">
                      Prime Minister’s Rozgar Yojana (PMRY) is initiated by Central Government of
                      India to provide sustainable self-employment opportunities to 10 lakh educated
                      unemployed youth and women in India. Launched in 1993, PMRY initiated this
                      cause by offering financial assistance in starting one’s own enterprise in
                      trade, manufacturing, and and services sectors.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card h-100">
                  <div class="card-img">
                    <img class="img-fluid" src="" alt="" />
                  </div>
                  <div class="card-body">
                    <h4 class="card-header"> Education Scheme </h4>
                    <p class="card-text"></p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card h-100">
                  <div class="card-img">
                    <img
                      class="img-fluid"
                      src="https://sarkariyojanagyan.com/wp-content/uploads/2019/08/ujala-yojana-768x432.jpg"
                      alt=""
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-header"> Ujala Yojana </h4>
                    <p class="card-text">
                      Unnat Jyoti by Affordable LEDs for All (UJALA) was launched by Prime Minister
                      of India Narendra Modi on 1 May 2015, replacing the "Bachat Lamp Yojana".The
                      project is spearheaded by the Energy Efficiency Services Limited.In
                      non-subsidized LED lamp distribution projects, this program is considered the
                      world's largest.In May 2017, the Government of India announced that they were
                      expanding the LED distribution project to the United Kingdom.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- /.row --> */}
            </div>
          </div>

          <div class="container">
            {/* <!-- Portfolio Section --> */}
            <div class="portfolio-main">
              <h2>Our Portfolio</h2>
              <div class="col-lg-12">
                <div class="project-menu text-center">
                  <button class="btn btn-primary active" data-filter="*">
                    All
                  </button>
                  <button data-filter=".business" class="btn btn-primary">
                    Business
                  </button>
                  <button data-filter=".travel" class="btn btn-primary">
                    Travel
                  </button>
                  <button data-filter=".financial" class="btn btn-primary">
                    Financial
                  </button>
                  <button data-filter=".academic" class="btn btn-primary">
                    Academic
                  </button>
                </div>
              </div>
              <div id="projects" class="projects-main row">
                <div class="col-lg-4 col-sm-6 pro-item portfolio-item financial">
                  <div class="card h-100">
                    <div class="card-img">
                      <a href="images/portfolio-img-01.jpg" data-fancybox="images">
                        <img class="card-img-top" src="images/portfolio-img-01.jpg" alt="" />
                        <div class="overlay">
                          <i class="fas fa-arrows-alt"></i>
                        </div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="#">Financial Sustainability</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6 pro-item portfolio-item business academic">
                  <div class="card h-100">
                    <div class="card-img">
                      <a href="images/portfolio-img-02.jpg" data-fancybox="images">
                        <img class="card-img-top" src="images/portfolio-img-02.jpg" alt="" />
                        <div class="overlay">
                          <i class="fas fa-arrows-alt"></i>
                        </div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="#">Financial Sustainability</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6 pro-item portfolio-item travel">
                  <div class="card h-100">
                    <div class="card-img">
                      <a href="images/portfolio-img-03.jpg" data-fancybox="images">
                        <img class="card-img-top" src="images/portfolio-img-03.jpg" alt="" />
                        <div class="overlay">
                          <i class="fas fa-arrows-alt"></i>
                        </div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="#">Financial Sustainability</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6 pro-item portfolio-item business">
                  <div class="card h-100">
                    <div class="card-img">
                      <a href="images/portfolio-img-04.jpg" data-fancybox="images">
                        <img class="card-img-top" src="images/portfolio-img-04.jpg" alt="" />
                        <div class="overlay">
                          <i class="fas fa-arrows-alt"></i>
                        </div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="#">Financial Sustainability</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6 pro-item portfolio-item travel">
                  <div class="card h-100">
                    <div class="card-img">
                      <a href="images/portfolio-img-05.jpg" data-fancybox="images">
                        <img class="card-img-top" src="images/portfolio-img-05.jpg" alt="" />
                        <div class="overlay">
                          <i class="fas fa-arrows-alt"></i>
                        </div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="#">Financial Sustainability</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-6 pro-item portfolio-item financial academic">
                  <div class="card h-100">
                    <div class="card-img">
                      <a href="images/portfolio-img-01.jpg" data-fancybox="images">
                        <img class="card-img-top" src="images/portfolio-img-01.jpg" alt="" />
                        <div class="overlay">
                          <i class="fas fa-arrows-alt"></i>
                        </div>
                      </a>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="#">Financial Sustainability</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /.row --> */}
            </div>
          </div>

          <div class="blog-slide">
            <div class="container">
              <h2>Our Blog</h2>
              <div class="row">
                <div class="col-lg-12">
                  <div id="blog-slider" class="owl-carousel">
                    <div class="post-slide">
                      <div class="post-header">
                        <h4 class="title">
                          <a href="#">Latest blog Post</a>
                        </h4>
                        <ul class="post-bar">
                          <li>
                            <img src="images/testi_01.png" alt="" />
                            <a href="#">Williamson</a>
                          </li>
                          <li>
                            <i class="fa fa-calendar"></i>02 June 2018
                          </li>
                        </ul>
                      </div>
                      <div class="pic">
                        <img src="images/img-1.jpg" alt="" />
                        <ul class="post-category">
                          <li>
                            <a href="#">Business</a>
                          </li>
                          <li>
                            <a href="#">Financ</a>
                          </li>
                        </ul>
                      </div>
                      <p class="post-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida
                        nulla eu massa efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit
                        ac.
                      </p>
                    </div>

                    <div class="post-slide">
                      <div class="post-header">
                        <h4 class="title">
                          <a href="#">Latest blog Post</a>
                        </h4>
                        <ul class="post-bar">
                          <li>
                            <img src="images/testi_02.png" alt="" />
                            <a href="#">Kristiana</a>
                          </li>
                          <li>
                            <i class="fa fa-calendar"></i>05 June 2018
                          </li>
                        </ul>
                      </div>
                      <div class="pic">
                        <img src="images/img-2.jpg" alt="" />
                        <ul class="post-category">
                          <li>
                            <a href="#">Business</a>
                          </li>
                          <li>
                            <a href="#">Financ</a>
                          </li>
                        </ul>
                      </div>
                      <p class="post-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida
                        nulla eu massa efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit
                        ac.
                      </p>
                    </div>

                    <div class="post-slide">
                      <div class="post-header">
                        <h4 class="title">
                          <a href="#">Latest blog Post</a>
                        </h4>
                        <ul class="post-bar">
                          <li>
                            <img src="images/testi_01.png" alt="" />
                            <a href="#">Kristiana</a>
                          </li>
                          <li>
                            <i class="fa fa-calendar"></i>05 June 2018
                          </li>
                        </ul>
                      </div>
                      <div class="pic">
                        <img src="images/img-3.jpg" alt="" />
                        <ul class="post-category">
                          <li>
                            <a href="#">Business</a>
                          </li>
                          <li>
                            <a href="#">Financ</a>
                          </li>
                        </ul>
                      </div>
                      <p class="post-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida
                        nulla eu massa efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit
                        ac.
                      </p>
                    </div>

                    <div class="post-slide">
                      <div class="post-header">
                        <h4 class="title">
                          <a href="#">Latest blog Post</a>
                        </h4>
                        <ul class="post-bar">
                          <li>
                            <img src="images/testi_02.png" alt="" />
                            <a href="#">Kristiana</a>
                          </li>
                          <li>
                            <i class="fa fa-calendar"></i>05 June 2018
                          </li>
                        </ul>
                      </div>
                      <div class="pic">
                        <img src="images/img-4.jpg" alt="" />
                        <ul class="post-category">
                          <li>
                            <a href="#">Business</a>
                          </li>
                          <li>
                            <a href="#">Financ</a>
                          </li>
                        </ul>
                      </div>
                      <p class="post-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida
                        nulla eu massa efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit
                        ac.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Contact Us --> */}
          <div class="touch-line">
            <div class="container">
              <div class="row">
                <div class="col-md-8">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita,
                    saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias
                    asperiores commodi.
                  </p>
                </div>
                <div class="col-md-4">
                  <a class="btn btn-lg btn-secondary btn-block" href="#">
                    {" "}
                    Contact Us{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- /.container -->
    <!--footer starts from here--> */}
          <footer class="footer">
            <div class="container bottom_border">
              <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 col">
                  <h5 class="headin5_amrc col_white_amrc pt2">About Us</h5>
                  {/* <!--headin5_amrc--> */}
                  <p class="mb10">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s
                  </p>
                  <ul class="footer-social">
                    <li>
                      <a class="facebook hb-xs-margin" href="#">
                        <span class="hb hb-xs spin hb-facebook">
                          <i class="fab fa-facebook-f"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a class="twitter hb-xs-margin" href="#">
                        <span class="hb hb-xs spin hb-twitter">
                          <i class="fab fa-twitter"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a class="instagram hb-xs-margin" href="#">
                        <span class="hb hb-xs spin hb-instagram">
                          <i class="fab fa-instagram"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a class="googleplus hb-xs-margin" href="#">
                        <span class="hb hb-xs spin hb-google-plus">
                          <i class="fab fa-google-plus-g"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a class="dribbble hb-xs-margin" href="#">
                        <span class="hb hb-xs spin hb-dribbble">
                          <i class="fab fa-dribbble"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
                  {/* <!--headin5_amrc--> */}
                  <ul class="footer_ul_amrc">
                    <li>
                      <a href="#">
                        <i class="fas fa-long-arrow-alt-right"></i>Default Version
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-long-arrow-alt-right"></i>Boxed Version
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-long-arrow-alt-right"></i>Our Team{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-long-arrow-alt-right"></i>About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-long-arrow-alt-right"></i>Our Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-long-arrow-alt-right"></i>Get In Touch
                      </a>
                    </li>
                  </ul>
                  {/* <!--footer_ul_amrc ends here--> */}
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col">
                  <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>
                  {/* <!--headin5_amrc ends here--> */}
                  <ul class="footer_ul2_amrc">
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter fleft padding-right"></i>{" "}
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy...<a href="#">https://www.lipsum.com/</a>
                      </p>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter fleft padding-right"></i>{" "}
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy...<a href="#">https://www.lipsum.com/</a>
                      </p>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter fleft padding-right"></i>{" "}
                      </a>
                      <p>
                        Lorem Ipsum is simply dummy...<a href="#">https://www.lipsum.com/</a>
                      </p>
                    </li>
                  </ul>
                  {/* <!--footer_ul2_amrc ends here--> */}
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 ">
                  <div class="news-box">
                    <h5 class="headin5_amrc col_white_amrc pt2">Newsletter</h5>
                    <p>
                      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                      adipisci velit...
                    </p>
                    <form action="#">
                      <div class="input-group">
                        <input class="form-control" placeholder="Search for..." type="text" />
                        <span class="input-group-btn">
                          <button class="btn btn-secondary" type="button">
                            Go!
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <p class="copyright text-center">
                All Rights Reserved. &copy; 2018 <a href="#">Zonebiz</a> Design By :
                <a href="https://html.design/">html design</a>
              </p>
            </div>
          </footer>
        </div>

        {/* <!-- Bootstrap core JavaScript -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="js/imagesloaded.pkgd.min.js"></script>
<script src="js/isotope.pkgd.min.js"></script>
<script src="js/filter.js"></script>
<script src="js/jquery.appear.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/jquery.fancybox.min.js"></script>
<script src="js/script.js"></script> */}
      </div>
    </div>
  );
}
