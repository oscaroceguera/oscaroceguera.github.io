import React from 'react'
import { graphql } from 'gatsby'
import Nav from '../../../components/Nav'
import Img from 'gatsby-image'
import styles from './styles.module.css'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <div>
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
  }
`
