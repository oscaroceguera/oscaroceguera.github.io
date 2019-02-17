import React from 'react'
import { graphql } from 'gatsby'
import Nav from '../../../components/Nav'
import Img from 'gatsby-image'
import styles from './styles.module.css'
import Metatags from '../../../components/Metatags'

export default (props) => {
  const post = props.data.markdownRemark

  return (
    <div>
      <Metatags
        title={post.frontmatter.title}
        description={post.excerpt}
        url={props.data.site.siteMetadata.siteUrl}
        pathname={props.location.pathname}
      />
      <Nav secondary />
      <div className={styles.container}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <h4 className={styles.date}>{post.frontmatter.date}</h4>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
        <div className={styles.section} dangerouslySetInnerHTML={{ __html: post.html }} />
        <h3 className={styles.byMe}>Publicado por Oscar Oceguera</h3>
      </div>
    </div >
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 200)
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
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
