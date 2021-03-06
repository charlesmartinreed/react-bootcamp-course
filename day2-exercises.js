// // Since Day 2 didn't have exercises in the Day 1 sense of the word, I just copied the finished product from our 'friend tracking' app here.
//
// <script type="text/babel">
// 	// for each name in the friends array, create a list item
// 	// for demo purposes, we pass name as the key. React needs this key to figure out what changed in a list, when using .map or looping over iterables.
//
// 	// onRemoveFriend is passed in as a prop, when button is clicked when invoke an arrow function which is in turn responsible for invoking the onRemoveFriend. The arrow function prevents onRemoveFriend from being invoked when the component loads because we pass on a function definition rather than a function.
//
// 	function ActiveFriends(props) {
// 		return (
// 			<div>
// 				<h1>Active Friends</h1>
// 				<ul>
// 					{props.list.map(friend => (
// 						<li key={friend.name}>
// 							<span>{friend.name}</span>
// 							<button onClick={() => props.onRemoveFriend(friend.name)}>
// 								Remove
// 							</button>
// 							<button onClick={() => props.onStatusChange(friend.name)}>
// 								Deactivate
// 							</button>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		);
// 	}
//
// 	function InactiveFriends(props) {
// 		return (
// 			<div>
// 				<h1>Inactive Friends</h1>
// 				<ul>
// 					{props.list.map(friend => (
// 						<li key={friend.name}>
// 							<span>{friend.name}</span>
// 							<button onClick={() => props.onStatusChange(friend.name)}>
// 								Activate
// 							</button>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		);
// 	}
//
// 	// simply an ES6 class, not unique to React
// 	class App extends React.Component {
// 		// constructor is JS func not React specific
// 		// call to super because we're extending a parent class; inheritance
// 		// state now lives on the component
// 		constructor(props) {
// 			super(props);
//
// 			this.state = {
// 				friends: [
// 					{
// 						name: "Brandice",
// 						active: true
// 					},
// 					{
// 						name: "Marvin",
// 						active: true
// 					},
// 					{
// 						name: "Jonathan",
// 						active: false
// 					},
// 					{
// 						name: "Edna",
// 						active: true
// 					},
// 					{
// 						name: "Timothy",
// 						active: false
// 					}
// 				],
// 				input: ""
// 			};
//
// 			// bind allows you to specify what the 'this' keyword is referencing - in this constructor we're saying that the 'this' used by handleRemoveFriend is BOUND to the this we specify, which in 'App'. Because this class extends Component, App has a .setState method. This resolves our 'this.setState is not a function' error.
// 			this.handleRemoveFriend = this.handleRemoveFriend.bind(this);
// 			this.handleAddFriend = this.handleAddFriend.bind(this);
// 			this.updateInput = this.updateInput.bind(this);
// 		}
//
// 		// helper methods for updating state
// 		// alternatively, you can use an arrow function to avoid the bind
// 		// handleAddFriend = () => {}
// 		// why .concat instead of .push? Never modify the state directly, .push would modify the friends array, but .concat would return a new array with the specified changes
// 		handleAddFriend() {
// 			if (this.state.input !== "") {
// 				this.setState(currentState => {
// 					return {
// 						friends: currentState.friends.concat([
// 							{ name: currentState.input, active: true }
// 						]),
// 						input: ""
// 					};
// 				});
// 			}
// 		}
//
// 		// object returned from our function is merged with the filtered state
//
// 		// 'currentState' is a predefined argument that React uses to capture, you guessed it, the current state of your component.
//
// 		// notice that we're only altering the state members that we're actually changing - React intelligently surmises that the UI likely needs to be updated accordingly when using this.setState. Were you to simply set this.state.friends to the filtered array, this update would not occur because React is not actively watching for state changes.
// 		handleRemoveFriend(name) {
// 			this.setState(currentState => {
// 				return {
// 					friends: currentState.friends.filter(
// 						friend => friend.name !== name
// 					)
// 				};
// 			});
// 		}
//
// 		handleStatusChange = name => {
// 			this.setState(currentState => {
// 				const friend = currentState.friends.find(
// 					friend => friend.name === name
// 				);
//
// 				return {
// 					friends: currentState.friends
// 						.filter(friend => friend.name !== name)
// 						.concat([
// 							{
// 								name,
// 								active: !friend.active
// 							}
// 						])
// 				};
// 			});
// 		};
//
// 		// if updating state based on the previous state, use the functional setState, i.e., () => ({}) because React will automatically pass the currentState as a param
// 		updateInput(e) {
// 			const value = e.target.value;
// 			this.setState(() => ({
// 				input: value
// 			}));
// 		}
//
// 		render() {
// 			return (
// 				<div>
// 					<input
// 						type="text"
// 						placeholder="new friend"
// 						value={this.state.input}
// 						onChange={this.updateInput}
// 					/>
// 					<button onClick={this.handleAddFriend}>Add Friend</button>
// 					<button
// 						onClick={() =>
// 							this.setState({
// 								friends: []
// 							})
// 						}
// 					>
// 						Clear All
// 					</button>
// 					<ActiveFriends
// 						list={this.state.friends.filter(friend => friend.active)}
// 						onRemoveFriend={this.handleRemoveFriend}
// 						onStatusChange={this.handleStatusChange}
// 					/>
// 					<InactiveFriends
// 						list={this.state.friends.filter(friend => !friend.active)}
// 						onRemoveFriend={this.handleRemoveFriend}
// 						onStatusChange={this.handleStatusChange}
// 					/>
// 				</div>
// 			);
// 		}
// 	}
//
// 	ReactDOM.render(<App />, document.getElementById("app"));
// </script>
