import React from 'react'
import Helmet from 'react-helmet-async'
import { GlobalStyles } from './styles/styles.js'
const Home = () => (
  <React.Fragment>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <div>
      Follow me <a href="https://www.twitter.com/codymasao">@codymasao</a>
    </div>

  </React.Fragment>
)
export default Home
