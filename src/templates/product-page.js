import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout'
import ImageGallery from 'react-image-gallery';

const ProductPage = ({ pageContext: { data } }) => {

  // let images = [
  //   {
  //     original: 'https://picsum.photos/id/1018/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1018/250/150/',
  //   },
  //   {
  //     original: 'https://picsum.photos/id/1015/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1015/250/150/',
  //   },
  //   {
  //     original: 'https://picsum.photos/id/1019/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
  //   },
  // ];
  let images = [
    {
      original: data.node.image.sourceUrl,
      thumbnail: data.node.image.sourceUrl
    }
  ];
  data.node.galleryImages.nodes.forEach(item => {
    images = [...images, { original: item.sourceUrl, thumbnail: item.sourceUrl }]
  })

  console.log("imgsssss", images)
  const result = useStaticQuery(graphql`
  {categories: allWpProductCategory {
    edges {
      node {
        name
        slug
      }
    }
  }
  }
  `)
  const categories = result.categories.edges;
  // console.log('result', result)
  return (
    <Layout>
      <main>
        <section>
          <div className="mb-12 container">
            <div className="row">
              <div className="d-none d-md-block col-lg-3 col-md-4">
                <div>
                  <div
                    className="pr-6 border-right border-bottom"
                    style={{ top: "-3px", position: "relative" }}
                  >
                    <h5 className="mb-4 pt-4">
                      <a
                        className="text-decoration-none text-reset"
                        href="/catalog"
                      >
                        <span className="text-primary">All Products</span>
                      </a>
                    </h5>
                  </div>
                  <div className="pr-6 pt-4 border-right border-bottom">
                    {categories.map(category => (
                      <Link
                        className="text-decoration-none text-reset"
                        to={`/catalog/category/${category.node.slug}`}
                      >
                        <h5 className="mb-4">
                          <span className>{category.node.name}</span>
                        </h5>
                      </Link>

                    ))}

                  </div>
                  {/* <div className="pr-6 pt-4 border-right">
                    <a
                      className="text-decoration-none text-reset"
                      href="/en/catalog/category/136"
                    >
                      <h5 className="mb-4">
                        <span className>New Arrivals</span>
                      </h5>
                    </a>
                  </div> */}
                  <div className="ml-n4 mt-8 pr-0 pt-4">
                    <div className="bg-light p-4 rounded-sm">
                      <div className="d-flex flex-row align-items-center">
                        <div className="icon icon-xs text-primary-light mr-4">
                          <svg width={24} height={24} viewBox="0 0 24 24">
                            <g fill="none" fillRule="evenodd">
                              <path d="M0 0h24v24H0z" />
                              <path
                                d="M13.686 18.708C15.91 17.82 18.683 17.25 22 17V5.506a.5.5 0 00-.513-.5C18.658 5.078 15.83 5.743 13 7v11.244a.5.5 0 00.686.464z"
                                fill="#335EEA"
                              />
                              <path
                                d="M2.686 18.708C4.91 17.82 7.683 17.25 11 17V5.506a.5.5 0 00-.513-.5C7.658 5.078 4.83 5.743 2 7v11.244a.5.5 0 00.686.464z"
                                fill="#335EEA"
                                opacity=".3"
                              />
                            </g>
                          </svg>
                        </div>
                        <div>
                          <div className="text-muted font-size-xxs">
                            Want to learn more?
                          </div>
                          <a
                            className="font-size-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/"
                          >
                            Sign up today!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-12">
                <div className="mb-4 pb-4 border-bottom row">
                  <div className="col">
                    <div className="nav" aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                          <Link
                            className="text-decoration-none text-muted"
                            href="/catalog"
                          >
                            Catalog
                          </Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link aria-current="page"
                            className="text-decoration-none text-reset"
                            to={`/catalog/category/${data.node.productCategories.nodes[0].slug}`}>
                            {data.node.productCategories.nodes[0].name}
                          </Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link
                            className="text-decoration-none text-reset"
                            to={`/catalog/product/${data.node.slug}`}
                          >
                            {data.node.name}
                          </Link>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="mb-4 pt-4 pb-4 border-bottom row">
                  <div className="d-md-block mb-8 mb-lg-0 col-lg-6">
                    <ImageGallery
                      items={images}
                      showPlayButton={false}
                      showBullets={false}
                      showNav={false}
                    />
                    {/* <img
                      className="img-fluid mb-6 mw-md-100 mb-4 border mb-md-0 border-4 border-md-7 border-white shadow"
                      src={data.node.image.sourceUrl}
                      alt="Product image of Standard T-Shirt"
                    />
                    {data.node.galleryImages.nodes.map(productImg => (
                      <img
                        className="border mt-2 mr-2 border-4 shadow border-primary"
                        src={productImg.sourceUrl}
                        alt={`Product image of ${data.node.name}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          cursor: "pointer",
                        }}
                      />

                    ))} */}
                    {/* <img
                      className="border mt-2 mr-2 border-4 shadow border-primary"
                      src="https://drmjya4epqbke.cloudfront.net/media/public/display-images/Tshirt_1635150939.jpeg"
                      alt="Product image of Standard T-Shirt"
                      style={{
                        width: "100px",
                        height: "100px",
                        cursor: "pointer",
                      }}
                    />
                    <img
                      className="border mt-2 mr-2 border-4 shadow border-white"
                      src="https://drmjya4epqbke.cloudfront.net/media/public/display-images/231249e7-6a8f-4ea4-8f2e-1dc236ffe49c1605227928.jpg"
                      alt="Product image of Standard T-Shirt"
                      style={{
                        width: "100px",
                        height: "100px",
                        cursor: "pointer",
                      }}
                    />
                    <img
                      className="border mt-2 mr-2 border-4 shadow border-white"
                      src="https://drmjya4epqbke.cloudfront.net/media/public/display-images/0dea2d2a-0e7d-43a6-ac44-95416cf53aa31605227908.jpg"
                      alt="Product image of Standard T-Shirt"
                      style={{
                        width: "100px",
                        height: "100px",
                        cursor: "pointer",
                      }}
                    /> */}
                  </div>
                  <div className="d-md-block col-lg-6">
                    <h1 className="display-4 mb-4">{data.node.name}</h1>
                    <hr className="hr-sm border-primary ml-0 mb-6" />
                    <h2 className="h5 mb-2 text-uppercase">Starting at</h2>
                    <p className="line-height-reset h1 mb-6">
                      $13.50&nbsp;
                      <span className="line-height-reset text-muted font-size-xs font-weight-normal">
                        Includes US Shipping
                      </span>
                    </p>
                    <p dangerouslySetInnerHTML={{ __html: data.node.shortDescription }}></p>
                    <div className="bg-light p-4 rounded-sm mb-6">
                      <div className="d-flex flex-row align-items-center">
                        <div className="icon icon-xs text-primary-light mr-4">
                          <svg width={24} height={24} viewBox="0 0 24 24">
                            <g fill="none" fillRule="evenodd">
                              <path d="M0 0h24v24H0z" />
                              <path
                                fill="#335EEA"
                                opacity=".3"
                                d="M12 20.022l-3.527 1.707-1.604-3.575-3.799-.959 1.069-3.77-2.293-3.176 3.241-2.2.285-3.908 3.898.398L12 1.729l2.73 2.81 3.898-.398.285 3.907 3.241 2.201-2.293 3.177 1.069 3.769-3.8.96-1.603 3.574z"
                              />
                              <path
                                fill="#335EEA"
                                d="M14.09 8.603L8.36 14.7 9.71 16.05l5.728-6.099z"
                              />
                              <path
                                d="M10.854 9.175a1.718 1.718 0 11-3.435.002 1.718 1.718 0 013.435-.002M14.864 16.622a1.719 1.719 0 110-3.437 1.719 1.719 0 010 3.437z"
                                fill="#335EEA"
                                opacity=".3"
                              />
                            </g>
                          </svg>
                        </div>
                        <div>
                          <div className="font-size-sm">
                            Get up to a 15% discount on select variants
                          </div>
                          <div className="text-muted font-size-xxs">
                            Contact us to learn more about volume-based
                            discounts
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <h2 className="h5 mb-2 text-uppercase">Sizes</h2>
                    <div className="SizeBadgesLarge">
                      <div className="SizeBadgeLarge mr-2 mb-2 lift active">
                        <span>S</span>
                      </div>
                      <div className="SizeBadgeLarge mr-2 mb-2 lift">
                        <span>M</span>
                      </div>
                      <div className="SizeBadgeLarge mr-2 mb-2 lift">
                        <span>L</span>
                      </div>
                      <div className="SizeBadgeLarge mr-2 mb-2 lift">
                        <span>XL</span>
                      </div>
                      <div className="SizeBadgeLarge mr-2 mb-2 lift">
                        <span>2XL</span>
                      </div>
                      <div className="SizeBadgeLarge mr-2 mb-2 lift">
                        <span>3XL</span>
                      </div>
                      <div className="SizeBadgeLarge mr-2 mb-2 lift">
                        <span>4XL</span>
                      </div>
                      <div className="SizeBadgeLarge mr-2 mb-2 lift">
                        <span>5XL</span>
                      </div>
                      <div className="SizeBadgeLarge mr-2 mb-2 lift">
                        <span>6XL</span>
                      </div>
                    </div> */}
                    <div className="mb-6" />
                    {/* <h2 className="h5 mb-2 text-uppercase">Colors</h2>
                    <div className="ColorBadgesLarge">
                      <div className="ColorBadgeLarge mr-2 mb-2 lift active">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(24, 24, 24)" }}
                        />
                        <span>Black</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(250, 250, 250)" }}
                        />
                        <span>White</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(32, 39, 76)" }}
                        />
                        <span>Navy Blue</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(0, 83, 175)" }}
                        />
                        <span>Royal Blue</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(213, 214, 219)" }}
                        />
                        <span>Heather Grey</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(184, 24, 47)" }}
                        />
                        <span>Red</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(1, 154, 87)" }}
                        />
                        <span>Kelly Green</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(27, 49, 40)" }}
                        />
                        <span>Forest Green</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(255, 112, 64)" }}
                        />
                        <span>Orange</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(89, 40, 117)" }}
                        />
                        <span>Purple</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(91, 91, 93)" }}
                        />
                        <span>Heather Dark Grey</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(255, 108, 146)" }}
                        />
                        <span>Safety Pink</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(254, 148, 188)" }}
                        />
                        <span>Azalea Pink</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(253, 199, 213)" }}
                        />
                        <span>Light Pink</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(214, 67, 111)" }}
                        />
                        <span>Heliconia Pink</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(187, 214, 230)" }}
                        />
                        <span>Light Blue</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(125, 162, 208)" }}
                        />
                        <span>Carolina Blue</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(214, 213, 209)" }}
                        />
                        <span>Ash Grey</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(252, 181, 49)" }}
                        />
                        <span>Gold</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(86, 87, 88)" }}
                        />
                        <span>Smoke Grey</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(128, 0, 0)" }}
                        />
                        <span>Dark Red</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(227, 217, 195)" }}
                        />
                        <span>Creme</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(51, 40, 34)" }}
                        />
                        <span>Brown</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(77, 77, 55)" }}
                        />
                        <span>Military Green</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(226, 226, 226)" }}
                        />
                        <span>Ice Grey</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(60, 65, 68)" }}
                        />
                        <span>Charcoal Grey</span>
                      </div>
                      <div className="ColorBadgeLarge mr-2 mb-2 lift">
                        <div
                          className="ColorBadgeLarge__color mr-2"
                          style={{ backgroundColor: "rgb(30, 61, 1)" }}
                        />
                        <span>Turf Green</span>
                      </div>
                    </div> */}
                    <div className="mb-6" />
                    <div className="bg-light p-4 rounded-sm mb-4">
                      <div className="d-flex flex-row align-items-center">
                        <div className="icon icon-xs text-primary-light mr-4">
                          <svg width={24} height={24} viewBox="0 0 24 24">
                            <g fill="none" fillRule="evenodd">
                              <path d="M0 0h24v24H0z" />
                              <path
                                d="M13.686 18.708C15.91 17.82 18.683 17.25 22 17V5.506a.5.5 0 00-.513-.5C18.658 5.078 15.83 5.743 13 7v11.244a.5.5 0 00.686.464z"
                                fill="#335EEA"
                              />
                              <path
                                d="M2.686 18.708C4.91 17.82 7.683 17.25 11 17V5.506a.5.5 0 00-.513-.5C7.658 5.078 4.83 5.743 2 7v11.244a.5.5 0 00.686.464z"
                                fill="#335EEA"
                                opacity=".3"
                              />
                            </g>
                          </svg>
                        </div>
                        <div>
                          <div className="text-muted font-size-xxs">
                            Want to start selling today?
                          </div>
                          <a
                            className="font-size-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="/"
                          >
                            Create a Dreamship account
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6 pt-4 pb-6 border-bottom row">
                  <div className="d-md-block col-sm-6">
                    <h2 className="h5 mb-4 text-uppercase">Production</h2>
                    <p className="line-height-reset mb-4">1—3 Business Days</p>
                    <p className="font-size-xxs text-muted">
                      Estimated production times.{" "}
                      <a
                        className
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/"
                      >
                        Sign up
                      </a>{" "}
                      to see current and historical production rates.
                    </p>
                  </div>
                  <div className="d-md-block col-sm-6">
                    <h2 className="h5 mb-4 text-uppercase">Ships to</h2>
                    <p className="line-height-reset mb-4">
                      US &amp; 130+ countries
                    </p>
                    <p className="font-size-xxs text-muted">
                      Express shipping available on select items. Multi-item
                      shipping discounts available for select items.{" "}
                      <a
                        className
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/"
                      >
                        Sign up
                      </a>{" "}
                      to see details.
                    </p>
                  </div>
                </div>
                <div className="mb-6 pt-4 row">
                  <div className="col">
                    <h2 className="h5 text-uppercase">Description</h2>
                    <p className="font-size-lg text-gray-600 mb-9" />
                    <div>
                      <div>
                        <p className='description' dangerouslySetInnerHTML={{ __html: data.node.description }}></p>
                        {/* <p>
                          Gift your clients their new favorite t-shirt with this
                          classic cotton knit. Its midweight fabric can be worn
                          all year long and is durable enough for work and play.
                          Have some fun with branding on any one of this
                          t-shirts's many color options!
                          <br />
                        </p> */}
                        {/* <ul>
                          <li>Unisex classic fit</li>
                          <li>Available in sizes S-6XL&nbsp;</li>
                          <li>Double-needle sleeve, collar, and bottom hem</li>
                          <li>Classic midweight fabric&nbsp;</li>
                          <li>Preshrunk jersey knit&nbsp;</li>
                          <li>
                            Tearaway label
                            <br />
                          </li>
                        </ul> */}
                      </div>
                    </div>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="position-relative">
          <div className="shape shape-fluid-x shape-top text-dark">
            <div className="shape-img pb-8 pb-md-12">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none">
                <path d="M0 25h25L75 0h25v50H0z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
        <div className="position-relative d-none d-md-block">
          <div className="position-absolute top-left text-warning mt-n11 ml-n8">
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
        </div>
        <div className="position-relative d-none d-md-block">
          <div className="position-absolute top-right text-primary-dark mt-n15">
            <svg
              width={129}
              height={208}
              viewBox="0 0 129 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#decoration5clip0)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M142.812 201.281a6.47 6.47 0 1112.94.002 6.47 6.47 0 01-12.94-.002zm1.618 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811zm-32.343 1.143a6.468 6.468 0 1112.936 0 6.468 6.468 0 01-12.936 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811z"
                  fill="currentColor"
                />
              </g>
              <g clipPath="url(#decoration5clip1)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M142.812 149.281a6.47 6.47 0 1112.94.002 6.47 6.47 0 01-12.94-.002zm1.618 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811zm-32.343 1.143a6.468 6.468 0 1112.936 0 6.468 6.468 0 01-12.936 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811z"
                  fill="currentColor"
                />
              </g>
              <g clipPath="url(#decoration5clip2)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M142.812 97.281a6.47 6.47 0 1112.939.002 6.47 6.47 0 01-12.939-.002zm1.618 0a4.851 4.851 0 119.703 0 4.851 4.851 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.81-1.143-1.143 4.811-4.81-4.811-4.812 1.143-1.143 4.811 4.81zm-32.343 1.143a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.937 0zm1.617 0a4.851 4.851 0 119.703 0 4.851 4.851 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.81-4.811-4.812 1.143-1.143 4.811 4.81z"
                  fill="currentColor"
                />
              </g>
              <g clipPath="url(#decoration5clip3)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.813 149.281a6.47 6.47 0 1112.938 0 6.47 6.47 0 01-12.938 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811zm-32.343 1.143a6.469 6.469 0 1112.937.001 6.469 6.469 0 01-12.938-.001zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811z"
                  fill="currentColor"
                />
              </g>
              <g clipPath="url(#decoration5clip4)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.813 97.281a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.343 1.143a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81z"
                  fill="currentColor"
                />
              </g>
              <g clipPath="url(#decoration5clip5)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M38.813 45.281a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.343 1.143a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81z"
                  fill="currentColor"
                />
              </g>
              <g clipPath="url(#decoration5clip6)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M90.813 175.281a6.47 6.47 0 1112.938 0 6.47 6.47 0 01-12.939 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811zm-32.344 1.143a6.469 6.469 0 1112.938.001 6.469 6.469 0 01-12.938-.001zm1.618 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811z"
                  fill="currentColor"
                />
              </g>
              <g clipPath="url(#decoration5clip7)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M90.813 123.281a6.47 6.47 0 1112.938 0 6.47 6.47 0 01-12.939 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.344 1.143a6.469 6.469 0 1112.938 0 6.469 6.469 0 01-12.938 0zm1.618 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811z"
                  fill="currentColor"
                />
              </g>
              <g clipPath="url(#decoration5clip8)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M90.813 71.281a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.344 1.143a6.469 6.469 0 1112.938 0 6.469 6.469 0 01-12.938 0zm1.618 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="decoration4clip0">
                  <path
                    transform="matrix(0 -1 -1 0 155.75 207.75)"
                    fill="#fff"
                    d="M0 0h51.75v51.75H0z"
                  />
                </clipPath>
                <clipPath id="decoration4clip1">
                  <path
                    transform="rotate(-90 155.75 0)"
                    fill="#fff"
                    d="M0 0h51.75v51.75H0z"
                  />
                </clipPath>
                <clipPath id="decoration4clip2">
                  <path
                    transform="matrix(0 -1 -1 0 155.75 103.75)"
                    fill="#fff"
                    d="M0 0h51.75v51.75H0z"
                  />
                </clipPath>
                <clipPath id="decoration4clip3">
                  <path
                    transform="matrix(0 -1 -1 0 51.75 155.75)"
                    fill="#fff"
                    d="M0 0h51.75v51.75H0z"
                  />
                </clipPath>
                <clipPath id="decoration4clip4">
                  <path
                    transform="matrix(0 -1 -1 0 51.75 103.75)"
                    fill="#fff"
                    d="M0 0h51.75v51.75H0z"
                  />
                </clipPath>
                <clipPath id="decoration4clip5">
                  <path
                    transform="matrix(0 -1 -1 0 51.75 51.75)"
                    fill="#fff"
                    d="M0 0h51.75v51.75H0z"
                  />
                </clipPath>
                <clipPath id="decoration4clip6">
                  <path
                    transform="matrix(0 -1 -1 0 103.75 181.75)"
                    fill="#fff"
                    d="M0 0h51.75v51.75H0z"
                  />
                </clipPath>
                <clipPath id="decoration4clip7">
                  <path
                    transform="matrix(0 -1 -1 0 103.75 129.75)"
                    fill="#fff"
                    d="M0 0h51.75v51.75H0z"
                  />
                </clipPath>
                <clipPath id="decoration4clip8">
                  <path
                    transform="matrix(0 -1 -1 0 103.75 77.75)"
                    fill="#fff"
                    d="M0 0h51.75v51.75H0z"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ProductPage