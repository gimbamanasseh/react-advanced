const Person = ({ name, removePerson, id }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button className="btn btn-primary" onClick={() => removePerson(id)}>
        Remove
      </button>
    </div>
  );
};
export default Person;
