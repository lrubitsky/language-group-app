import React from "react";
import { faker } from "@faker-js/faker";

const LandingPage = (props) => {
  const fakeText = faker.internet.firstName("male");
  const welcomeMessage = () => {
    if (props.user) {
      return (
        <>
          <p>{fakeText}</p>
          <h1>Hello, {props.user.firstName}! </h1>
          <img href={faker.internet.avatar()} />
        </>
      );
    } else {
      return (
        <div>
          <h1>Welcome to Language Meet!</h1>
          {/* <img href={faker.internet.avatar()} /> */}
          <p>{fakeText}</p>
        </div>
      );
    }
  };
  return <>{welcomeMessage()}</>;
};

export default LandingPage;
