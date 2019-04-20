import React from "react";
import { Link, Route } from "react-router-dom";

// match is a prop that React Router passes
// path contains the url parameter, url contains the full url
// using nested link components? Use match.url. nest route components? Use match.path.
function Topic(props) {
  console.log("Props to Topic", props);
  return <h3>{props.match.params.topicId}</h3>;
}

// when we're at the EXACT path, i.e, /topics, render a h3 asking the user to select a topic
export default function Topics(props) {
  // console.log("Props to Topics", props);
  console.log("match.url", props.match.url);
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${props.match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/props-v-state`}>Props vs State</Link>
        </li>
      </ul>

      <hr />

      <Route path={`${props.match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={props.match.path}
        render={() => {
          return <h3>Please select a topic</h3>;
        }}
      />
    </div>
  );
}
