import React, { Fragment, useState } from "react";
import Header from "./Header";
import Section from "./Section";
import List from "./List";
import Form from "./Form";

const Container = () => {
  const [records, setRecords] = useState([]);
  const [liveText, setLiveText] = useState("");

  const onSubmitHandler = (entry) => {
    setRecords(
      [...records, entry].sort((a, b) => {
        if (a.recordName < b.recordName) {
          return -1;
        }
        if (a.recordName > b.recordName) {
          return 1;
        }

        return 0;
      })
    );
  };

  return (
    <Fragment>
      <Header />
      <div>
        <Section headingText="Add new favorite">
          <Form onSubmit={onSubmitHandler} />
        </Section>
        <Section headingText="Records">
          <List records={records} />
        </Section>
      </div>
      <div aria-live="polite" aria-atomic="true">
        {liveText}
      </div>
    </Fragment>
  );
};

export default Container;
