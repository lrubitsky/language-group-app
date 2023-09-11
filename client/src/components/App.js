import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import LanguageGroupList from "./LanguageGroupList";
import LanguageGroupShow from "./LanguageGroupShow";
import LandingPage from "./LandingPage";
import UserOwnProfileShow from "./UserOwnProfileShow";
import UserProfileShow from "./UserProfileShow";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);
  return (
    <Router>
      <div className="main">
        <TopBar user={currentUser} />
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage {...props} user={currentUser} />} />

          <Route exact path="/users/new" component={RegistrationForm} />

          <Route exact path="/user-sessions/new" component={SignInForm} />
          <AuthenticatedRoute
            exact
            path="/language-groups"
            component={LanguageGroupList}
            user={currentUser}
          />

          <AuthenticatedRoute
            exact
            path="/language-groups/:id"
            component={LanguageGroupShow}
            user={currentUser}
          />

          <AuthenticatedRoute
            exact={true}
            path="/users/my-profile"
            component={UserOwnProfileShow}
            user={currentUser}
          />
          <Route exact path="/users/:id" component={UserProfileShow} />
        </Switch>
      </div>
    </Router>
  );
};

export default hot(App);
