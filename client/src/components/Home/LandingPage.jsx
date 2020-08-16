import React from "react";
import "./LandingPage.css";
import  Logo  from "./panah-foundation.png";

export default function LandingPage() {
  return (
    <div class="LandingPage">
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
        <img src={ Logo } class="panah" />
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
