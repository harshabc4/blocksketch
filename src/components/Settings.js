import React from "react";

function Settings(props) {
  //   const { selection, setSelection } = props;
  //   console.log(props);

  return (
    <div>
      <div className="input-container container">
        <input
          className=""
          placeholder="Input number of blocks"
          onChange={props.handleChange}
          type="text"
          name="blockNumber"
        />
        <select
          //   value={selection}
          onChange={(event) => {
            // console.log(event.target.value);
            return props.handleSelection(event.target.value);
          }}
          //   onChange={(event) => props.handleSelection(event.target.value)}
          //   onChange={(event) => setSelection(event.target.value)}
        >
          <option defaultValue="">--Choose--</option>
          <option value="click">Click</option>
          <option value="hover">Hover</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
