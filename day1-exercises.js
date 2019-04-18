// EXERCISE 1 SOLUTION

function Badge(props) {
  return (
    <div>
      <img src={props.img} />
      <h1>Name: {props.name} </h1>
      <h3>username: {props.username} </h3>
    </div>
  );
}

ReactDOM.render(
  <Badge
    name="Tyler McGinnis"
    username="tylermcginnis"
    img="https://avatars0.githubusercontent.com/u/2933430?v=3&s=460"
  />,
  document.getElementById("app")
);

// EXERCISE 2 SOLUTION

const USER_DATA = {
  name: "Tyler McGinnis",
  img: "https://avatars0.githubusercontent.com/u/2933430?v=3&s=460",
  username: "tylermcginnis"
};

function Badge(props) {
  return (
    <div>
      <img src={props.user.img} />
      <h1>Name: {props.user.name} </h1>
      <h3>username: {props.user.username} </h3>
    </div>
  );
}

ReactDOM.render(<Badge user={USER_DATA} />, document.getElementById("app"));

// EXERCISE 3 SOLUTION

function Avatar(props) {
  return <img src={props.src} />;
}

function Label(props) {
  return <h1>Name: {props.name}</h1>;
}

function ScreenName(props) {
  return <h3>Username: {props.username} </h3>;
}

function Badge(props) {
  const { user } = props;
  const { name, img, username } = user;

  return (
    <div>
      <Avatar src={img} />
      <Label name={name} />
      <ScreenName username={username} />
    </div>
  );
}

ReactDOM.render(
  <Badge
    user={{
      name: "Tyler McGinnis",
      img: "https://avatars0.githubusercontent.com/u/2933430?v=3&s=460",
      username: "tylermcginnis"
    }}
  />,
  document.getElementById("app")
);

// EXERCISE 4 SOLUTION
function Avatar(props) {
  return React.createElement("img", { src: props.src });
}

function Label(props) {
  return React.createElement("h1", null, "Name: ", props.name);
}

function ScreenName(props) {
  return React.createElement("h3", null, "Username: ", props.username);
}

function Badge(props) {
  const { user } = props;
  const { name, img, username } = user;

  return React.createElement(
    "div",
    null,
    React.createElement(Avatar, { src: img }),
    React.createElement(Label, { name }),
    React.createElement(ScreenName, { username })
  );
}

ReactDOM.render(
  <Badge
    user={{
      name: "Tyler McGinnis",
      img: "https://avatars0.githubusercontent.com/u/2933430?v=3&s=460",
      username: "tylermcginnis"
    }}
  />,
  document.getElementById("app")
);
