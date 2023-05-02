import { useState } from "react";
const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleCountClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>You Clicked {count} times</h4>
      <button className="btn" type="button" onClick={handleCountClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateBasics;
