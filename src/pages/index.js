import * as React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
// import 'flickity-fade';
// import 'flickity-imagesloaded';
import AOS from 'aos';
// import Flickity from "flickity";
// import 'flickity-as-nav-for';
import "aos/dist/aos.css";
// import Carousel from "../components/Carousel";
import loadable from '@loadable/component'

const Carousel = loadable(() => import('../components/Carousel'))

// const flickityOptions = {
//   initialIndex: 1,
//   fade: true,
//   imagesLoaded: true,
//   pageDots: false,
//   // prevNextButtons: false, 
//   asNavFor: "#blogSlider",
//   draggable: false,
// }

// markup
const IndexPage = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();


    // var flktyA = new Flickity('.hero-slider', {
    //   imagesLoaded: true, pageDots: false, draggable: false, autoPlay: 3000, accessibility: true, wrapAround: true,
    // });
    // var flktyB = new Flickity('.gallery-b', {
    //   fade: true, pageDots: false, adaptiveHeight: true, prevNextButtons: false, asNavFor: ".hero-slider"
    // });

  }, [])
  return (
    <Layout>
      <SEO />
      <main>
        <section className="pt-6 pt-md-11 pb-11 pb-md-13">
          <div className="container-lg">
            <div className="justify-content-center row">
              <div
                className="col-md-10 col-lg-8 col-xl-7 text-center aos-init aos-animate"
                data-aos="fade-up"
              >
                <h1 className="display-3 mb-4">
                  {/* The new standard in print-on-demand */}
                  Tiêu chuẩn mới của print-on-demand
                </h1>
                <p className="font-size-lg text-muted px-8">
                  {/* Take your business to new heights with a fulfillment network
                  that's built for speed and scale. */}
                  Vươn đến tầm cao giúp kinh doanh tăng trưởng bằng hệ thống fulfillment chất lượng, quy mô và nhanh chóng.
                </p>
                <a
                  className="btn btn-primary lift"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/"
                >
                  Bắt Đầu
                  {/* Get Started */}
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="position-relative">
          <div className="shape shape-fluid-x shape-bottom text-white pb-14">
            <div className="shape-img pb-8 pb-md-11">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none">
                <path d="M0 0h100v25H75L25 50H0z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        <section className="bg-light">
          <div className="container-lg">
            <div className="row no-gutters">
              <div className="col-12">
                <div className="position-absolute top-right text-primary-light mt-n8 mr-n1">
                  <svg
                    width={185}
                    height={186}
                    viewBox="0 0 185 186"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                    <circle cx={22} cy={2} r={2} fill="currentColor" />
                    <circle cx={42} cy={2} r={2} fill="currentColor" />
                    <circle cx={62} cy={2} r={2} fill="currentColor" />
                    <circle cx={82} cy={2} r={2} fill="currentColor" />
                    <circle cx={102} cy={2} r={2} fill="currentColor" />
                    <circle cx={122} cy={2} r={2} fill="currentColor" />
                    <circle cx={142} cy={2} r={2} fill="currentColor" />
                    <circle cx={162} cy={2} r={2} fill="currentColor" />
                    <circle cx={182} cy={2} r={2} fill="currentColor" />
                    <circle cx={2} cy={22} r={2} fill="currentColor" />
                    <circle cx={22} cy={22} r={2} fill="currentColor" />
                    <circle cx={42} cy={22} r={2} fill="currentColor" />
                    <circle cx={62} cy={22} r={2} fill="currentColor" />
                    <circle cx={82} cy={22} r={2} fill="currentColor" />
                    <circle cx={102} cy={22} r={2} fill="currentColor" />
                    <circle cx={122} cy={22} r={2} fill="currentColor" />
                    <circle cx={142} cy={22} r={2} fill="currentColor" />
                    <circle cx={162} cy={22} r={2} fill="currentColor" />
                    <circle cx={182} cy={22} r={2} fill="currentColor" />
                    <circle cx={2} cy={42} r={2} fill="currentColor" />
                    <circle cx={22} cy={42} r={2} fill="currentColor" />
                    <circle cx={42} cy={42} r={2} fill="currentColor" />
                    <circle cx={62} cy={42} r={2} fill="currentColor" />
                    <circle cx={82} cy={42} r={2} fill="currentColor" />
                    <circle cx={102} cy={42} r={2} fill="currentColor" />
                    <circle cx={122} cy={42} r={2} fill="currentColor" />
                    <circle cx={142} cy={42} r={2} fill="currentColor" />
                    <circle cx={162} cy={42} r={2} fill="currentColor" />
                    <circle cx={182} cy={42} r={2} fill="currentColor" />
                    <circle cx={2} cy={62} r={2} fill="currentColor" />
                    <circle cx={22} cy={62} r={2} fill="currentColor" />
                    <circle cx={42} cy={62} r={2} fill="currentColor" />
                    <circle cx={62} cy={62} r={2} fill="currentColor" />
                    <circle cx={82} cy={62} r={2} fill="currentColor" />
                    <circle cx={102} cy={62} r={2} fill="currentColor" />
                    <circle cx={122} cy={62} r={2} fill="currentColor" />
                    <circle cx={142} cy={62} r={2} fill="currentColor" />
                    <circle cx={162} cy={62} r={2} fill="currentColor" />
                    <circle cx={182} cy={62} r={2} fill="currentColor" />
                    <circle cx={2} cy={82} r={2} fill="currentColor" />
                    <circle cx={22} cy={82} r={2} fill="currentColor" />
                    <circle cx={42} cy={82} r={2} fill="currentColor" />
                    <circle cx={62} cy={82} r={2} fill="currentColor" />
                    <circle cx={82} cy={82} r={2} fill="currentColor" />
                    <circle cx={102} cy={82} r={2} fill="currentColor" />
                    <circle cx={122} cy={82} r={2} fill="currentColor" />
                    <circle cx={142} cy={82} r={2} fill="currentColor" />
                    <circle cx={162} cy={82} r={2} fill="currentColor" />
                    <circle cx={182} cy={82} r={2} fill="currentColor" />
                    <circle cx={2} cy={102} r={2} fill="currentColor" />
                    <circle cx={22} cy={102} r={2} fill="currentColor" />
                    <circle cx={42} cy={102} r={2} fill="currentColor" />
                    <circle cx={62} cy={102} r={2} fill="currentColor" />
                    <circle cx={82} cy={102} r={2} fill="currentColor" />
                    <circle cx={102} cy={102} r={2} fill="currentColor" />
                    <circle cx={122} cy={102} r={2} fill="currentColor" />
                    <circle cx={142} cy={102} r={2} fill="currentColor" />
                    <circle cx={162} cy={102} r={2} fill="currentColor" />
                    <circle cx={182} cy={102} r={2} fill="currentColor" />
                    <circle cx={2} cy={122} r={2} fill="currentColor" />
                    <circle cx={22} cy={122} r={2} fill="currentColor" />
                    <circle cx={42} cy={122} r={2} fill="currentColor" />
                    <circle cx={62} cy={122} r={2} fill="currentColor" />
                    <circle cx={82} cy={122} r={2} fill="currentColor" />
                    <circle cx={102} cy={122} r={2} fill="currentColor" />
                    <circle cx={122} cy={122} r={2} fill="currentColor" />
                    <circle cx={142} cy={122} r={2} fill="currentColor" />
                    <circle cx={162} cy={122} r={2} fill="currentColor" />
                    <circle cx={182} cy={122} r={2} fill="currentColor" />
                    <circle cx={2} cy={142} r={2} fill="currentColor" />
                    <circle cx={22} cy={142} r={2} fill="currentColor" />
                    <circle cx={42} cy={142} r={2} fill="currentColor" />
                    <circle cx={62} cy={142} r={2} fill="currentColor" />
                    <circle cx={82} cy={142} r={2} fill="currentColor" />
                    <circle cx={102} cy={142} r={2} fill="currentColor" />
                    <circle cx={122} cy={142} r={2} fill="currentColor" />
                    <circle cx={142} cy={142} r={2} fill="currentColor" />
                    <circle cx={162} cy={142} r={2} fill="currentColor" />
                    <circle cx={182} cy={142} r={2} fill="currentColor" />
                    <circle cx={2} cy={162} r={2} fill="currentColor" />
                    <circle cx={22} cy={162} r={2} fill="currentColor" />
                    <circle cx={42} cy={162} r={2} fill="currentColor" />
                    <circle cx={62} cy={162} r={2} fill="currentColor" />
                    <circle cx={82} cy={162} r={2} fill="currentColor" />
                    <circle cx={102} cy={162} r={2} fill="currentColor" />
                    <circle cx={122} cy={162} r={2} fill="currentColor" />
                    <circle cx={142} cy={162} r={2} fill="currentColor" />
                    <circle cx={162} cy={162} r={2} fill="currentColor" />
                    <circle cx={182} cy={162} r={2} fill="currentColor" />
                    <circle cx={2} cy={182} r={2} fill="currentColor" />
                    <circle cx={22} cy={182} r={2} fill="currentColor" />
                    <circle cx={42} cy={182} r={2} fill="currentColor" />
                    <circle cx={62} cy={182} r={2} fill="currentColor" />
                    <circle cx={82} cy={182} r={2} fill="currentColor" />
                    <circle cx={102} cy={182} r={2} fill="currentColor" />
                    <circle cx={122} cy={182} r={2} fill="currentColor" />
                    <circle cx={142} cy={182} r={2} fill="currentColor" />
                    <circle cx={162} cy={182} r={2} fill="currentColor" />
                    <circle cx={182} cy={182} r={2} fill="currentColor" />
                  </svg>
                </div>

                <div className="align-items-center row">
                  <div className="position-static col-xl col-md offset-xl-n3 order-md-1 offset-md-n6">
                    <Carousel
                      options={{
                        imagesLoaded: true,
                        pageDots: false,
                        draggable: false,
                        autoPlay: 3000,
                        accessibility: true,
                        wrapAround: true,
                      }}
                      classes={
                        "hero-slider flickity-buttons-overlap position-static vw-100 w-sm-100 ml-n4 ml-sm-0"
                      }
                    >
                      <div className="w-100" aria-hidden="true">
                        <img
                          className="img-fluid pos-relative aos-init aos-animate"
                          src="/hero-1.png"
                          alt="Quality products, fast"
                          data-aos="wipe-left"
                          data-aos-delay={200}
                        />
                      </div>
                      <div className="w-100" aria-hidden="true">
                        <img
                          className="img-fluid"
                          src="/hero-2.png"
                          alt="We grow with you"
                        />
                      </div>
                      <div className="w-100 is-selected">
                        <img
                          className="img-fluid"
                          src="/hero-3.png"
                          alt="Tech that just works"
                        />
                      </div>
                    </Carousel>
                    {/* <div className="hero-slider flickity-buttons-overlap position-static vw-100 w-sm-100 ml-n4 ml-sm-0">
                <div className="w-100" aria-hidden="true">
                  <img className="img-fluid pos-relative aos-init aos-animate" src="/hero-1.jpg" alt="Quality products, fast" data-aos="wipe-left" data-aos-delay={200} />
                </div>
                <div className="w-100" aria-hidden="true">
                  <img className="img-fluid" src="/hero-2.jpg" alt="We grow with you" />
                </div>
                <div className="w-100 is-selected">
                  <img className="img-fluid" src="/hero-3.jpg" alt="Tech that just works" />
                </div>
              </div> */}
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay={200}
                    className="col-xl-6 col-md order-md-0 aos-init aos-animate"
                  >
                    <Carousel
                      options={{
                        fade: true,
                        pageDots: false,
                        adaptiveHeight: true,
                        prevNextButtons: false,
                        asNavFor: ".hero-slider",
                      }}
                      classes={""}
                    >
                      <div className="w-100" aria-hidden="true">
                        <div className="card card-lg shadow-none">
                          <div className="card-body text-center">
                            <h6 className="text-uppercase text-warning mb-5">
                              {/* 01. Reliability */}
                              01. Đáng tin cậy
                            </h6>
                            <h1 className="mb-4">
                              {/* Quality products, fast */}
                              Chất lượng cao, nhanh
                              </h1>
                            <p className="text-muted mb-5">
                              {/* We select only suppliers that are recognized for
                              flawless prints, impeccable service, and
                              industry-leading tech to ensure your customers get
                              the best quality products, delivered fast. */}
                              Với hệ thống máy móc hiện đại và đội ngũ nhân sự dồi dào, chúng tôi luôn đảm bảo chất lượng sản phẩm tốt nhất và giao hàng cực nhanh.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-100" aria-hidden="true">
                        <div className="card card-lg shadow-none">
                          <div className="card-body text-center">
                            <h6 className="text-uppercase text-warning mb-5">
                              {/* 02. Scalability */}
                              02. Khả năng tăng trưởng
                            </h6>
                            <h1 className="mb-4">
                              {/* We grow with you */}
                              Chúng tôi phát triển cùng với bạn
                              </h1>
                            <p className="text-muted mb-5">
                              {/* From your first sale to your millionth sale, our
                              expansive network of vetted on-demand fulfillment
                              partners enables your business to grow safely and
                              globally. */}
                             Chúng tôi luôn lắng nghe và phát triển sản phẩm phù hợp chiến lược của bạn.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-100 is-selected is-nav-selected">
                        <div className="card card-lg shadow-none">
                          <div className="card-body text-center">
                            <h6 className="text-uppercase text-warning mb-5">
                              {/* 01. Reliability */}
                              03. Đơn giản
                            </h6>
                            <h1 className="mb-4">
                              {/* Quality products, fast */}
                              Công nghệ hiệu quả
                              </h1>
                            <p className="text-muted mb-5">
                              {/* We select only suppliers that are recognized for
                              flawless prints, impeccable service, and
                              industry-leading tech to ensure your customers get
                              the best quality products, delivered fast. */}
                              Với thế mạnh về công nghệ và giải pháp, Avaprint sẽ hỗ trợ tốt nhất có thể để bạn yên tâm tập trung hoàn toàn vào công việc kinh doanh của mình.
                            </p>
                          </div>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-10 pt-md-12 pb-md-12 bg-light">
          <div className="container-lg">
            <div className="justify-content-center row">
              <div className="col-lg-8 col-md-10">
                <h2 className="display-4 text-center mb-9 mb-md-10">
                  {/* Explore why Avaprint is the right match for you. */}
                  Khám phá xem tại sao Avaprint phù hợp với bạn.
                </h2>
              </div>
            </div>
            <div className="mt-n8 mt-md-n9 row">
              <div
                data-aos="fade-up"
                data-aos-delay={50}
                className="col-lg-6 col-md-6 aos-init aos-animate"
              >
                <div className="d-flex mt-8 mt-md-9">
                  <div className="icon text-primary-light">
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">						
						<path class="st0" d="M61.3,38.79c-1.47-1.85-4.16-2.18-6.02-0.72l-12.14,9.51c-0.6,0.47-1.35,0.73-2.11,0.73l-8.7,0.01
							c-1.18,0-2.14-0.96-2.15-2.14c0-1.18,0.96-2.14,2.14-2.15l7.29-0.01c2.37,0,4.28-1.92,4.28-4.29c0-2.37-1.92-4.29-4.29-4.28
							l-8.07,0.01l-5.51,0.01l-3.1,0l-1.13,0c-2.3,0-4.54,0.78-6.35,2.2L9.5,42.34c-0.37,0.29-0.44,0.83-0.14,1.21l11.57,14.63
							c0.16,0.2,0.41,0.32,0.67,0.33l13.99,0.12l3.87,0.03c2.35,0.02,4.63-0.76,6.47-2.22L60.6,44.82C62.46,43.35,62.78,40.65,61.3,38.79z
							"/>
						<path class="st1" d="M5.99,46.2c-0.29-0.37-0.83-0.43-1.2-0.14L2.1,48.19c-0.37,0.29-0.43,0.83-0.14,1.2l11.29,14.28
							c0.29,0.37,0.83,0.43,1.2,0.14l2.69-2.13c0.37-0.29,0.43-0.83,0.14-1.2L5.99,46.2z"/>
						<path class="st1" d="M38.95,0c-8.34,0-15.1,6.76-15.1,15.1c0,8.34,6.76,15.1,15.1,15.1c8.34,0,15.1-6.76,15.1-15.1
							C54.05,6.76,47.29,0,38.95,0z M38.11,12.2l3.49,1.79c2.08,1.07,3.19,3.27,2.81,5.6c-0.29,1.81-1.43,3.25-3.02,3.94v0.46
							c0,1.18-0.96,2.14-2.14,2.14s-2.14-0.96-2.14-2.14v-0.33c-1.68-0.56-3.08-1.79-3.82-3.48c-0.47-1.09,0.03-2.35,1.11-2.82
							c1.09-0.47,2.35,0.03,2.82,1.11c0.35,0.82,1.19,1.31,2.07,1.23c0.67-0.1,0.84-0.48,0.89-0.79c0.03-0.18,0.07-0.79-0.54-1.11
							l-3.49-1.79c-2.1-1.08-3.22-3.38-2.78-5.71c0.38-2.05,1.81-3.58,3.74-4.1V5.87c0-1.18,0.96-2.14,2.14-2.14s2.14,0.96,2.14,2.14v0.79
							c1.34,0.65,2.44,1.73,3.06,3.15c0.47,1.09-0.03,2.35-1.11,2.82c-1.09,0.47-2.35-0.02-2.82-1.11c-0.35-0.82-1.21-1.32-2.07-1.23
							c-0.64,0.07-0.82,0.52-0.87,0.79C37.53,11.31,37.5,11.88,38.11,12.2z"/>
						</svg>
                  </div>
                  <div className="ml-5">
                    <p className="font-size-lg font-weight-bold mb-1">
                      {/* Zero inventory costs */}
                    Giá tận gốc
                    </p>
                    <p className="font-size-sm mb-0 text-muted">
                      {/* Cut inventory and operations costs from your budget
                      forever. Avaprint enables you to move quickly, without
                      risk to your time and resources. */}
                     Avaprint cắt giảm tối đa những chi phí không cần thiết để sản phẩm có giá thành tốt nhất mà vẫn đảm bảo chất lượng.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay={100}
                className="col-lg-6 col-md-6 aos-init aos-animate"
              >
                <div className="d-flex mt-8 mt-md-9">
                  <div className="icon text-primary-light">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">				
					<path class="st0" d="M50.87,29.54h-2.46c-1.36,0-2.46,1.1-2.46,2.46c0,1.36,1.1,2.46,2.46,2.46h2.46c1.36,0,2.46-1.1,2.46-2.46
						C53.33,30.64,52.23,29.54,50.87,29.54z M32,45.95c-1.36,0-2.46,1.1-2.46,2.46v2.46c0,1.36,1.1,2.46,2.46,2.46
						c1.36,0,2.46-1.1,2.46-2.46v-2.46C34.46,47.05,33.36,45.95,32,45.95z M15.59,29.54h-2.46c-1.36,0-2.46,1.1-2.46,2.46
						c0,1.36,1.1,2.46,2.46,2.46h2.46c1.36,0,2.46-1.1,2.46-2.46C18.05,30.64,16.95,29.54,15.59,29.54z M32,10.67
						c-1.36,0-2.46,1.1-2.46,2.46v2.46c0,1.36,1.1,2.46,2.46,2.46c1.36,0,2.46-1.1,2.46-2.46v-2.46C34.46,11.77,33.36,10.67,32,10.67z"/>
					<path class="st1" d="M32,0C14.33,0,0,14.33,0,32c0,17.67,14.33,32,32,32c17.67,0,32-14.33,32-32C64,14.33,49.67,0,32,0z M32,55.79
						C18.88,55.79,8.21,45.12,8.21,32C8.21,18.88,18.88,8.21,32,8.21c13.12,0,23.79,10.67,23.79,23.79C55.79,45.12,45.12,55.79,32,55.79z
						"/>
					<path class="st1" d="M42.73,18.32l-9.7,9.7C32.7,27.94,32.36,27.9,32,27.9c-0.52,0-1.01,0.1-1.48,0.25l-7.51-7.51
						c-0.96-0.96-2.52-0.96-3.48,0c-0.96,0.96-0.96,2.52,0,3.48l7.67,7.67c-0.07,0.33-0.11,0.68-0.11,1.04c0,2.72,2.2,4.92,4.92,4.92
						c2.72,0,4.92-2.2,4.92-4.92c0-0.52-0.1-1.01-0.25-1.48l9.54-9.54c0.96-0.96,0.96-2.52,0-3.48C45.25,17.35,43.69,17.35,42.73,18.32z"
						/>
					</svg>

                  </div>
                  <div className="ml-5">
                    <p className="font-size-lg font-weight-bold mb-1">
                      {/* Fast, quality fulfillment */}
                    Nhanh và chất lượng
                    </p>
                    <p className="font-size-sm mb-0 text-muted">
                      {/* We’re bringing on-demand commerce into the modern age
                      through lightning fast 3-5 day fulfillment, without
                      sacrificing quality. */}
                     Avaprint có hệ thống nhà xưởng 2000m2, máy móc hiện đại và nhân sự dồi dào, nhà máy chúng tôi luôn hoạt động 24/7 để đảm bảo đơn hàng của bạn hoàn thành trong 1 - 2 ngày.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay={150}
                className="col-lg-6 col-md-6 aos-init aos-animate"
              >
                <div className="d-flex mt-9">
                  <div className="icon text-primary-light">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">					
					<path class="st0" d="M29.68,16.8h12.04c0.21,0,0.42-0.08,0.57-0.23l8.91-8.91c0.5-0.5,0.15-1.37-0.57-1.37H38.6
						c-0.21,0-0.42,0.08-0.57,0.23l-8.91,8.91C28.61,15.94,28.97,16.8,29.68,16.8z"/>
					<path class="st1" d="M63.2,20.8H0.8c-0.44,0-0.8,0.36-0.8,0.8v32.91c0,1.77,1.43,3.2,3.2,3.2h57.6c1.77,0,3.2-1.43,3.2-3.2V21.6
						C64,21.16,63.64,20.8,63.2,20.8z M57.6,46c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2H8c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2h10.8v-8.91H8
						c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2h49.6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2h-14V46H57.6z"/>
					<rect x="22.8" y="37.09" class="st0" width="16.8" height="8.91"/>
					<path class="st0" d="M10.72,6.29H3.2C1.43,6.29,0,7.72,0,9.49v7.31h1.8c0.21,0,0.42-0.08,0.57-0.23l8.91-8.91
						C11.79,7.15,11.43,6.29,10.72,6.29z"/>
					<path class="st0" d="M30.68,6.29H18.64c-0.21,0-0.42,0.08-0.57,0.23l-8.91,8.91c-0.5,0.5-0.15,1.37,0.57,1.37h12.04
						c0.21,0,0.42-0.08,0.57-0.23l8.91-8.91C31.75,7.15,31.39,6.29,30.68,6.29z"/>
					<path class="st0" d="M60.8,6.29h-2.58l-9.15,9.15c-0.5,0.5-0.15,1.37,0.57,1.37H63.2c0.44,0,0.8-0.36,0.8-0.8V9.49
						C64,7.72,62.57,6.29,60.8,6.29z"/>
					</svg>
                  </div>
                  <div className="ml-5">
                    <p className="font-size-lg font-weight-bold mb-1">
                      {/* Zero minimum requirements */}
                     Miễn phí sản phẩm mẫu
                    </p>
                    <p className="font-size-sm mb-0 text-muted">
                      {/* We print and ship your customers’ orders as they come in,
                      whether that’s one item or one thousand. */}
						Với thời đại phát triển của Video commerce, Chúng tôi biết bạn đang rất cần sản phẩm mẫu của riêng bạn để quay dựng, Avaprint luôn sẵn sàng đồng hành cùng bạn để có những campaign triệu view.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay={200}
                className="col-lg-6 col-md-6 aos-init aos-animate"
              >
                <div className="d-flex mt-8 mt-md-9">
                  <div className="icon text-primary-light">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" style="enable-background:new 0 0 64 64;" xml:space="preserve">					
					<rect x="14.02" y="24" class="st0" width="35.95" height="34.24"/>
					<path class="st1" d="M25.81,38.37c1.5,0,2.72-1.22,2.72-2.72s-1.22-2.72-2.72-2.72s-2.72,1.22-2.72,2.72S24.31,38.37,25.81,38.37z"
						/>
					<circle class="st0" cx="32.82" cy="5.31" r="5.31"/>
					<path class="st1" d="M52.43,18.24H49.5L40.1,7.9c-0.58,1.62-1.65,2.99-3.07,3.91l5.84,6.43H22.76l5.84-6.43
						c-1.42-0.92-2.49-2.3-3.07-3.91l-9.4,10.34h-4.56c-1.81,0-3.27,1.46-3.27,3.27v39.22c0,1.81,1.46,3.27,3.27,3.27h40.86
						c1.81,0,3.27-1.46,3.27-3.27V21.51C55.7,19.7,54.23,18.24,52.43,18.24z M49.16,57.46H14.84V24.78h34.32V57.46z"/>
					<path class="st1" d="M21.39,52.56h22.86c1.56,0,2.48-1.74,1.6-3.03l-7.36-10.76c-0.67-0.97-2.11-0.97-2.76,0.02l-6.96,10.44
						l-2.78-5.01c-0.62-1.11-2.21-1.15-2.88-0.06l-3.36,5.45C18.95,50.9,19.88,52.56,21.39,52.56z"/>
					</svg>
                  </div>
                  <div className="ml-5">
                    <p className="font-size-lg font-weight-bold mb-1">
                      {/* Unlimited product possibilities */}
                   Có hình ảnh hoàn thiện sản phẩm
                    </p>
                    <p className="font-size-sm mb-0 text-muted">
                      {/* Stock your digital shelves with hundreds of product
                      variations available in our expansive catalog. */}
                      Để đảm bảo cho bạn và khách hàng yên tâm về đơn hàng của mình, mỗi sản phẩm hoàn thiện chúng tôi sẽ đưa lên hệ thống ảnh hoàn thiện của đơn hàng đó.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="position-relative">
          <div className="shape shape-fluid-x shape-bottom text-light">
            <div className="shape-img pb-8 pb-md-11">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none">
                <path d="M0 0h100v50H75L25 25H0z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        <section className="pt-9 pt-md-12">
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-6 col-md-8">
                <h2 className="display-4 mb-4">
                  {/* Premium products without the price tag. */}
                Hỗ Trợ tối đa FBA - Sản phẩm chất lượng và giá tại xưởng
                </h2>
                <p className="font-size-md text-muted">
                  {/* Our fulfillment network includes only thoroughly vetted
                  suppliers who make speed and product quality a priority. Need
                  help sourcing a new product? We can help with that too. */}
					Chúng tôi luôn lắng nghe và sẵn sàng trao đổi để cùng bạn đưa ra những sản phẩm của riêng bạn và mức giá tối ưu nhất để bạn phát triển công việc kinh doanh của bạn.
                </p>
                <a
                  className="btn btn-warning lift products-button"
                  href="/catalog"
                >
                  {/* View product catalog */}
                  Xem catalogue sản phẩm
                </a>
				<a
                  className="btn btn-success lift products-button" target="_blank"
                  href="https://www.facebook.com/avaprint.net"
                >
                  {/* View product catalog */}
                  Yêu cầu sản phẩm riêng của bạn
                </a>
              </div>
            </div>
            <div className="row mt-md-n9 ">
              <div className="col-12">
                <div className="img-grid img-grid-3">
                  <div className="img-grid-item">
                    <img
                      className="img-fluid border border-4 border-md-7 border-white shadow"
                      src="/catalog-2.png"
                      alt="..."
                    />
                  </div>
                  <div className="img-grid-item">
                    <img
                      className="img-fluid border border-4 border-md-7 border-white shadow"
                      src="/catalog-1.jpg"
                      alt="..."
                    />
                  </div>
                  <div className="img-grid-item">
                    <img
                      className="img-fluid border border-4 border-md-7 border-white shadow"
                      src="/catalog-3.jpg"
                      alt="..."
                    />
                  </div>
                  <div className="img-grid-item">
                    <img
                      className="img-fluid border border-4 border-md-7 border-white shadow"
                      src="/catalog-4.jpg"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="position-relative" style={{ zIndex: -1000 }}>
          <div className="shape shape-fluid-x shape-top text-light pb-12">
            <div className="shape-img pb-9 pb-md-14">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none">
                <path d="M0 25h25L75 0h25v50H0z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        <section className="position-relative pt-10 pt-md-12 pb-12 pb-md-15 bg-light">
          <div className="position-absolute bottom-right text-warning">
            <svg
              width={175}
              height={179}
              viewBox="0 0 175 179"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="a"
                maskUnits="userSpaceOnUse"
                x={-1}
                y={-1}
                width={180}
                height={180}
              >
                <path
                  d="M178.946-.354C79.92-.354-.355 79.922-.355 178.948h179.301V-.354z"
                  fill="#C4C4C4"
                />
              </mask>
              <g
                mask="url(#a)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentColor"
              >
                <path d="M-7.413-19.97c.264.027.533.054.807.08.269.027 1.187.114 1.313.126 7.13.687 11.317 1.681 17.821 4.853 6.453 3.147 9.277 5.475 13.962 10.643.484.533.948 1.037 1.4 1.516L31.8-.845c-1.353-1.228-2.71-2.637-4.274-4.362-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.376-4.921-.63l3.98 1.94zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.257c3.608 1.76 6.428 2.689 9.941 3.294l3.98 1.941zm35.303 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.612-1.256c-4.298-2.097-6.986-3.83-9.687-6.28l-3.911-1.908zm-52.9-14.914c5.302 2.586 8.988 3.443 15.34 4.06l1.313.125c7.13.687 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.475 13.963 10.643C34.35-5.262 37.304-2.827 43.94.41l.612-1.257C38.1-3.994 35.276-6.32 30.59-11.489c-4.795-5.29-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.601-9.735-1.423-14.863-3.924l-.613 1.256z" />
                <path d="M-13.54-7.408l.807.081 1.313.126C-4.29-6.514-.103-5.521 6.4-2.348 12.854.799 15.677 3.126 20.363 8.294c.483.533.948 1.037 1.4 1.516l3.91 1.908c-1.353-1.229-2.71-2.637-4.274-4.363-4.795-5.288-7.75-7.723-14.385-10.96C.339-6.86-4.003-7.89-11.286-8.593l-1.312-.125c-1.838-.179-3.441-.376-4.922-.631l3.98 1.94zm6.128-12.564c-5.866-.612-9.46-1.504-14.534-3.979l.613-1.256c3.608 1.76 6.428 2.688 9.941 3.294l3.98 1.94zM27.891-2.755C31.92 1.518 34.91 3.78 40.877 6.69l.611-1.257c-4.297-2.096-6.986-3.829-9.686-6.28L27.89-2.754zm-52.9-14.914c5.302 2.586 8.988 3.443 15.34 4.059l1.313.126c7.13.686 11.317 1.68 17.821 4.853 6.453 3.147 9.276 5.474 13.962 10.642 4.796 5.289 7.75 7.724 14.386 10.96l.611-1.256C31.974 8.568 29.149 6.24 24.464 1.073c-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.286-18.3-4.988L-9.534-15c-6.2-.6-9.735-1.422-14.863-3.924l-.613 1.257zM-19.669 5.16c.264.028.533.055.807.081l1.313.126c7.13.687 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.475 13.962 10.643.484.533.948 1.037 1.4 1.515l3.91 1.908c-1.353-1.229-2.71-2.637-4.274-4.362C10.475 14.634 7.52 12.2.885 8.964c-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.376-4.921-.63l3.98 1.94zm6.128-12.564c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.257c3.609 1.76 6.428 2.689 9.942 3.294l3.98 1.94zM21.762 9.814c4.029 4.272 7.019 6.534 12.986 9.444l.613-1.256c-4.3-2.097-6.987-3.83-9.688-6.28l-3.911-1.908zM-31.138-5.1c5.302 2.586 8.988 3.443 15.34 4.06l1.313.125c7.13.687 11.317 1.68 17.821 4.853C9.79 7.085 12.613 9.412 17.3 14.58c4.795 5.29 7.749 7.724 14.385 10.96l.613-1.256c-6.453-3.147-9.277-5.475-13.963-10.643-4.795-5.288-7.75-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.987l-1.312-.126c-6.2-.602-9.734-1.423-14.863-3.924l-.613 1.256z" />
                <path d="M-25.796 17.719c.264.027.533.054.807.08l1.313.127c7.13.686 11.317 1.68 17.821 4.853C.598 25.926 3.422 28.253 8.107 33.42c.484.533.948 1.037 1.4 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.795-5.288-7.75-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.988l-1.312-.125c-1.838-.179-3.441-.376-4.921-.631l3.98 1.94zm6.128-12.565c-5.865-.612-9.46-1.503-14.534-3.978l.613-1.256c3.609 1.76 6.428 2.688 9.942 3.293l3.98 1.941zm35.303 17.219c4.029 4.271 7.019 6.534 12.985 9.443l.614-1.256c-4.3-2.096-6.987-3.829-9.688-6.28l-3.911-1.907zm-52.9-14.914c5.302 2.586 8.988 3.443 15.34 4.059l1.313.126c7.13.686 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.963 10.642 4.795 5.288 7.749 7.723 14.384 10.96l.613-1.257c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.601-9.734-1.423-14.863-3.924l-.613 1.257zM-31.927 30.287a230.839 230.839 0 002.12.207c7.13.686 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.963 10.642.483.533.948 1.037 1.399 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.795-5.289-7.75-7.723-14.385-10.96-6.675-3.256-11.017-4.286-18.3-4.988l-1.312-.125c-1.837-.178-3.441-.376-4.921-.63l3.98 1.94zm6.128-12.564c-5.865-.612-9.46-1.504-14.533-3.978l.612-1.257c3.609 1.76 6.428 2.689 9.942 3.294l3.98 1.94zM9.504 34.94c4.029 4.271 7.019 6.534 12.986 9.444l.612-1.257c-4.298-2.096-6.986-3.829-9.687-6.28l-3.91-1.907zm-52.9-14.914c5.302 2.586 8.988 3.443 15.34 4.059l1.313.126c7.13.687 11.318 1.68 17.822 4.852C-2.47 32.212.355 34.54 5.04 39.707c4.795 5.29 7.75 7.724 14.384 10.96l.613-1.257c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.988l-1.312-.125c-6.2-.602-9.734-1.423-14.863-3.925l-.613 1.257z" />
                <path d="M-38.053 42.85a2234.048 2234.048 0 002.12.207c7.13.686 11.317 1.68 17.82 4.852 6.453 3.147 9.277 5.475 13.963 10.643.483.533.947 1.037 1.399 1.515l3.91 1.908c-1.353-1.228-2.71-2.637-4.274-4.362-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.837-.178-3.441-.376-4.921-.63l3.98 1.94zm6.127-12.565c-5.865-.612-9.46-1.503-14.533-3.978l.612-1.256c3.609 1.76 6.428 2.688 9.942 3.293l3.98 1.941zM3.377 47.503c4.029 4.272 7.019 6.534 12.986 9.444l.612-1.256c-4.298-2.097-6.986-3.83-9.687-6.28l-3.91-1.908zm-52.9-14.914c5.302 2.586 8.989 3.443 15.34 4.06l1.313.125c7.13.687 11.318 1.681 17.822 4.853 6.452 3.147 9.276 5.474 13.962 10.642 4.795 5.29 7.75 7.724 14.385 10.96l.612-1.256C7.46 58.826 4.635 56.498-.05 51.33c-4.795-5.288-7.75-7.723-14.385-10.959-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.602-9.734-1.423-14.863-3.924l-.612 1.256z" />
                <path
                  d="M-44.18 55.414a230.839 230.839 0 002.12.207c7.13.686 11.317 1.68 17.82 4.853 6.453 3.147 9.277 5.474 13.963 10.642.483.533.948 1.037 1.4 1.516l3.91 1.907c-1.354-1.228-2.71-2.637-4.275-4.362-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.286-18.3-4.988l-1.312-.126c-1.838-.178-3.44-.375-4.921-.63l3.98 1.941zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.612-1.256c3.609 1.76 6.428 2.688 9.942 3.293l3.98 1.941zM-2.75 60.067c4.029 4.272 7.019 6.534 12.986 9.445l.612-1.257c-4.298-2.096-6.986-3.829-9.687-6.28l-3.91-1.908zm-52.9-14.914c5.302 2.587 8.989 3.444 15.34 4.06l1.313.125c7.13.687 11.318 1.681 17.822 4.853 6.452 3.148 9.276 5.475 13.962 10.643 4.795 5.29 7.75 7.723 14.385 10.96l.612-1.257C1.332 71.39-1.492 69.063-6.178 63.895c-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.6-9.734-1.423-14.863-3.924l-.612 1.256zM-50.31 67.98c.265.029.534.056.807.082l1.313.126c7.131.687 11.318 1.68 17.822 4.853 6.452 3.147 9.276 5.474 13.962 10.642.483.533.948 1.038 1.4 1.516l3.91 1.908c-1.354-1.23-2.71-2.637-4.275-4.363-4.795-5.288-7.75-7.723-14.385-10.96-6.675-3.255-11.016-4.286-18.3-4.987l-1.312-.126c-1.837-.178-3.44-.376-4.921-.631l3.98 1.94zm6.129-12.563c-5.866-.612-9.46-1.504-14.534-3.978l.613-1.257c3.608 1.76 6.427 2.689 
      9.941 3.294l3.98 1.94zM-8.88 72.635c4.029 4.272 7.02 6.534 12.986 9.444l.612-1.256c-4.298-2.097-6.986-3.83-9.687-6.281l-3.91-1.907zm-52.9-14.914c5.302 2.586 8.989 3.443 15.34 4.059l1.313.126c7.131.687 11.318 1.68 17.822 4.853 6.452 3.147 9.276 5.474 13.962 10.642 4.795 5.289 7.75 7.724 14.385 10.96l.612-1.256c-6.452-3.147-9.276-5.475-13.962-10.643-4.795-5.288-7.75-7.723-14.384-10.96-6.676-3.255-11.017-4.286-18.3-4.988l-1.313-.125c-6.2-.602-9.734-1.423-14.862-3.925l-.613 1.257zM67.663-14.459c.264.028.533.055.806.081l1.314.126c7.13.687 11.317 1.68 17.821 4.853 6.452 3.147 9.276 5.474 13.962 10.642.483.533.948 1.037 1.399 1.516l3.911 1.908c-1.353-1.229-2.71-2.637-4.275-4.363-4.795-5.288-7.749-7.723-14.384-10.96-6.676-3.255-11.017-4.286-18.3-4.987l-1.313-.126c-1.837-.178-3.44-.376-4.92-.631l3.98 1.941zm6.128-12.564c-5.866-.612-9.46-1.504-14.534-3.978l.613-1.257c3.608 1.76 6.427 2.689 9.941 3.294l3.98 1.94zm35.302 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.613-1.257c-4.299-2.096-6.987-3.829-9.688-6.28l-3.911-1.907zm-52.9-14.914c5.302 2.586 8.99 3.443 15.34 4.059l1.314.126c7.13.686 11.317 1.68 17.821 4.853 6.452 3.147 9.276 5.474 13.962 10.642 4.795 5.289 7.749 7.724 14.385 10.96l.613-1.256c-6.453-3.147-9.277-5.475-13.963-10.643-4.795-5.289-7.749-7.723-14.384-10.96-6.676-3.256-11.017-4.286-18.3-4.988l-1.313-.126c-6.2-.6-9.734-1.422-14.862-3.924l-.613 1.257z"
                />
                <path d="M61.532-1.898c.265.027.534.054.808.08.268.027 1.186.115 1.313.127 7.13.686 11.316 1.68 17.82 4.853 6.453 3.147 9.276 5.474 13.963 10.642.482.533.947 1.037 1.398 1.516l3.911 1.907c-1.353-1.228-2.71-2.637-4.273-4.362-4.796-5.289-7.75-7.724-14.385-10.96C75.41-1.35 71.07-2.38 63.787-3.083l-1.313-.126c-1.837-.178-3.441-.375-4.921-.63l3.98 1.94zm6.129-12.565c-5.867-.612-9.46-1.503-14.535-3.978l.614-1.256c3.607 1.76 6.426 2.688 9.94 3.293l3.98 1.941zm35.302 17.218c4.029 4.272 7.019 6.534 12.986 9.445l.613-1.257c-4.299-2.096-6.987-3.83-9.688-6.28l-3.911-1.908zm-52.9-14.914c5.301 2.587 8.988 3.444 15.34 4.06l1.313.125c7.13.687 11.318 1.681 17.822 4.853C90.99.026 93.813 2.354 98.5 7.522c4.794 5.288 7.75 7.723 14.385 10.96l.612-1.257c-6.453-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-6.2-.601-9.734-1.423-14.862-3.924l-.612 1.256z" />
                <path d="M55.411 10.668c.264.027.533.055.806.081l1.314.126c7.13.687 11.317 1.68 17.821 4.853 6.452 3.147 9.276 5.474 13.962 10.642.483.533.948 1.037 1.4 1.516l3.91 1.907c-1.353-1.228-2.71-2.636-4.274-4.362-4.796-5.288-7.75-7.723-14.385-10.96-6.676-3.255-11.017-4.286-18.3-4.987l-1.313-.126c-1.837-.178-3.44-.376-4.92-.631l3.98 1.941zM61.54-1.896c-5.866-.612-9.46-1.504-14.534-3.978l.613-1.257c3.608 1.76 6.427 2.688 9.941 3.294l3.98 1.94zm35.302 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.613-1.256c-4.299-2.097-6.987-3.83-9.688-6.28l-3.91-1.908zM43.941.408c5.302 2.586 8.99 3.443 15.34 4.059l1.314.126c7.13.687 11.317 1.68 17.821 4.853 6.452 3.147 9.276 5.474 13.962 10.642 4.795 5.289 7.749 7.724 14.385 10.96l.613-1.257c-6.453-3.146-9.277-5.474-13.962-10.642-4.796-5.289-7.75-7.723-14.385-10.96-6.676-3.255-11.017-4.286-18.3-4.988l-1.313-.125c-6.2-.602-9.734-1.423-14.862-3.925L43.941.408zM49.282 23.235c.265.027.534.054.808.08.268.027 1.186.114 1.313.127 7.13.686 11.316 1.68 17.82 4.852 6.453 3.147 9.276 5.474 13.963 10.642.482.533.947 1.038 1.398 1.517l3.912 1.907c-1.353-1.228-2.71-2.636-4.274-4.362-4.796-5.288-7.75-7.724-14.385-10.96-6.677-3.256-11.018-4.287-18.3-4.988l-1.313-.126c-1.837-.178-3.441-.376-4.921-.63l3.98 1.94zm6.129-12.565c-5.867-.612-9.46-1.503-14.535-3.978l.614-1.256c3.607 1.76 6.426 2.688 9.94 3.293l3.98 1.941zm35.302 17.218c4.029 4.272 7.019 6.534 12.986 9.445l.613-1.258c-4.299-2.096-6.987-3.829-9.688-6.28l-3.911-1.907zm-52.9-14.914c5.301 2.586 8.988 3.443 15.34 4.06l1.314.125c7.13.687 11.317 1.681 17.82 4.853 6.453 3.147 9.276 5.475 13.962 10.642 4.796 5.29 7.75 7.724 14.386 10.96l.612-1.255c-6.453-3.148-9.276-5.476-13.962-10.644-4.795-5.288-7.75-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.987l-1.313-.126c-6.2-.601-9.733-1.423-14.861-3.924l-.614 1.256z" />
                <path d="M43.152 35.796c.264.028.533.055.807.082l1.313.125c7.13.687 11.317 1.681 17.82 4.853 6.454 3.148 9.277 5.475 13.963 10.643.483.533.948 1.037 1.4 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.796-5.289-7.75-7.724-14.385-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.177-3.441-.375-4.922-.63l3.98 1.94zm6.128-12.563c-5.866-.612-9.46-1.504-14.534-3.979l.613-1.256c3.608 1.76 6.428 2.688 9.94 3.293l3.98 1.942zM84.583 40.45c4.028 4.272 7.018 6.534 12.985 9.444l.613-1.255c-4.3-2.098-6.987-3.83-9.688-6.28l-3.91-1.909zM31.682 25.537c5.303 2.586 8.989 3.443 15.34 4.059l1.314.125c7.13.688 11.317 1.681 17.82 4.853 6.454 3.147 9.277 5.476 13.963 10.644 4.795 5.287 7.75 7.722 14.385 10.96l.613-1.258c-6.453-3.147-9.276-5.474-13.962-10.642-4.796-5.289-7.75-7.724-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.988l-1.312-.125c-6.2-.602-9.735-1.423-14.863-3.925l-.613 1.257z" />
                <path d="M37.025 48.361a219.537 219.537 0 002.12.208c7.13.686 11.317 1.68 17.82 4.852 6.454 3.148 9.277 5.474 13.963 10.643.483.533.948 1.037 1.4 1.516l3.91 1.907c-1.353-1.228-2.71-2.636-4.274-4.362-4.795-5.288-7.75-7.724-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.989l-1.312-.125c-1.838-.178-3.441-.376-4.922-.63l3.98 1.94zm6.128-12.563c-5.866-.613-9.46-1.505-14.534-3.979l.613-1.256c3.608 1.76 6.428 2.688 9.94 3.293l3.98 1.941zm35.303 17.218c4.028 4.272 7.018 6.534 12.985 9.444l.613-1.258c-4.3-2.096-6.987-3.828-9.688-6.28l-3.91-1.906zM25.555 38.102c5.303 2.586 8.989 3.443 15.34 4.059l1.314.125c7.13.686 11.317 1.68 17.82 4.853 6.454 3.147 9.277 5.474 13.963 10.642 4.795 5.29 7.75 7.724 14.385 10.96l.613-1.255c-6.453-3.148-9.276-5.476-13.962-10.644-4.795-5.288-7.75-7.722-14.385-10.96-6.675-3.255-11.017-4.285-18.3-4.987-.127-.013-1.045-.1-1.312-.127-6.2-.6-9.735-1.422-14.863-3.924l-.613 1.258z" />
                <path d="M30.898 60.923c.264.028.532.055.806.082l1.313.125c7.13.687 11.317 1.681 17.822 4.853 6.453 3.147 9.276 5.475 13.962 10.643.483.533.948 1.037 1.4 1.516l3.91 1.907c-1.354-1.228-2.71-2.637-4.275-4.362-4.794-5.289-7.75-7.724-14.384-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-1.837-.178-3.44-.376-4.921-.631l3.98 1.941zm6.128-12.564c-5.867-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.427 2.688 9.94 3.293l3.98 1.941zm35.303 17.218c4.028 4.272 7.019 6.534 12.985 9.444l.613-1.256c-4.299-2.097-6.988-3.829-9.689-6.28l-3.91-1.908zM19.428 50.663c5.302 2.586 8.989 3.443 15.34 4.059l1.313.126c7.13.687 11.317 1.681 17.822 4.853 6.453 3.147 9.276 5.475 13.962 10.643 4.796 5.288 7.75 7.723 14.385 10.96l.612-1.257C76.41 76.9 73.587 74.573 68.9 69.405c-4.794-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.601-9.734-1.423-14.862-3.924l-.613 1.256zM24.769 73.492a228.518 228.518 0 002.12.207c7.13.686 11.317 1.681 17.82 4.853 6.454 3.147 9.277 5.474 13.963 10.642.484.533.948 1.037 1.4 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.795-5.288-7.75-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.988l-1.313-.125c-1.837-.179-3.44-.376-4.92-.63l3.979 1.94zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.427 2.688 9.941 3.293l3.98 1.941zM66.2 78.147c4.029 4.27 7.019 6.533 12.985 9.443l.613-1.257c-4.298-2.096-6.986-3.829-9.687-6.28L66.2 78.146zM13.299 63.231c5.302 2.586 8.989 3.443 15.34 4.06.27.025 1.188.112 1.314.125 7.13.686 11.317 1.68 17.82 4.853 6.454 3.147 9.278 5.474 13.963 10.642 4.796 5.29 7.75 7.724 14.385 10.96l.613-1.257c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-6.2-.6-9.734-1.423-14.862-3.924l-.613 1.257z" />
                <path d="M18.64 86.055a2154.28 2154.28 0 002.12.207c7.13.687 11.317 1.68 17.82 4.853 6.454 3.147 9.278 5.475 13.963 10.643.484.533.948 1.037 1.4 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.795-5.29-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-1.837-.178-3.44-.376-4.92-.631l3.979 1.94zm6.128-12.564c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.257c3.608 1.76 6.427 2.689 9.941 3.294l3.98 1.94zM60.07 90.709c4.029 4.272 7.019 6.534 12.985 9.444l.613-1.256c-4.298-2.097-6.986-3.83-9.687-6.28l-3.911-1.908zM7.17 75.795c5.302 2.586 8.989 3.443 15.34 4.059l1.314.126c7.13.687 11.317 1.68 17.82 4.853 6.454 3.147 9.278 5.475 13.963 10.642 4.796 5.289 7.75 7.724 14.385 10.96l.613-1.256c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.29-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-6.2-.601-9.734-1.423-14.862-3.924l-.613 1.256z" />
                <path d="M12.513 98.62a226.078 226.078 0 002.12.206c7.13.686 11.317 1.68 17.82 4.853 6.454 3.147 9.278 5.474 13.963 10.642.484.533.948 1.037 1.4 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.795-5.289-7.75-7.723-14.385-10.96-6.676-3.256-11.017-4.286-18.3-4.988l-1.313-.126c-1.837-.178-3.44-.375-4.92-.63l3.979 1.941zm6.128-12.566c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.428 2.688 9.941 3.293l3.98 1.941zm35.303 17.219c4.029 4.271 7.019 6.534 12.985 9.444l.613-1.257c-4.298-2.096-6.986-3.829-9.687-6.28l-3.911-1.907zM1.043 88.359c5.302 2.586 8.989 3.443 15.34 4.06.27.025 1.188.112 1.314.125 7.13.686 11.317 1.68 17.82 4.852 6.454 3.148 9.278 5.475 13.963 10.643 4.796 5.289 7.75 7.724 14.385 10.96l.613-1.257c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.6-9.735-1.423-14.863-3.924l-.613 1.257z" />
                <path d="M6.384 111.184c.264.028.533.055.807.081l1.313.126c7.13.687 11.317 1.681 17.821 4.853 6.453 3.147 9.277 5.475 13.963 10.643.483.533.947 1.037 1.399 1.515l3.91 1.908c-1.353-1.228-2.71-2.637-4.274-4.362-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.442-.376-4.922-.631l3.98 1.941zm6.128-12.564c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.257c3.608 1.76 6.428 2.689 9.941 3.294l3.98 1.94zm35.303 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.612-1.256c-4.298-2.097-6.986-3.83-9.687-6.281l-3.911-1.907zm-52.9-14.914c5.302 2.586 8.988 3.443 15.34 4.059l1.313.126c7.13.687 11.317 1.681 17.822 4.853 6.452 3.147 9.276 5.474 13.962 10.642 4.795 5.289 7.749 7.724 14.384 10.96l.613-1.256c-6.452-3.147-9.276-5.475-13.962-10.643-4.795-5.288-7.75-7.723-14.385-10.959-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.602-9.735-1.423-14.863-3.924l-.613 1.256zM.255 123.75a228.519 228.519 0 002.12.207c7.13.686 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.963 10.642.483.533.948 1.037 1.399 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.375-4.922-.63l3.98 1.941zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.428 2.688 9.941 3.293l3.98 1.941zm35.303 17.218c4.029 4.272 7.019 6.534 12.986 9.445l.612-1.257c-4.298-2.096-6.986-3.829-9.687-6.28l-3.911-1.908zm-52.9-14.914c5.302 2.587 8.988 3.444 15.34 4.06l1.313.125c7.13.687 11.317 1.681 17.821 4.853 6.453 3.147 9.277 5.475 13.963 10.643 4.795 5.289 7.749 7.723 14.385 10.96l.612-1.257c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.601-9.735-1.423-14.863-3.924l-.613 1.256z" />
                <path d="M-5.874 136.313c.264.028.533.055.807.081l1.313.126c7.13.687 11.317 1.681 17.821 4.853 6.453 3.147 9.276 5.475 13.962 10.643.484.533.948 1.037 1.4 1.515l3.91 1.908c-1.354-1.229-2.71-2.637-4.274-4.362-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.376-4.922-.631l3.98 1.941zm6.128-12.564c-5.866-.612-9.46-1.504-14.534-3.978l.613-1.257c3.608 1.76 6.428 2.689 9.942 3.294l3.98 1.941zm35.302 17.218c4.03 4.272 7.02 6.534 12.986 9.444l.612-1.256c-4.298-2.097-6.985-3.83-9.686-6.281l-3.912-1.907zm-52.9-14.914c5.303 2.586 8.99 3.443 15.34 4.059l1.314.126c7.13.687 11.317 1.681 17.821 4.853 6.453 3.147 9.277 5.474 13.963 10.642 4.795 5.289 7.748 7.724 14.384 10.96l.612-1.256c-6.452-3.147-9.276-5.475-13.962-10.643-4.794-5.288-7.749-7.723-14.384-10.96-6.675-3.255-11.017-4.286-18.3-4.988l-1.312-.125c-6.2-.602-9.734-1.423-14.863-3.925l-.613 1.257z" />
                <path d="M-12 148.877l.806.081 1.313.126c7.13.686 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.962 10.642.484.533.948 1.037 1.4 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.376-4.921-.63l3.98 1.941zm6.127-12.565c-5.865-.612-9.46-1.503-14.534-3.978l.613-1.256c3.609 1.76 6.428 2.688 9.942 3.293l3.98 1.941zM29.43 153.53c4.029 4.272 7.019 6.534 12.986 9.444l.613-1.256c-4.3-2.096-6.987-3.829-9.688-6.28l-3.911-1.908zm-52.9-14.914c5.302 2.587 8.988 3.443 15.34 4.059.269.027 1.187.114 1.313.126 7.13.687 11.317 1.681 17.821 4.853 6.453 3.147 9.277 5.475 13.962 10.643 4.796 5.288 7.75 7.723 14.386 10.96l.613-1.257c-6.453-3.147-9.277-5.474-13.963-10.642-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.601-9.734-1.423-14.863-3.924l-.613 1.256zM-18.128 161.442c.264.028.533.055.807.081l1.313.126c7.13.687 11.317 1.681 17.821 4.853 6.453 3.147 9.276 5.474 13.962 10.642.484.533.948 1.037 1.4 1.516l3.91 1.908c-1.353-1.229-2.71-2.637-4.274-4.363-4.795-5.288-7.75-7.723-14.385-10.959-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.376-4.922-.631l3.98 1.941zM-12 148.878c-5.866-.612-9.46-1.504-14.534-3.978l.613-1.257c3.608 1.76 6.428 2.688 9.942 3.294l3.98 1.941zm35.303 17.218c4.028 4.272 7.018 6.534 12.985 9.444l.614-1.257c-4.3-2.096-6.988-3.829-9.688-6.28l-3.911-1.907zm-52.9-14.914c5.302 2.586 8.988 3.443 15.34 4.059l1.313.126c7.13.686 11.317 1.681 17.821 4.853 6.453 3.147 9.276 5.474 13.962 10.642 4.796 5.289 7.75 7.724 14.386 10.96l.612-1.256c-6.453-3.147-9.276-5.475-13.962-10.643-4.795-5.288-7.75-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.988l-1.312-.125c-6.2-.602-9.735-1.423-14.863-3.925l-.613 1.257z" />
                <path d="M-24.257 174.005c.264.028.533.055.807.082l1.313.125c7.13.687 11.317 1.681 17.821 4.853 6.453 3.148 9.277 5.475 13.962 10.643.484.533.948 1.037 1.4 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.376-4.921-.631l3.98 1.941zm6.128-12.564c-5.865-.612-9.46-1.503-14.534-3.978l.613-1.256c3.609 1.76 6.428 2.688 9.942 3.293l3.98 1.941zm35.303 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.613-1.256c-4.3-2.097-6.987-3.829-9.688-6.28l-3.911-1.908zm-52.9-14.914c5.302 2.586 8.988 3.443 15.34 4.059l1.313.126c7.13.687 11.317 1.681 17.821 4.853 6.453 3.147 9.277 5.475 13.963 10.643 4.795 5.288 7.749 7.723 14.384 10.96l.613-1.257c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.601-9.734-1.423-14.863-3.924l-.613 1.256z" />
                <path
                  d="M-30.384 186.57a230.839 230.839 0 002.12.207c7.13.687 11.317 1.681 17.822 4.853 6.452 3.147 9.276 5.474 13.962 10.642.483.533.947 1.037 1.399 1.516l3.91 1.908c-1.353-1.229-2.71-2.637-4.274-4.363-4.795-5.288-7.75-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.988l-1.312-.125c-1.838-.179-3.441-.376-4.921-.631l3.98 1.941zm6.128-12.564c-5.865-.612-9.46-1.504-14.533-3.978l.612-1.257c3.609 1.76 6.428 2.688 9.942 3.294l3.98 1.941zm35.303 17.218c4.029 4.272 7.019 6.534 12.985 9.444l.613-1.257c-4.298-2.096-6.986-3.829-9.687-6.28l-3.911-1.907zm-52.9-14.914c5.302 2.586 8.988 3.443 15.34 4.059l1.313.126c7.13.686 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.963 10.642 4.795 5.289 
      7.75 7.724 14.384 10.96l.613-1.256c-6.452-3.148-9.276-5.475-13.962-10.643-4.795-5.289-7.75-7.723-14.385-10.96-6.675-3.256-11.017-4.286-18.3-4.988l-1.312-.126c-6.2-.601-9.734-1.422-14.863-3.924l-.612 1.257zM142.747-8.947c.264.027.533.054.806.08l1.313.127c7.131.686 11.318 1.68 17.822 4.853 6.452 3.147 9.276 5.474 13.962 10.642.483.533.948 1.037 1.399 1.516l3.911 1.907c-1.353-1.228-2.71-2.637-4.275-4.362-4.795-5.289-7.749-7.723-14.384-10.96-6.676-3.255-11.017-4.286-18.301-4.988l-1.312-.126c-1.837-.178-3.441-.375-4.921-.63l3.98 1.94zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.427 2.688 9.941 3.293l3.98 1.941zm35.302 17.219c4.029 4.271 7.019 6.534 12.986 9.444l.613-1.257c-4.299-2.096-6.987-3.829-9.688-6.28l-3.911-1.907zm-52.9-14.915c5.302 2.587 8.989 3.444 15.34 4.06l1.314.126c7.13.686 11.317 1.68 17.821 4.853 6.452 3.147 9.276 5.474 13.962 10.642 4.795 5.289 7.749 7.724 14.385 10.96l.613-1.257c-6.453-3.147-9.277-5.474-13.963-10.642-4.795-5.289-7.749-7.724-14.384-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-6.2-.601-9.734-1.423-14.862-3.924l-.613 1.256z"
                />
                <path d="M136.615 3.613c.264.028.533.055.807.081.269.027 1.187.114 1.313.126 7.13.687 11.317 1.681 17.821 4.853 6.452 3.147 9.276 5.475 13.962 10.643.483.533.948 1.037 1.399 1.516l3.911 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.796-5.289-7.75-7.724-14.385-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-1.837-.178-3.441-.376-4.921-.63l3.98 1.94zm6.128-12.564c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.427 2.688 9.941 3.293l3.98 1.94zm35.302 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.613-1.256c-4.299-2.097-6.987-3.83-9.688-6.28l-3.911-1.908zm-52.9-14.914c5.302 2.586 8.989 3.443 15.341 4.06l1.313.125c7.13.687 11.317 1.68 17.821 4.853 6.453 3.147 9.276 5.475 13.962 10.643 4.795 5.288 7.75 7.723 14.385 10.96l.613-1.257c-6.453-3.147-9.277-5.474-13.962-10.642-4.796-5.29-7.75-7.724-14.385-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.601-9.735-1.423-14.863-3.924l-.613 1.256zM130.488 16.182c.264.027.533.054.807.08l1.313.127c7.13.686 11.317 1.68 17.821 4.853 6.453 3.147 9.276 5.474 13.962 10.642.483.533.948 1.037 1.399 1.515l3.911 1.908c-1.353-1.228-2.71-2.637-4.274-4.362-4.796-5.289-7.75-7.724-14.385-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.442-.375-4.922-.63l3.98 1.94zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.427 2.688 9.941 3.293l3.98 1.941zm35.303 17.218c4.028 4.272 7.018 6.534 12.985 9.444l.613-1.256c-4.299-2.096-6.987-3.83-9.688-6.28l-3.91-1.907zM119.018 5.921c5.302 2.587 8.989 3.444 15.341 4.06l1.313.126c7.13.686 11.317 1.68 17.821 4.852 6.453 3.148 9.276 5.475 13.962 10.643 4.795 5.288 7.75 7.723 14.385 10.96l.613-1.257c-6.453-3.147-9.276-5.475-13.962-10.642-4.796-5.289-7.75-7.724-14.385-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.601-9.735-1.423-14.863-3.924l-.613 1.256z" />
                <path d="M124.361 28.744c.264.028.533.055.807.081l1.313.126c7.13.686 11.317 1.68 17.821 4.853 6.453 3.147 9.276 5.474 13.962 10.642.483.533.948 1.037 1.4 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.796-5.289-7.75-7.723-14.385-10.96-6.676-3.256-11.017-4.286-18.3-4.987l-1.312-.126c-1.838-.178-3.441-.376-4.922-.63l3.98 1.94zm6.128-12.564c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.257c3.608 1.76 6.428 2.689 9.941 3.294l3.98 1.94zm35.303 17.218c4.028 4.271 7.018 6.534 12.985 9.444l.613-1.257c-4.299-2.096-6.987-3.829-9.688-6.28l-3.91-1.907zm-52.901-14.914c5.303 2.586 8.989 3.443 15.341 4.059l1.313.126c7.13.687 11.317 1.68 17.821 4.853 6.453 3.147 9.276 5.474 13.962 10.642 4.795 5.29 7.75 7.724 14.385 10.96l.613-1.257c-6.453-3.147-9.276-5.474-13.962-10.642-4.796-5.289-7.75-7.724-14.385-10.96-6.676-3.255-11.017-4.286-18.3-4.988l-1.312-.125c-6.2-.602-9.735-1.423-14.863-3.925l-.613 1.257z" />
                <path d="M118.232 41.309a2087.54 2087.54 0 002.12.207c7.13.686 11.317 1.68 17.821 4.852 6.453 3.148 9.276 5.475 13.962 10.643.483.533.948 1.037 1.4 1.515l3.91 1.908c-1.353-1.227-2.71-2.636-4.274-4.361-4.795-5.29-7.75-7.724-14.385-10.96-6.675-3.257-11.017-4.288-18.3-4.989l-1.312-.126c-1.838-.177-3.441-.375-4.922-.63l3.98 1.94zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.428 2.688 9.941 3.293l3.98 1.941zm35.303 17.218c4.028 4.272 7.019 6.534 12.985 9.444l.613-1.255c-4.298-2.098-6.987-3.83-9.688-6.282l-3.91-1.907zm-52.901-14.914c5.303 2.587 8.989 3.444 15.341 4.06l1.313.126c7.13.686 11.317 1.68 17.821 4.852 6.453 3.148 9.276 5.474 13.962 10.642 4.796 5.29 7.75 7.724 14.385 10.96l.613-1.256c-6.453-3.147-9.276-5.474-13.962-10.643-4.795-5.288-7.75-7.723-14.385-10.959-6.675-3.255-11.017-4.286-18.3-4.987-.127-.014-1.045-.1-1.312-.127-6.2-.602-9.735-1.422-14.863-3.924l-.613 1.256z" />
                <path d="M112.101 53.873a219.537 219.537 0 002.12.207c7.131.686 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.962 10.642.484.533.948 1.037 1.4 1.516l3.911 1.907c-1.354-1.228-2.711-2.637-4.275-4.362-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.286-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.375-4.921-.63l3.979 1.941zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.609 1.76 6.428 2.688 9.942 3.293l3.979 1.941zm35.303 17.218c4.029 4.272 7.019 6.534 12.985 9.445l.613-1.257c-4.298-2.096-6.986-3.829-9.687-6.28l-3.911-1.908zm-52.901-14.914c5.303 2.587 8.989 3.444 15.341 4.06l1.313.125c7.131.687 11.317 1.681 17.821 4.853 6.453 3.148 9.277 5.475 13.962 10.643 4.796 5.29 7.75 7.723 14.385 10.96l.613-1.257c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.6-9.734-1.423-14.863-3.924l-.613 1.256zM105.976 66.44a2087.54 2087.54 0 002.12.207c7.131.687 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.962 10.642.484.533.948 1.037 1.4 1.516l3.911 1.908c-1.354-1.23-2.711-2.637-4.275-4.363-4.795-5.288-7.75-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.987l-1.312-.126c-1.838-.178-3.441-.376-4.921-.631l3.979 1.94zm6.128-12.564c-5.866-.612-9.46-1.504-14.534-3.978l.613-1.257c3.609 1.76 6.428 2.689 9.942 3.294l3.979 1.94zm35.303 17.218c4.029 4.272 7.019 6.534 12.985 9.444l.613-1.256c-4.298-2.097-6.986-3.83-9.687-6.281l-3.911-1.907zM94.506 56.18c5.303 2.586 8.989 3.443 15.341 4.059l1.313.126c7.131.687 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.962 10.642 4.796 5.289 7.75 7.724 14.385 10.96l.613-1.256c-6.452-3.147-9.276-5.475-13.962-10.643-4.795-5.288-7.75-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.988l-1.312-.125c-6.2-.602-9.734-1.423-14.863-3.925l-.613 1.257z" />
                <path d="M99.847 79.002l.807.081 1.313.126c7.131.686 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.962 10.642.484.533.948 1.037 1.4 1.516l3.911 1.907c-1.354-1.228-2.711-2.637-4.275-4.362-4.795-5.289-7.749-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.376-4.921-.63l3.979 1.941zm6.128-12.565c-5.865-.612-9.46-1.503-14.534-3.978l.613-1.256c3.609 1.76 6.428 2.688 9.942 3.293l3.979 1.941zm35.303 17.218c4.029 4.272 7.019 6.534 12.985 9.444l.613-1.256c-4.298-2.096-6.986-3.829-9.687-6.28l-3.911-1.908zM88.377 68.741c5.303 2.587 8.989 3.443 15.341 4.06l1.313.125c7.131.687 11.317 1.681 17.821 4.853 6.453 3.147 9.277 5.475 13.962 10.643 4.796 5.288 7.75 7.723 14.385 10.96l.613-1.257c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.749-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.6-9.734-1.423-14.863-3.924l-.613 1.256z" />
                <path d="M93.718 91.567a2087.54 2087.54 0 002.12.207c7.131.687 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.963 10.642.483.533.947 1.037 1.399 1.516l3.911 1.908c-1.354-1.229-2.711-2.637-4.275-4.363-4.795-5.288-7.749-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.987l-1.312-.126c-1.838-.178-3.44-.376-4.92-.631l3.978 1.94zm6.128-12.564c-5.865-.612-9.46-1.504-14.534-3.978l.613-1.257c3.609 1.76 6.428 2.688 9.942 3.294l3.98 1.94zM135.15 96.22c4.029 4.272 7.019 6.534 12.985 9.444l.613-1.257c-4.298-2.096-6.986-3.829-9.687-6.28l-3.911-1.907zM82.248 81.307c5.303 2.586 8.99 3.443 15.341 4.059l1.313.126c7.131.686 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.963 10.642 4.795 5.289 7.749 7.724 14.384 10.96l.613-1.256c-6.452-3.147-9.276-5.475-13.962-10.643-4.795-5.288-7.749-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.988l-1.312-.125c-6.2-.602-9.734-1.423-14.863-3.925l-.613 1.257z" />
                <path
                  d="M87.595 104.129l.807.081 1.313.126c7.131.686 11.317 1.68 17.821 4.852 6.453 3.148 9.277 5.475 13.962 10.643.484.533.948 1.037 1.4 1.516l3.911 1.907c-1.354-1.228-2.711-2.637-4.275-4.362-4.795-5.289-7.749-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.376-4.921-.63l3.979 1.941zm6.128-12.565c-5.865-.612-9.46-1.503-14.534-3.978l.613-1.256c3.609 1.76 6.428 2.688 9.942 3.293l3.979 1.941zm35.303 17.218c4.029 4.272 7.019 6.534 12.985 9.444l.613-1.256c-4.298-2.097-6.986-3.829-9.687-6.28l-3.911-1.908zM76.125 93.868c5.303 2.586 8.989 3.443 15.341 4.06l1.313.125c7.131.687 11.317 1.681 17.821 4.853 6.453 3.147 9.277 5.475 13.963 10.643 4.795 5.288 7.749 7.723 14.384 10.96l.613-1.257c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.749-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.6-9.734-1.423-14.863-3.924l-.613 1.256zM81.461 116.695l.807.081 1.313.126c7.131.687 11.318 1.681 17.822 4.853 6.452 3.147 9.276 
      5.474 13.962 10.642.483.533.948 1.037 1.399 1.516l3.911 1.908c-1.354-1.229-2.71-2.637-4.275-4.363-4.795-5.288-7.749-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.988l-1.312-.125c-1.837-.179-3.44-.376-4.92-.631l3.978 1.941zm6.13-12.564c-5.867-.612-9.46-1.504-14.535-3.978l.612-1.257c3.61 1.76 6.428 2.688 9.942 3.294l3.98 1.941zm35.301 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.612-1.257c-4.298-2.096-6.986-3.829-9.687-6.28l-3.911-1.907zm-52.9-14.914c5.302 2.586 8.99 3.443 15.34 4.059l1.313.126c7.131.686 11.318 1.68 17.822 4.853 6.452 3.147 9.276 5.474 13.962 10.642 4.795 5.289 7.749 7.724 14.385 10.96l.612-1.256c-6.452-3.148-9.276-5.475-13.962-10.643-4.795-5.289-7.749-7.723-14.385-10.96-6.675-3.256-11.016-4.286-18.3-4.988l-1.312-.126c-6.2-.601-9.734-1.422-14.863-3.924l-.612 1.257zM75.333 129.266c.264.028.533.055.806.081l1.313.126c7.131.687 11.318 1.681 17.822 4.853 6.452 3.147 9.276 5.475 13.962 10.643.483.533.948 1.037 1.399 1.515l3.911 1.908c-1.354-1.228-2.71-2.637-4.275-4.362-4.795-5.289-7.749-7.724-14.385-10.96-6.675-3.256-11.016-4.287-18.3-4.988l-1.312-.126c-1.837-.178-3.44-.376-4.92-.631l3.98 1.941zm6.128-12.564c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.257c3.608 1.76 6.427 2.689 9.941 3.294l3.98 1.941zm35.302 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.613-1.256c-4.299-2.097-6.987-3.829-9.688-6.281l-3.911-1.907zm-52.9-14.914c5.302 2.586 8.99 3.443 15.34 4.059l1.313.126c7.131.687 11.318 1.681 17.822 4.853 6.452 3.147 9.276 5.474 13.962 10.642 4.795 5.289 7.749 7.724 14.385 10.96l.612-1.256c-6.452-3.147-9.276-5.475-13.962-10.643-4.795-5.288-7.749-7.723-14.384-10.959-6.676-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-6.2-.602-9.734-1.423-14.862-3.924l-.613 1.256z"
                />
                <path d="M69.204 141.826a243.037 243.037 0 002.12.207c7.13.686 11.317 1.681 17.821 4.853 6.452 3.147 9.276 5.474 13.962 10.642.483.533.948 1.037 1.399 1.516l3.911 1.907c-1.353-1.228-2.71-2.637-4.275-4.362-4.795-5.289-7.749-7.723-14.384-10.96-6.676-3.256-11.017-4.286-18.3-4.988l-1.313-.126c-1.837-.178-3.44-.375-4.92-.63l3.98 1.941zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.427 2.688 9.941 3.293l3.98 1.941zm35.302 17.219c4.029 4.271 7.019 6.534 12.986 9.444l.613-1.257c-4.299-2.096-6.987-3.829-9.688-6.28l-3.911-1.907zm-52.9-14.914c5.302 2.586 8.99 3.443 15.34 4.059l1.314.126c7.13.686 11.317 1.68 17.821 4.853 6.452 3.147 9.276 5.474 13.962 10.642 4.795 5.289 7.749 7.724 14.385 10.96l.613-1.257c-6.453-3.147-9.277-5.474-13.962-10.642-4.796-5.289-7.75-7.724-14.385-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-6.2-.601-9.734-1.423-14.862-3.924l-.613 1.257z" />
                <path d="M63.08 154.387c.263.028.532.055.805.081.27.027 1.188.114 1.314.126 7.13.687 11.317 1.681 17.821 4.853 6.452 3.147 9.276 5.475 13.962 10.643.483.533.948 1.037 1.4 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.275-4.362-4.795-5.289-7.749-7.724-14.384-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-1.837-.178-3.44-.376-4.92-.631l3.98 1.941zm6.127-12.564c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.257c3.608 1.76 6.427 2.689 9.941 3.294l3.98 1.941zm35.302 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.613-1.256c-4.299-2.097-6.987-3.829-9.688-6.28l-3.911-1.908zm-52.9-14.914c5.302 2.586 8.99 3.443 15.34 4.059l1.314.126c7.13.687 11.317 1.681 17.821 4.853 6.452 3.147 9.276 5.475 13.962 10.643 4.795 5.288 7.749 7.723 14.385 10.959l.613-1.256c-6.453-3.147-9.277-5.474-13.962-10.642-4.796-5.289-7.75-7.724-14.385-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-6.2-.601-9.734-1.423-14.862-3.924l-.613 1.256z" />
                <path d="M56.949 166.951a219.537 219.537 0 002.12.207c7.13.686 11.316 1.681 17.82 4.853 6.453 3.147 9.276 5.474 13.963 10.642.483.533.947 1.037 1.398 1.516l3.912 1.907c-1.354-1.228-2.71-2.637-4.275-4.362-4.796-5.289-7.75-7.723-14.385-10.96-6.675-3.256-11.016-4.286-18.3-4.988l-1.313-.126c-1.837-.178-3.44-.375-4.92-.63l3.98 1.941zm6.128-12.565c-5.866-.612-9.46-1.503-14.535-3.978l.614-1.256c3.608 1.76 6.427 2.688 9.94 3.293l3.98 1.941zm35.302 17.219c4.029 4.271 7.019 6.534 12.986 9.444l.613-1.257c-4.299-2.096-6.987-3.829-9.688-6.28l-3.912-1.907zm-52.9-14.914c5.302 2.586 8.989 3.443 15.34 4.059l1.313.126c7.13.686 11.318 1.68 17.822 4.853 6.452 3.147 9.276 5.474 13.962 10.642 4.794 5.289 7.75 7.724 14.385 10.96l.613-1.257c-6.453-3.147-9.278-5.474-13.963-10.642-4.795-5.289-7.75-7.724-14.384-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-6.2-.601-9.735-1.423-14.862-3.924l-.614 1.257z" />
                <path d="M50.822 179.516c.264.028.533.055.807.081l1.313.126c7.13.687 11.317 1.681 17.82 4.853 6.454 3.147 9.277 5.475 13.963 10.643.483.533.948 1.037 1.399 1.515l3.91 1.908c-1.352-1.228-2.71-2.637-4.273-4.362-4.796-5.289-7.75-7.724-14.385-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.442-.376-4.922-.631l3.98 1.941zm6.128-12.564c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.257c3.608 1.76 6.427 2.689 9.94 3.294l3.98 1.941zm35.303 17.218c4.028 4.272 7.018 6.534 12.985 9.444l.613-1.256c-4.299-2.097-6.987-3.829-9.688-6.281l-3.91-1.907zm-52.901-14.914c5.302 2.586 8.989 3.443 15.34 4.059l1.314.126c7.13.687 11.317 1.681 17.82 4.853 6.454 3.147 9.277 5.474 13.963 10.642 4.795 5.289 7.75 7.724 14.385 10.96l.613-1.256c-6.453-3.147-9.276-5.475-13.962-10.643-4.796-5.288-7.75-7.723-14.385-10.959-6.676-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.602-9.735-1.423-14.863-3.924l-.613 1.256z" />
                <path d="M44.69 192.08a219.537 219.537 0 002.12.207c7.13.686 11.318 1.68 17.822 4.853 6.453 3.147 9.276 5.474 13.962 10.642.483.533.948 1.037 1.4 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.286-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.375-4.922-.63l3.98 1.941zm6.129-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.428 2.688 9.94 3.293l3.98 1.941zm35.303 17.219c4.028 4.271 7.018 6.533 12.985 9.444l.613-1.257c-4.3-2.096-6.987-3.829-9.688-6.28l-3.91-1.907zM33.22 181.819c5.303 2.587 8.989 3.444 15.34 4.06l1.314.125c7.13.687 11.317 1.681 17.82 4.853 6.454 3.148 9.277 5.475 13.963 10.643 4.796 5.289 7.75 7.724 14.385 10.96l.613-1.257c-6.453-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.601-9.735-1.423-14.863-3.924l-.613 1.256zM181.058 71.955a219.275 219.275 0 002.12.207c7.131.686 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.962 10.642.484.533.948 1.037 1.4 1.516l3.911 1.907c-1.354-1.228-2.711-2.637-4.275-4.362-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.286-18.3-4.988L182 70.644c-1.838-.178-3.441-.375-4.921-.63l3.979 1.941zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.609 1.76 6.428 2.688 9.942 3.293l3.979 1.941zm35.303 17.22c4.029 4.27 7.019 6.532 12.985 9.443l.613-1.257c-4.298-2.096-6.986-3.829-9.687-6.28l-3.911-1.907zm-52.901-14.916c5.303 2.587 8.989 3.444 15.341 4.06l1.313.125c7.131.687 11.317 1.681 17.821 4.853 6.453 3.148 9.277 5.475 13.962 10.643 4.796 5.29 7.75 7.724 14.385 10.96l.613-1.257c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.749-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.6-9.734-1.423-14.863-3.924l-.613 1.256z" />
                <path d="M174.927 84.516a2087.54 2087.54 0 002.12.207c7.131.687 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.475 13.963 10.643.483.533.947 1.037 1.399 1.515l3.911 1.908c-1.354-1.228-2.711-2.637-4.275-4.362-4.795-5.29-7.749-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.376-4.921-.631l3.979 1.94zm6.128-12.564c-5.865-.612-9.46-1.503-14.534-3.978l.613-1.257c3.609 1.76 6.428 2.689 9.942 3.294l3.979 1.94zm35.303 17.218c4.029 4.272 7.019 6.534 12.985 9.444l.613-1.256c-4.298-2.097-6.986-3.83-9.687-6.281l-3.911-1.907zm-52.901-14.914c5.303 2.586 8.989 3.443 15.341 4.059l1.313.126c7.131.687 11.317 1.68 17.821 4.853 6.453 3.147 9.277 5.474 13.963 10.642 4.795 5.289 7.749 7.724 14.384 10.96l.613-1.256c-6.452-3.147-9.276-5.475-13.962-10.643-4.795-5.288-7.749-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.987l-1.312-.126c-6.2-.602-9.734-1.423-14.863-3.924l-.613 1.256z" />
                <path d="M168.797 97.078a243.934 243.934 0 002.12.207c7.131.686 11.318 1.68 17.822 4.853 6.452 3.147 9.276 5.474 13.962 10.642.483.533.947 1.037 1.399 1.516l3.911 1.907c-1.354-1.228-2.71-2.637-4.275-4.362-4.795-5.289-7.749-7.723-14.385-10.96-6.675-3.256-11.017-4.286-18.3-4.988l-1.312-.126c-1.838-.178-3.441-.375-4.921-.63l3.979 1.941zm6.128-12.565c-5.865-.612-9.459-1.503-14.533-3.978l.612-1.256c3.609 1.76 6.428 2.688 9.942 3.293l3.979 1.941zm35.303 17.219c4.029 4.271 7.019 6.534 12.986 9.444l.612-1.257c-4.298-2.096-6.986-3.829-9.687-6.28l-3.911-1.907zm-52.9-14.914c5.302 2.586 8.988 3.443 15.34 4.06.269.025 1.188.112 1.313.125 7.131.686 11.318 1.68 17.822 4.852 6.452 3.148 9.276 5.475 13.962 10.643 4.795 5.289 7.749 7.724 14.385 10.96l.612-1.257c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.749-7.724-14.385-10.96-6.675-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-6.2-.6-9.734-1.423-14.863-3.924l-.612 1.257z" />
                <path d="M162.669 109.643c.264.028.532.055.806.081l1.313.126c7.131.687 11.318 1.681 17.822 4.853 6.452 3.147 9.276 5.475 13.962 10.643.483.533.948 1.037 1.399 1.515l3.911 1.908c-1.354-1.228-2.71-2.637-4.275-4.362-4.795-5.289-7.749-7.724-14.385-10.96-6.675-3.256-11.016-4.287-18.3-4.988l-1.312-.126c-1.837-.178-3.441-.376-4.921-.631l3.98 1.941zm6.128-12.564c-5.866-.612-9.46-1.503-14.534-3.978l.612-1.257c3.609 1.76 6.428 2.689 9.942 3.294l3.98 1.94zm35.302 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.612-1.256c-4.298-2.097-6.986-3.83-9.687-6.281l-3.911-1.907zm-52.9-14.914c5.302 2.586 8.989 3.443 15.34 4.059l1.313.126c7.131.687 11.318 1.681 17.822 4.853 6.452 3.147 9.276 5.474 13.962 10.642 4.795 5.289 7.749 7.724 14.385 10.96l.612-1.256c-6.452-3.147-9.276-5.475-13.962-10.643-4.795-5.288-7.749-7.723-14.385-10.96-6.675-3.255-11.016-4.286-18.3-4.987l-1.312-.126c-6.2-.602-9.734-1.423-14.863-3.924l-.612 1.256z" />
                <path
                  d="M156.542 122.205l.806.081 1.313.126c7.131.686 11.318 1.68 17.822 4.853 6.452 3.147 9.276 5.474 13.962 10.642.483.533.948 1.037 1.399 1.516l3.911 1.907c-1.354-1.228-2.71-2.637-4.275-4.362-4.795-5.289-7.749-7.724-14.385-10.96-6.675-3.256-11.016-4.286-18.3-4.988l-1.312-.126c-1.837-.178-3.441-.375-4.921-.63l3.98 1.941zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.427 2.688 9.941 3.293l3.98 1.941zm35.302 17.219c4.029 4.271 7.019 6.533 12.986 9.444l.613-1.257c-4.299-2.096-6.987-3.829-9.688-6.28l-3.911-1.907zm-52.9-14.915c5.302 2.587 8.989 3.444 15.34 4.06l1.313.125c7.131.687 11.318 1.681 17.822 4.853 6.452 3.148 9.276 5.475 13.962 10.643 4.795 5.289 7.749 7.724 14.385 10.96l.612-1.257c-6.452-3.147-9.276-5.474-13.962-10.642-4.795-5.289-7.749-7.724-14.384-10.96-6.676-3.256-11.017-4.287-18.301-4.988l-1.312-.126c-6.2-.601-9.734-1.423-14.863-3.924l-.612 1.256zM150.413 134.772c.264.028.533.055.806.081l1.314.126c7.13.687 11.317 1.681 17.821 4.853 6.452 3.147 9.276 5.474 13.962 10.642a98.04 98.04 0 001.399 1.516l3.911 1.908c-1.353-1.229-2.71-2.637-4.275-4.362-4.795-5.289-7.749-7.724-14.384-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-1.837-.178-3.441-.376-4.921-.631l3.98 1.941zm6.128-12.564c-5.866-.612-9.46-1.504-14.534-3.978l.613-1.257c3.608 1.76 6.427 2.689 9.941 3.294l3.98 1.941zm35.302 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.613-1.256c-4.299-2.097-6.987-3.83-9.688-6.281l-3.911-1.907zm-52.9-14.914c5.302 2.586 8.989 3.443 15.34 4.059l1.314.126c7.13.687 11.317 1.681 17.821 4.853 6.452 3.147 9.276 5.474 13.962 10.642 4.795 5.289 7.749 7.724 14.385 10.96l.613-1.256c-6.453-3.147-9.277-5.475-13.963-10.643-4.795-5.288-7.749-7.723-14.384-10.96-6.676-3.255-11.017-4.286-18.3-4.988l-1.313-.125c-6.2-.602-9.734-1.423-14.862-3.925l-.613 1.257zM144.286 
      147.341c.264.028.533.055.806.082l1.314.125c7.13.687 11.317 1.681 17.821 4.853 6.452 3.147 9.276 5.475 13.962 10.643.483.533.948 1.037 1.399 1.516l3.911 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.796-5.289-7.75-7.724-14.385-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-1.837-.178-3.441-.376-4.921-.631l3.98 1.941zm6.128-12.564c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.427 2.688 9.941 3.293l3.98 1.941zm35.302 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.613-1.256c-4.299-2.097-6.987-3.829-9.688-6.28l-3.911-1.908zm-52.9-14.914c5.302 2.586 8.989 3.443 15.34 4.059l1.314.126c7.13.687 11.317 1.681 17.821 4.853 6.452 3.147 9.276 5.475 13.962 10.643 4.795 5.288 7.749 7.723 14.385 10.96l.613-1.257c-6.453-3.147-9.277-5.474-13.962-10.642-4.796-5.289-7.75-7.724-14.385-10.96-6.676-3.256-11.017-4.287-18.3-4.988l-1.313-.126c-6.2-.601-9.734-1.423-14.862-3.924l-.613 1.256z"
                />
                <path d="M138.156 159.901c.264.028.533.055.807.081l1.313.126c7.13.687 11.317 1.681 17.821 4.853 6.452 3.147 9.276 5.474 13.962 10.642.483.533.948 1.037 1.399 1.516l3.911 1.908c-1.353-1.229-2.71-2.637-4.274-4.363-4.796-5.288-7.75-7.723-14.385-10.959-6.676-3.256-11.017-4.287-18.3-4.988l-1.312-.126c-1.838-.179-3.442-.376-4.922-.631l3.98 1.941zm6.128-12.564c-5.866-.612-9.46-1.504-14.534-3.978l.613-1.257c3.608 1.76 6.427 2.688 9.941 3.294l3.98 1.941zm35.302 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.613-1.257c-4.299-2.096-6.987-3.829-9.688-6.28l-3.911-1.907zm-52.9-14.914c5.302 2.586 8.989 3.443 15.341 4.059l1.313.126c7.13.686 11.317 1.681 17.821 4.853 6.453 3.147 9.276 5.474 13.962 10.642 4.795 5.289 7.75 7.724 14.385 10.96l.613-1.256c-6.453-3.147-9.277-5.475-13.962-10.643-4.796-5.288-7.75-7.723-14.385-10.96-6.676-3.255-11.017-4.286-18.3-4.988l-1.312-.125c-6.2-.602-9.735-1.423-14.863-3.925l-.613 1.257z" />
                <path d="M132.033 172.461l.807.081 1.312.126c7.13.686 11.318 1.68 17.822 4.852 6.452 3.148 9.276 5.475 13.962 10.643.483.533.948 1.037 1.399 1.516l3.91 1.907c-1.353-1.228-2.71-2.637-4.274-4.362-4.796-5.289-7.749-7.724-14.384-10.96-6.676-3.256-11.018-4.287-18.301-4.988l-1.312-.126c-1.837-.178-3.441-.376-4.921-.63l3.98 1.941zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.426 2.688 9.94 3.293l3.981 1.941zm35.302 17.218c4.029 4.272 7.019 6.534 12.986 9.444l.613-1.256c-4.299-2.096-6.987-3.829-9.688-6.28l-3.911-1.908zM120.562 162.2c5.303 2.587 8.99 3.443 15.342 4.059.269.027 1.187.114 1.313.126 7.13.687 11.317 1.681 17.821 4.853 6.452 3.147 9.275 5.475 13.961 10.643 4.795 5.288 7.751 7.723 14.386 10.96l.612-1.257c-6.453-3.147-9.276-5.474-13.961-10.642-4.796-5.289-7.751-7.724-14.386-10.96-6.676-3.256-11.016-4.287-18.299-4.988l-1.313-.126c-6.2-.601-9.734-1.423-14.862-3.924l-.614 1.256zM125.9 185.031a219.537 219.537 0 002.12.207c7.13.687 11.317 1.681 17.821 4.853 6.453 3.147 9.276 5.474 13.962 10.642.483.533.948 1.037 1.4 1.516l3.91 1.908c-1.353-1.229-2.71-2.637-4.274-4.363-4.795-5.288-7.75-7.723-14.385-10.96-6.675-3.255-11.017-4.286-18.3-4.988l-1.312-.125c-1.838-.179-3.441-.376-4.922-.631l3.98 1.941zm6.128-12.565c-5.866-.612-9.46-1.503-14.534-3.978l.613-1.256c3.608 1.76 6.428 2.688 9.941 3.293l3.98 1.941zm35.303 17.219c4.028 4.272 7.018 6.534 12.985 9.444l.613-1.257c-4.299-2.096-6.987-3.829-9.688-6.28l-3.91-1.907zm-52.901-14.914c5.303 2.586 8.989 3.443 15.341 4.059l1.313.126c7.13.686 11.317 1.68 17.821 4.853 6.453 3.147 9.276 5.474 13.962 10.642 4.795 5.289 7.75 7.724 14.385 10.96l.613-1.256c-6.453-3.148-9.276-5.475-13.962-10.643-4.795-5.289-7.75-7.724-14.385-10.96-6.675-3.256-11.017-4.286-18.3-4.988l-1.312-.126c-6.2-.601-9.735-1.422-14.863-3.924l-.613 1.257z" />
              </g>
              <defs>
                <clipPath id="decoration3clip0">
                  <path fill="#fff" d="M-71-71h246v321H-71z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="container-lg">
            <div className="justify-content-center row">
              <div className="text-center col-lg-8 col-md-10">
                <hr className="hr-sm border-warning mb-10 mb-md-12" />
                <h6 className="text-uppercase text-primary mb-5">
                  {/* Start today */}
                  BẮT ĐẦU NGAY HÔM NAY
                </h6>
                <h2 className="display-3 mb-4">
                  {/* Build your brand. */}
                  Xây dựng thương hiệu của bạn.
                  </h2>
                <p>
                  {/* Your customers deserve the best products. You deserve the best
                  platform. */}
                  Khách hàng của bạn xứng đáng có những sản phẩm tốt nhất. Bạn xứng đáng có được nền tảng tốt nhất.
                </p>
                <a
                  className="btn btn-primary lift"
                  href="https://app.avaprint.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* Get Started */}
                  Bắt Đầu
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout >
  )
}

export default IndexPage
