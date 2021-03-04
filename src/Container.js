import React, { Fragment } from "react";
import Header from "./Header";
import Section from "./Section";
import List from "./List";
import Form from "./Form";

const Container = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Section headingText="Add new favorite">
          <Form />
        </Section>
        <Section headingText="Records">
          <List />
        </Section>
      </div>
    </Fragment>
  );
};

export default Container;
