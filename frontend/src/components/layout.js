import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import "../css/header.css"
import { CSSTransition } from "react-transition-group"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
} from '@fortawesome/free-solid-svg-icons'

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
    allWp: {
      nodes: [{
        siteLogo: { sourceUrl }
      }],
    },
    allWpCategory
  } = useStaticQuery(graphql`
    query LayoutQuery {
      allWp {
        nodes {
          siteLogo {
            sourceUrl
          }
        }
      }
      wp {
        generalSettings {
          title
          description
          url
        }
      }
      allWpCategory {
        nodes {
          id
          name
          uri
        }
      }
    }
  `)

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <div>

      <header className="Header">
        <Link to="/"><img src={sourceUrl} className="Logo" alt="logo" /></Link>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">

            {(allWpCategory.nodes && allWpCategory.nodes.length > 0) && allWpCategory.nodes.map(postCategory => {
              const title = postCategory.name

              return (
                <Link to={postCategory.uri}> {title}</Link>
              )
            })}

          </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Burger">
          <FontAwesomeIcon icon={faBars} size="1x" />
        </button>
      </header>

      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>

        )}
      </header>

      <div className="global-wrapper" data-is-root-path={isHomePage}>

        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
          And <a href="https://wordpress.org/">WordPress</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
