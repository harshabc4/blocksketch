import React from "react";

function Settings(props) {
  return (
    <div>
      <div className="input-container container">
        <input
          className="bg-primary"
          placeholder="Input number of blocks"
          onChange={props.handleChange}
          type="text"
          name="blockNumber"
        />
        <select
          className="form-select btn-primary"
          onChange={(event) => {
            return props.handleSelection(event.target.value);
          }}
        >
          <option defaultValue="">Select style</option>
          <option value="click">Click</option>
          <option value="hover">Hover</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
