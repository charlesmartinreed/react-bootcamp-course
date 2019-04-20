# React Router

# Static Routing

- When you declare your routes STATICALLY as part of your app's initialization
- Angular, Ember, Express, previous versions of react router...

- This is the old way of doing things
  // routes.js
  const routes = {
  <Router>
  <Route path='/' component={Main}>
  <IndexRoute component={Home} />
  <Route path='playerOne' component={Prompt} />
  <Route onEnter={checkAuth} path='dashboard' component={Dashboard} />
  </Route>
  </Router>
  }

export default routes

// index.js
ReactDOM.render(routes, document.getElementById('app'))

- This isn't very "react-y", as react is all about COMPOSITION
- The APP (Components, styles, logic, state) is encapsulated from the static Routing config file
- Also, some functionality was replicated, like onEnter which is

# React Router v4

- This was intended to be a ROUTER DESIGNED FOR REACT
- The routing is dynamic, which means it TAKES PLACES AS YOUR APP IS RENDERING
- The ENTIRE APP IS COMPONENTS; instead of rendering a component directly, you render a ROUTE which is itself responsible for rendering a specific COMPONENT
- The component is rendered when the path specified to the router is reached

# Passing props to React Router

- With render, because you're creating the element, you could pass the prop in there.
  ex:
  <Route path={`${props.match.path}/:topicId`} render={() => {
  return <Topic name='tyler' />
  }} />

# How do I pass props to a component that isn't being rendered by React Router?

- import withRouter from 'react-router-dom'
- export withRouter, passing in the component that isn't being rendered that you want to pass props into  
  ex: export default withRouter(<component>)
