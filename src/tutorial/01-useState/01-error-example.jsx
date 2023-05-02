const ErrorExample = () => {
  let count = 0;
  const handleCountClick = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleCountClick} className="btn">
        increase
      </button>
    </div>
  );
};
export default ErrorExample;
