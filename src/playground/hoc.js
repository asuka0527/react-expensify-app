// Higher Order Component (HOC) - A component (HOC) that renders another component
// purpose: Reuse Code, Render Hijacking, Prop manipulation, Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The is : {props.info}</p>
  </div>
);

// HOC
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is a private info. Please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// HOC
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please log in to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="These are the detail" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="These are the detail" />,
  document.getElementById("app")
);
