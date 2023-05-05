import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  // console.log(toggle);
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle comp
      </button>
      {toggle && <RandomComp />}
    </div>
  );
};

const RandomComp = () => {
  // when we use useEffect on a component being rendered conditionally it will run not just once
  // but as many times as that condition is true or met regardless of whether the dependency array for the useEffect is empty
  // useEffect(() => {
  //   const intId = setInterval(() => {
  //     console.log("hello from interval");
  //   }, 1000);
  //   return () => {
  //     clearInterval(intId);
  //     console.log("cleanup");
  //   };
  //   console.log(
  //     "hmmmm, interesting mount and unmount initiating re-render everytime"
  //   );
  // }, []);
  useEffect(() => {
    const someFunc = () => {
      // some logic
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h1>Hello there....</h1>;
};
export default CleanupFunction;
