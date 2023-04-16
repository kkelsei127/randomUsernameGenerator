import React from 'react';

const UsernameList = ({ usernames }) => {
  if (!usernames.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {usernames &&
        usernames.map((username) => (
          <div key={username._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {username.username} <br />
            </h4>
          </div>
        ))}
    </div>
  );
};

export default UsernameList;
