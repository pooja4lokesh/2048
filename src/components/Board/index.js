import React from 'react';
import Block from '../Block';

export default function Board({ data }) {
  return (

    <div style={{
      background: "#AD9D8F",
      width: "max-content",
      margin: "auto",
      padding: 5,
      borderRadius: 5,
      marginTop: 10,
    }}>

      {data.map((row, oneIndex) => {
        return (
          <div style={{ display: "flex" }} key={oneIndex}>
            {row.map((digit, index) => (
              <Block num={digit} key={index} />
            ))}
          </div>
        );
      })}

    </div>
  );
}
