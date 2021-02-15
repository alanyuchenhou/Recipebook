import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add task");
      return;
    }
    onAdd({ text, day });

    setText("");
    setDay("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Smoothie Name</label>
        <input
          type="text"
          placeholder="Add Smoothie"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Receipes</label>
        <input
          type="text"
          placeholder="Add Receipe"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <input type="submit" value="Save Receipe" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
