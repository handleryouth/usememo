import React, { useState, useMemo, useEffect } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // use memo in here is used to  make the function just execute the function
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // if the dependencies (number) in this case is changed


//   in this Cased, useMemo is used to make sure useEffect run 

const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);

//   when the object we wanted is just updated its content and not a assigned into new object



  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
