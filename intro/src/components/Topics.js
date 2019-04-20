import React from "react";
import { Link, Route } from "react-router-dom";

// match is a prop that React Router passes
// path contains the url parameter, url contains the full url
// using nested link components? Use match.url. nest route components? Use match.path.
function Topic(props) {
  console.log("Props to Topic", props);
  return <h3>{props.match.params.topicId}</h3>;
}

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
    </div>
  );
}
