import React, { Fragment, useState, useEffect, useRef } from "react";
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
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/records", {
        headers: {
          "Cache-Control": "private",
          "X-Custom-Header": "some-value",
        },
      });
      setRecords(sortRecords(data));
    };

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, []);

  const onSubmitHandler = async (entry) => {
    const { data } = await axios.post("/api/records", entry);
    setRecords(sortRecords([...records, data]));
    setLiveText(`${entry.recordName} successfully `);
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
