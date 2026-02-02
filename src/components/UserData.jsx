import { useState, useEffect } from "react";

export default function UserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/3")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div class='user-container'>
        <div class='user-card'>
          <h2>User Profile</h2>

          {loading ? (
            <p className='loading'>Loading...</p>
          ) : (
            <div class='user-info'>
              <div class='info-row'>
                <span>Name</span>
                <p>{user.name}</p>
              </div>

              <div class='info-row'>
                <span>Email</span>
                <p>{user.email}</p>
              </div>

              <div class='info-row'>
                <span>City</span>
                <p>{user.address.city}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
