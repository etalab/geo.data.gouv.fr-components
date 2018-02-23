import prune from 'underscore.string/prune'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Meta = ({siteName, url, title, description, imgHref}) => {
  description = prune(description, 160, '…')
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      {title ? <title>{title} | {siteName}</title> : <title>{siteName}</title>}

      <link rel='icon' href='/static/favicon.ico' />

      {/* Search Engine */}
      <meta name='description' content={description} />
      {imgHref && <meta name='image' content={imgHref} />}

      {/* Schema.org for Google */}
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      {imgHref && <meta itemProp='image' content={imgHref} />}

      {/* Twitter */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:site' content='@geodatagouv' />
      <meta name='twitter:creator' content='geodatagouv' />
      {imgHref && <meta name='twitter:image:src' content={imgHref} />}

      {/* Open Graph general (Facebook, Pinterest & Google+) */}
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='og:image' content={imgHref} />
      {url && <meta name='og:url' content={url} />}
      <meta name='og:site_name' content={title} />
      <meta name='og:locale' content='fr_FR' />
      <meta name='og:type' content='website' />
    </Head>
  )
}

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgHref: PropTypes.string,
  url: PropTypes.string,
}

Meta.defaultProps = {
  imgHref: null,
  url: null,
}

export default Meta
