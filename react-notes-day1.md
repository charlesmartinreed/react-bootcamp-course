# composition

- App is build of a bunch of components - think of these like widgets - that you combine together.
- Build a large app by building a bunch of small apps.

<Container>
	<Navbar />
	<Header />
	<DatePicker>
		</Calendar />
	</DatePicker>
</Container>

# Two main things to worry about with React

- What state (data within your app) is component managing or what state does it receive from parent component?
- What is the UI going to look like?

# unidirectional dataflow

- In jQuery, you set up event handlers that, when run, change the state of the DOM. This also means the STATE of your app is also updated.
- So what happens when you have multiple event handlers manipulating the DOM at any given time? You end up with a DOM whose state is more difficult to discern and follow while developing/debugging.
- In React, instead of your state living in your DOM, state management is handled by React itself, which is responsible for drawing and updating the DOM

# explicit mutations

- updating the state is done with this.setState with vanilla, basic react.
- Calling setState causes React to diff your current state with pending changes to figure out how the UI should change

# ...it's just JavaScript!

- If you're comfortable with JS, you can get up to speed with React reasonably quickly. The syntax is respectful of what vanilla JS can do.

# Element vs Component

- Component is a function or class that optionally accepts input and RETURNS a React Element
