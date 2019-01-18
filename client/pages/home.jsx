import React from 'react'
import Helmet from 'react-helmet-async'
import Page from './component/Page.js'
const Home = () => (
  <Page>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <div>
      Follow me <a href="https://www.twitter.com/codymasao">@codymasao</a>
    </div>

  </Page>
)
export default Home
