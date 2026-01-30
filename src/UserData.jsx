import { useState, useEffect } from "react";

export default function UserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>{user.name}</h1>
      <p>Email:{user.email}</p>
      <p>City:{user.address.city}</p>
    </>
  );
}
