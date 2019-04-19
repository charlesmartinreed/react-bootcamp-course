# Day 1 Recap

- We use 'props' to pass attributes between components and elements

# Component-level State

- A component is func or class that optionally takes input and returns an element
- Component level state requires you to use a class component, not a functional one
- Functional component returns the UI of the component
- Class component specifies the UI via the render method
- Use class if a component needs state, use function if it doesn't

# Props vs State

- State is local to a component; component can manage this itself
- Props are data passed to a component; managed externally

# this.setState

- We explicitly tell React when to re-render using this method
- setState: takes a callback, whose first argument is the current state of your component, returns an object to be merged with the new state.
