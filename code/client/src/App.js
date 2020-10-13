import React, { Suspense } from 'react'
import './App.less'
import { HashRouter as Router, Route } from 'react-router-dom'
import routes from './route/index'

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {routes.map((item) => {
          if (item.exact) {
            return <Route path={item.path} exact component={item.component} />
          } else {
            return <Route path={item.path} component={item.component} />
          }
        })}
      </Suspense>
    </Router>
  )
}
export default App
