import React from "react";
import { Redirect, Route } from "react-router";

const AuthenticationCheck = ({ component: Component, user, ...rest }) => {
  if (user === undefined) {
    return <div>Loading...</div>;
  }
  if (user !== null) {
    return <Component user={user} {...rest} />; // ...rest has rest of router info
  }
  return <Redirect to="/user-sessions/new" />;
};

const AuthenticatedRoute = ({ component, user, ...rest }) => {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <AuthenticationCheck user={user} component={component} {...rest} />
    </Route>
  );
};

export default AuthenticatedRoute;

// HomePageForAuthenticatedUsers vs HomePageForUnauthenticatedUsers
// both would would exist as their own components

// const AuthenticationCheck = ({ component: Component, user, ...rest }) => {
//   if (user === undefined) {
//     return <div>Loading...</div>;
//   }
//   if (user !== null) {
//     return <HomePageForAuthenticatedUsers user={user} {...rest} />; // ...rest has rest of router info
//   }
//   return <HomePageForUnauthenticatedUsers user={user} {...rest} />;
// };

// const HomePageDisplay = ({ component, user, ...rest }) => {
//   return (
//     <Route
//       // eslint-disable-next-line react/jsx-props-no-spreading
//       {...rest}
//     >
//       <AuthenticationCheck user={user} component={component} {...rest} />
//     </Route>
//   );
// };

// export default HomePageDisplay;
