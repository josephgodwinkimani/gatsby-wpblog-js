import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import { DiscussionEmbed } from "disqus-react"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

function BlogPostTemplate({ data: { previous, next, post } }) {
  const featuredImage = {
    data:
      post.featuredImage?.node?.localFile?.childImageSharp
        ?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  const posts = { data: post.categories?.nodes }

  //console.log(JSON.stringify(posts))

  const { slug } = post
  const { title } = post

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  }


  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{parse(post.title)}</h1>

          <p>{post.date}</p>

          {/* if we have a featured image for this post let's display it */}
          {featuredImage?.data && (
            <GatsbyImage
              image={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        {!!post.content && (
          <section itemProp="articleBody">
            {parse(post.content)}
          </section>
        )}

        <hr />

        <footer>
          <Bio />

          <h4>Categories</h4>

          <hr />

          {(posts.data && posts.data.length > 0) && posts.data.map(post => {
            const title = post.name

            return (
              <span key={post.id} className="blog-post-category">
                <Link to={post.uri} itemProp="url">
                  <span >{title}</span>
                </Link>
              </span>
            )
          })}

        </footer>

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
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>

      <DiscussionEmbed {...disqusConfig} />
    </Layout >
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostById(
        $id: String!
        $previousPostId: String
        $nextPostId: String
    ) {
        post: wpPost(id: { eq: $id }) {
            id
            excerpt
            content
            title
            date(formatString: "MMMM DD, YYYY")
            categories {
              nodes {
                id
                name
                uri
                count
              }
            }
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
        previous: wpPost(id: { eq: $previousPostId }) {
            uri
            title
        }
        next: wpPost(id: { eq: $nextPostId }) {
            uri
            title
        }
    }
`
