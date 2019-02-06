import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import BottomDiv from './../components/BottomDiv/BottomDiv'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Bussiness Single Page' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Navbar />
    <main>{children()}</main>
    <Footer />
    <BottomDiv />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

library.add(fab, far, fas)
export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
