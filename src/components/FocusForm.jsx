import { useRef } from "react";

export default function FocusForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
    <h2>Focus Form Example</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px"
        }}
      >
        <input
          ref={inputRef}
          style={{
            width: "250px",
            padding: "5px"
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px"
        }}
      >
        <button
          onClick={handleClick}
          style={{
            width: "250px",
            padding: "5px",
            cursor: "pointer"
          }}
        >
          Focus the Input Element
        </button>
      </div>
    </>
  );
}
