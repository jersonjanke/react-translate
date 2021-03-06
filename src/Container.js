import React, { Fragment, useState, useEffect } from "react";
import Header from "./Header";
import Section from "./Section";
import List from "./List";
import Form from "./Form";
import axios from "axios";

const sortRecords = (records) => {
  return records.sort((a, b) => {
    if (a.recordName < b.recordName) {
      return -1;
    }
    if (a.recordName > b.recordName) {
      return 1;
    }

    return 0;
  });
};

const Container = () => {
  const [records, setRecords] = useState([]);
  const [liveText, setLiveText] = useState("");

  useEffect(() => {
    axios.get("/api/records").then(({ data }) => {
      setRecords(data);
    });
  }, []);

  const onSubmitHandler = (entry) => {
    axios.post("/api/records", entry).then(({ data }) => {
      setRecords(sortRecords([...records, data]));
      setLiveText(`${entry.recordName} successfully `);
    });
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
