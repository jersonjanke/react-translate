import React, { useState } from "react"
import Input from './Input'

const initialEntryState = {
    recordName: "",
    artistName: "",
    description: "",
};

const Form = ({ onSubmit }) => {
    const [entry, setEntry] = useState(initialEntryState)

    const onChangeHandle = (e) => {
        setEntry({
            ...entry,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!entry.recordName || !entry.artistName) {
            return;
        }

        onSubmit({ ...entry });
        setEntry(initialEntryState);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <Input
                labelText="Record name"
                name="recordName"
                onChange={onChangeHandle}
                value={entry.recordName}
            />
            <Input
                labelText="Artist name"
                name="artistName"
                onChange={onChangeHandle}
                value={entry.artistName}
            />
            <Input
                labelText="Description"
                type="textarea"
                name="description"
                onChange={onChangeHandle}
                value={entry.description}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;
