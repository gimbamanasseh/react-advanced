import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const FetchUser = async () => {
      try {
        const response = await fetch(url);
        // catch errors in fetch using the response status unlike in axios which authomatically handles error catching
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    FetchUser();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  // destructure the data fetched from the URL . . . order matters because Javascripts reads from top to bottom
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        src={avatar_url}
        alt={name}
        style={{ width: "150px", borderRadius: "25px" }}
      />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
