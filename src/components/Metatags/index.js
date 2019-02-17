import React from 'react'
import Helmet from 'react-helmet'

const avatar = 'https://avatars1.githubusercontent.com/u/5040939?s=400&u=6b1c53b0468bc1eacaf820786a2a62d377fa82cc&v=4'

function Metatags(props) {
  return (
    <Helmet
      title={props.title}
      meta={[
        { name: 'title', content: props.title },
        { name: 'description', content: props.description },
        {
          name: 'keywords',
          content: 'Javascript, React, HTML, CSS, Frontend, Front end, front-end, Backend, Back-end, Back end, Freelance, Node, Nodejs, remote'
        },
        {
          property: 'og:title',
          content: props.title
        },
        {
          property: 'og:url',
          content: props.pathname ? props.url + props.pathname : props.url
        },
        {
          property: 'og:image',
          content: avatar
        },
        {
          property: 'og:image:secure_url',
          content: avatar
        },
        {
          property: 'og:description',
          content: props.description
        },
        {
          property: 'og:image:width',
          content: '1200'
        },

        {
          property: 'og:image:height',
          content: '630'
        },
        {
          property: 'og:locale',
          content: 'es'
        },
        { name: 'twitter:card', content: 'summary_large_image' },

        { name: 'twitter:title', content: props.title },

        {
          name: 'twitter:description',
          content: props.description
        },
        {
          name: 'twitter:image',
          content: avatar
        },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index, follow' },

        { name: 'twitter:creator', content: '@oscarOcegueraB' },
        { property: 'og:site_name', content: 'oscaroceguera.com' }
      ]}
    >
      <hrml lan='es' />
    </Helmet>
  )
}

export default Metatags
