import { useState } from "react";
const frameworks = ["React", "Angular", "Vue", "Svelte"];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("React");
  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };
  const handleFramework = (e) => {
    setFramework(e.target.value);
  };
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
          <label htmlFor="shipping"> Free Shipping </label>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select name="framework" id="framework" onChange={handleFramework}>
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
