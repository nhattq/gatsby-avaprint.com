
import React from 'react'
import Layout from '../components/Layout';
import Moment from 'react-moment'

const BlogTemplate = ({ pageContext: { data } }) => {

    return (
        <Layout>
             <section className="bg-gradient-light">
        <div className="container-lg">
          <div className="justify-content-center row">
            <div className="position-relative col-md-8 col-12">
              <img
                className="img-fluid mt-6 mw-md-100 mb-4 border mb-md-0 border-4 border-md-7 Blog-heroImage border-white shadow"
                src={data.featuredImage ? data.featuredImage.node.sourceUrl : ''}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape shape-fluid-x shape-top text-white">
          <div className="shape-img pb-8 pb-md-10">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none">
              <path d="M0 25h25L75 0h25v50H0z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      <section className="py-10 py-md-12">
        <div className="container-lg">
          <div className="justify-content-center row">
            <div className="text-center col-lg-8 col-md-10">
              <h6 className="text-uppercase text-primary mb-5">{data.categories.nodes.map(category => category.name)}</h6>
              <h1 className="display-3 mb-4">
                {data.title}
              </h1>
              <p className="font-size-lg text-gray-600 mb-9" dangerouslySetInnerHTML={{__html: data.excerpt}}>
              </p>
              <hr className="hr-sm border-warning mb-9" />
            </div>
          </div>
          <div className="justify-content-center row">
            <div className="col-lg-8 col-md-10">
              <section className="RichText" dangerouslySetInnerHTML={{__html: data.content}}>
                {/* <p>[Updating]</p> */}
              </section>
              <hr className="my-9" />
              <footer className="d-flex align-items-center">
                <div>
                  <h4 className="font-family-sans-serif mb-0">Annie Nguyen</h4>
                  <p className="small text-muted mt-n1 mb-0">
                    Published {' '}
                    <Moment format="MM/DD/YYYY">
                        {data.date}
                      </Moment>
                      {/* 11/1/2021 */}
                  </p>
                </div>
              </footer>
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

      <div class="position-relative d-none d-md-block">
        <div class="position-absolute top-right text-primary-dark mt-n15">
          <svg
            width="129"
            height="208"
            viewBox="0 0 129 208"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#decoration5clip0)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M142.812 201.281a6.47 6.47 0 1112.94.002 6.47 6.47 0 01-12.94-.002zm1.618 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811zm-32.343 1.143a6.468 6.468 0 1112.936 0 6.468 6.468 0 01-12.936 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811z"
                fill="currentColor"
              ></path>
            </g>
            <g clip-path="url(#decoration5clip1)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M142.812 149.281a6.47 6.47 0 1112.94.002 6.47 6.47 0 01-12.94-.002zm1.618 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811zm-32.343 1.143a6.468 6.468 0 1112.936 0 6.468 6.468 0 01-12.936 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.811-4.811-4.811 1.143-1.143 4.811 4.811z"
                fill="currentColor"
              ></path>
            </g>
            <g clip-path="url(#decoration5clip2)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M142.812 97.281a6.47 6.47 0 1112.939.002 6.47 6.47 0 01-12.939-.002zm1.618 0a4.851 4.851 0 119.703 0 4.851 4.851 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.81-1.143-1.143 4.811-4.81-4.811-4.812 1.143-1.143 4.811 4.81zm-32.343 1.143a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.937 0zm1.617 0a4.851 4.851 0 119.703 0 4.851 4.851 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.811-4.811-4.811 4.811-1.143-1.144 4.811-4.81-4.811-4.812 1.143-1.143 4.811 4.81z"
                fill="currentColor"
              ></path>
            </g>
            <g clip-path="url(#decoration5clip3)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M38.813 149.281a6.47 6.47 0 1112.938 0 6.47 6.47 0 01-12.938 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811zm-32.343 1.143a6.469 6.469 0 1112.937.001 6.469 6.469 0 01-12.938-.001zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811z"
                fill="currentColor"
              ></path>
            </g>
            <g clip-path="url(#decoration5clip4)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M38.813 97.281a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.343 1.143a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81z"
                fill="currentColor"
              ></path>
            </g>
            <g clip-path="url(#decoration5clip5)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M38.813 45.281a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.343 1.143a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81z"
                fill="currentColor"
              ></path>
            </g>
            <g clip-path="url(#decoration5clip6)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M90.813 175.281a6.47 6.47 0 1112.938 0 6.47 6.47 0 01-12.939 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811zm-32.344 1.143a6.469 6.469 0 1112.938.001 6.469 6.469 0 01-12.938-.001zm1.618 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811z"
                fill="currentColor"
              ></path>
            </g>
            <g clip-path="url(#decoration5clip7)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M90.813 123.281a6.47 6.47 0 1112.938 0 6.47 6.47 0 01-12.939 0zm1.617 0a4.851 4.851 0 119.702 0 4.851 4.851 0 01-9.702 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.344 1.143a6.469 6.469 0 1112.938 0 6.469 6.469 0 01-12.938 0zm1.618 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.811-1.143-1.144 4.81-4.811-4.81-4.811 1.143-1.143 4.811 4.811z"
                fill="currentColor"
              ></path>
            </g>
            <g clip-path="url(#decoration5clip8)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M90.813 71.281a6.469 6.469 0 1112.937 0 6.469 6.469 0 01-12.938 0zm1.617 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851-27.018l4.811-4.811 1.144 1.143-4.811 4.811 4.811 4.811-1.144 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81zm-32.344 1.143a6.469 6.469 0 1112.938 0 6.469 6.469 0 01-12.938 0zm1.618 0a4.852 4.852 0 119.703 0 4.852 4.852 0 01-9.703 0zm4.851 24.732l4.811-4.811 1.144 1.143-4.811 4.811 4.81 4.811-1.143 1.144-4.81-4.811-4.812 4.81-1.143-1.143 4.81-4.81-4.81-4.812 1.143-1.143 4.811 4.81z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="decoration4clip0">
                <path
                  transform="matrix(0 -1 -1 0 155.75 207.75)"
                  fill="#fff"
                  d="M0 0h51.75v51.75H0z"
                ></path>
              </clipPath>
              <clipPath id="decoration4clip1">
                <path
                  transform="rotate(-90 155.75 0)"
                  fill="#fff"
                  d="M0 0h51.75v51.75H0z"
                ></path>
              </clipPath>
              <clipPath id="decoration4clip2">
                <path
                  transform="matrix(0 -1 -1 0 155.75 103.75)"
                  fill="#fff"
                  d="M0 0h51.75v51.75H0z"
                ></path>
              </clipPath>
              <clipPath id="decoration4clip3">
                <path
                  transform="matrix(0 -1 -1 0 51.75 155.75)"
                  fill="#fff"
                  d="M0 0h51.75v51.75H0z"
                ></path>
              </clipPath>
              <clipPath id="decoration4clip4">
                <path
                  transform="matrix(0 -1 -1 0 51.75 103.75)"
                  fill="#fff"
                  d="M0 0h51.75v51.75H0z"
                ></path>
              </clipPath>
              <clipPath id="decoration4clip5">
                <path
                  transform="matrix(0 -1 -1 0 51.75 51.75)"
                  fill="#fff"
                  d="M0 0h51.75v51.75H0z"
                ></path>
              </clipPath>
              <clipPath id="decoration4clip6">
                <path
                  transform="matrix(0 -1 -1 0 103.75 181.75)"
                  fill="#fff"
                  d="M0 0h51.75v51.75H0z"
                ></path>
              </clipPath>
              <clipPath id="decoration4clip7">
                <path
                  transform="matrix(0 -1 -1 0 103.75 129.75)"
                  fill="#fff"
                  d="M0 0h51.75v51.75H0z"
                ></path>
              </clipPath>
              <clipPath id="decoration4clip8">
                <path
                  transform="matrix(0 -1 -1 0 103.75 77.75)"
                  fill="#fff"
                  d="M0 0h51.75v51.75H0z"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
        </Layout>
    )
}
export default BlogTemplate;
