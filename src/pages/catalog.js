import React from 'react'
import Layout from '../components/Layout';
import { graphql, Link, useStaticQuery } from 'gatsby';
const Catalog = () => {

  const result = useStaticQuery(graphql`
  {
   products: allWpProduct {
    nodes {
      name
      slug
      image {
        sourceUrl
      }
    }
  }

  categories: allWpProductCategory {
    edges {
      node {
        name
        slug
        products {
          nodes {
            name
          }
        }
      }
    }
  }
  }
  `)
  const products = result.products.nodes;
  const categories = result.categories.edges;
  // console.log("categories", result.categories.edges)
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
                        href="/en/catalog/"
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
                        <div className="icon icon-sm text-primary-light mr-4">
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
              <div className="col">
                <div className="mb-4 pb-4 border-bottom d-flex justify-content-between row">
                  <div className="col">
                    <div className="nav" aria-label="breadcrumb">
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                          <Link
                            className="text-decoration-none text-reset"
                            href="/catalog"
                          >
                            Catalog
                          </Link>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="mb-4 pt-4 pb-4 row">
                  {products.map((product, index) => (
                    <div className="col-lg-3 col-sm-4 col-6" key={index}>
                      <Link
                        className="text-decoration-none text-reset"
                        to={`/catalog/product/${product.slug}`}
                      >
                        <div className="card-sm lift mb-6 card">
                          <div className="d-flex flex-row align-items-center border-bottom">
                            <img
                              className="img-fluid w-100"
                              src={product.image.sourceUrl}
                              alt={`Product image of ${product.name}`}
                            />
                          </div>
                          <div className="d-flex flex-column align-items-start p-3 border-bottom ">
                            <span className="font-size-sm mb-2">
                              {product.name}
                            </span>
                            {/* <div className="SizeBadge mb-3">S - 6XL</div> */}
                            {/* <div className="ColorBadges">
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(24, 24, 24)" }}
                              />
                              <div
                                className="ColorBadge--white ColorBadge"
                                style={{ backgroundColor: "rgb(250, 250, 250)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(32, 39, 76)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(0, 83, 175)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(213, 214, 219)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(184, 24, 47)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(1, 154, 87)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(27, 49, 40)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(255, 112, 64)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(89, 40, 117)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(91, 91, 93)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(255, 108, 146)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(254, 148, 188)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(253, 199, 213)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(214, 67, 111)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(187, 214, 230)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(125, 162, 208)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(214, 213, 209)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(252, 181, 49)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(86, 87, 88)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(128, 0, 0)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(227, 217, 195)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(51, 40, 34)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(77, 77, 55)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(226, 226, 226)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(60, 65, 68)" }}
                              />
                              <div
                                className="ColorBadge"
                                style={{ backgroundColor: "rgb(30, 61, 1)" }}
                              />
                            </div> */}
                          </div>
                          <div className="d-flex flex-row align-items-center justify-content-between p-3">
                            <div className="font-size-xxs text-muted">
                              Starting at
                            </div>
                            <div className="font-size-xs">
                              $13.50
                              <br />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Catalog;