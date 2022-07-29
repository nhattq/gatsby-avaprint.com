const path = require("path")  
// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
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

   products: allWpProduct {
    edges {
      node {
        name
        slug
        description
        shortDescription
        image {
          sourceUrl
        }
        galleryImages {
          nodes {
            sourceUrl
          }
        }
        productCategories {
          nodes {
            name
            slug
          }
        }
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
            slug
            image {
              sourceUrl
            }
          }
        }
      }
    }
  }
   }
  `)
  
  //create blog posts pages
  result.data.posts.nodes.forEach(item => {
        createPage({
            path: `/blog/${item.slug}`,
            component: path.resolve(`${__dirname}/src/templates/blog-template.js`),
            context: {
                data: item
            },
        })
    });

    //create category pages
  result.data.categories.edges.forEach(item => {
        createPage({
            path: `/catalog/category/${item.node.slug}`,
            component: path.resolve(`${__dirname}/src/templates/products-categories.js`),
            context: {
                data: item
            },
        })
    })

    //generate product pages
  result.data.products.edges.forEach(item => {
        createPage({
            path: `/catalog/product/${item.node.slug}`,
            component: path.resolve(`${__dirname}/src/templates/product-page.js`),
            context: {
                data: item
            },
        })
    })
}
