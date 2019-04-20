# Virtual DOM Recap

- The virtual DOM is just an object representation of the DOM; This is what React.createElement gives us.

# What is a Lifecycle method?

- Used for managing the components during the lifetime of your app.

# What kinds of Lifecycle methods does React have?

- Constructor - establish init state of the app
- Render - takes the returned elements and updates the DOM
- componentWillMount - is being deprecated, use componentDidMount instead
- componentDidMount - called after the component is rendered to the DOM. This is a good place to handle ajax requests.
- componentDidUpdate - called when your component receives new props or state changes
- componentWillUnmount - called when the component is going to be removed from the DOM; ex: removing listeners (firebase, socket.io) added during componentDidMount
- getDerivedStateFromProps - get props from parent component, set state on the local component using those props
- shouldComponentUpdate() - can be used to determine whether or not a component should re-render during a render cycle

# Do you need to bind lifecycle methods?

- No, React handles this for you automatically.
