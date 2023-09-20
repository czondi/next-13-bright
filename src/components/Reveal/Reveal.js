"use client";
import React from "react";

function Reveal({ children }) {
  const [isContentShown, setIsContentShown] = React.useState(false);

  return (
    <>
      {isContentShown ? (
        children
      ) : (
        <div className="reveal">
          <button onClick={() => setIsContentShown(true)}>
            Reveal Content
          </button>
        </div>
      )}
    </>
  );
}

export default Reveal;
