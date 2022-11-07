import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

function BlogPostCategoryTemplate({ data: { previous, next, category } }) {

  const posts = { data: category.posts?.nodes }

  return (
    <Layout>
      <Seo title={category.name} description={category.description} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >

        <ol style={{ listStyle: `none` }}>
          {(posts.data && posts.data.length > 0) && posts.data.map(post => {
            const title = post.title

            const featuredImage = {
              data:
                post.featuredImage?.node?.localFile?.childImageSharp
                  ?.gatsbyImageData,
              alt: post.featuredImage?.node?.alt || ``,
            }

            return (
              <li key={post.uri}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.uri} itemProp="url">
                        <span itemProp="headline">{parse(title)}</span>
                      </Link>
                    </h2>
                    <small>{post.date}</small>
                    {featuredImage?.data && (
                      <GatsbyImage
                        image={featuredImage.data}
                        alt={featuredImage.alt}
                        style={{ marginBottom: 50 }}
                      />
                    )}
                  </header>
                  <section itemProp="description">{parse(post.excerpt)}</section>
                </article>
              </li>
            )
          })}
        </ol>

      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.name)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.name)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>

    </Layout >
  )
}

export default BlogPostCategoryTemplate

export const pageQuery = graphql`
    query BlogPostCategoryById(
        $id: String!
        $previousCategoryId: String
        $nextCategoryId: String
    ) {
        category: wpCategory(id: {eq: $id }) {
          posts {
            nodes {
              date(formatString: "MMMM DD, YYYY")
              id
              title
              excerpt
              featuredImage {
                node {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 100
                        placeholder: TRACED_SVG
                        layout: FULL_WIDTH
                    )
                    }
                  }                  
                }
              }
            }
          }
          name
          id
          uri
          description
        }
        previous: wpCategory(id: {eq: $previousCategoryId}) {
          posts {
            nodes {  
              id
              title
              excerpt
              featuredImage {
                node {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 100
                        placeholder: TRACED_SVG
                        layout: FULL_WIDTH
                    )
                    }
                  }
                  
                }
              }
            }
          }
          name
          id
          uri
          description
        }
        next: wpCategory(id: {eq: $nextCategoryId}) {
          posts {
            nodes {
              date
              id
              title
              excerpt
              featuredImage {
                node {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 100
                        placeholder: TRACED_SVG
                        layout: FULL_WIDTH
                    )
                    }
                  }
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
          name
          id
          uri
          description
        }
      }
`
