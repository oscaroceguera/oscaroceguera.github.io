import React from 'react'
import Header from './header'
import Bio from './bio'
import WorkExp from './workExp'
import Footer from '../components/Footer'
import Metatags from '../components/Metatags'
import { graphql } from 'gatsby'

export default (props) => {
  return (
    <div>
      <Metatags
        title='Oscar Oceguera'
        description='Oscar Oceguera desarrollador full stack javascript'
        url={props.data.site.siteMetadata.siteUrl}
        pathname={props.location.pathname}
      />
      <Header />
      <Bio />
      <WorkExp />
      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
