import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

//import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogCategoryIndex = ({
    data,
    pageContext: { nextPagePath, previousPagePath },
}) => {
    const posts = data.allWpCategory.nodes

    if (!posts.length) {
        return (
            <Layout isHomePage>
                <Seo title="All posts" />
                <p>
                    No blog posts found. Add posts to your WordPress site and they'll
                    appear here!
                </p>
            </Layout>
        )
    }

    return (
        <Layout isHomePage>
            <Seo title="All posts" />

            <header className="global-header">

                <h1 className="main-heading">
                    <Link to="/category">Categories</Link>
                </h1>

            </header>

            <ol style={{ listStyle: `none` }}>
                {posts.map(post => {
                    const title = post.name

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
                                            <span itemProp="headline">{title}</span>
                                        </Link>
                                    </h2>

                                </header>
                                <section itemProp="description">{post.description}</section>
                            </article>
                        </li>
                    )
                })}
            </ol>

            {previousPagePath && (
                <>
                    <Link to={previousPagePath}>Previous page</Link>
                    <br />
                </>
            )}
            {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
        </Layout>
    )
}

export default BlogCategoryIndex

export const pageQuery = graphql`
  query WordPressPostCategoryArchive($offset: Int!, $totalCount: Int!) {
    allWpCategory(
        sort: {fields: [name], order: DESC}
        limit: $totalCount 
        skip: $offset 
        ){
        nodes {
          name
          uri  
          description        
        }
      }
  }
`
