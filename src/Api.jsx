import React from "react";

const ApiID = ({ value, onChange, onClick }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter OMDB Api key"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ApiID;
