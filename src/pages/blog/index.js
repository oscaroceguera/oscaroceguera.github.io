import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Nav from '../../components/Nav'
import styles from './styles.module.css'
import Metatags from '../../components/Metatags'

export default (props) => {
  return (
    <div>
      <Metatags
        title='Oscar Oceguera'
        description='Oscar Oceguera desarrollador full stack javascript'
        url={props.data.site.siteMetadata.siteUrl}
        pathname={props.location.pathname}
      />
      <div className={styles.header}>
        <Nav />
        <h1 className={styles.headerTitle}>Blog</h1>
      </div>
      <div className={styles.posts}>
        {props.data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div className={styles.post} key={node.id}>
              <Img fixed={node.frontmatter.image.childImageSharp.fixed} />
              <div className={styles.container}>
                <Link
                  to={node.fields.slug}
                  className={styles.postLink}
                >
                  <h3 className={styles.postLinkTitle}>
                    {node.frontmatter.title}
                  </h3>
                  <p className={styles.date}>{node.frontmatter.date}</p>
                  <p className={styles.desc}>{node.excerpt}</p>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          image {
            childImageSharp {
              fixed(width: 300, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
  site {
      siteMetadata {
        title
      }
    }
}
`
