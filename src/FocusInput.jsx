import React, { useRef } from "react";

export default function App() {
  const inputFocusRef = useRef(null);
  const FocusInput = () => {
    inputFocusRef.current.focus();
  };
  return (
    <div>
      <input ref={inputFocusRef} type="text"></input>
      <button onClick={FocusInput}>Focus Input</button>
    </div>
  );
}
