import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import { graphql, Link, useStaticQuery } from 'gatsby';
import Moment from 'react-moment'

const Blog = () => {

  const result = useStaticQuery(graphql`
  {
   posts: allWpPost {
    nodes {
      title
      slug
      content
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
          srcSet
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
  }
  `)
  
  let allPosts = result.posts.nodes
  return (
    <Layout>
      <PageHeader title="Blog" heading="News and trends" description="E-commerce tips and insights." />
      <section>
        <div className="mb-12 container">
          <div className="row">
            {
              allPosts.map((post, index) => (
                <div index={index} className="col-lg-4 col-md-6">
                  <Link
                    className="text-decoration-none text-reset"
                    to={`/blog/${post.slug}`}
                  >
                    <div className="card-sm lift lift-lg mt-6 card">
                      <img
                        className="card-img-top"
                        src={post.featuredImage ? post.featuredImage.node.sourceUrl : ''}
                        alt="Dreamship Capacity Reserve - Secure your holiday season!"
                      />
                      <div className="card-body">
                        <h6 className="text-uppercase text-warning">{post.categories.nodes.map(category => category.name)}</h6>
                        <h2 className="mb-2">
                          {post.title}
                        </h2>
                        <p className="font-size-sm mb-4" dangerouslySetInnerHTML={{__html: post.excerpt}}>
                        </p>
                        <p className="font-size-xxs text-muted mt-n1 mb-0">
                            <Moment format="MM/DD/YYYY">
                        {post.date}
                      </Moment>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog