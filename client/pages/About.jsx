import React from 'react'
import Helmet from 'react-helmet-async'
import Page from './component/Page.js'

const About = () => (
  <Page>
    <Helmet>
      <title>About Page</title>
    </Helmet>
    <div>
      This is the about page
    </div>

  </Page>
)
export default About
