import React from 'react'
import Helmet from 'react-helmet-async'
import { GlobalStyles } from './styles/styles.js'
const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </React.Fragment>
)
export default App
