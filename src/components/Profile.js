import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Profile = () => {
  const dispatch = useDispatch();
  const { name, age, loading } = useSelector((state) => state.userNameReducer);
  return (
    <div>
      Profile
      {loading && <h2>Loading.....</h2>}
      {!loading && <h2>I am {name}</h2>}
      {!loading && <h3>My age is {age}</h3>}
      <button onClick={() => dispatch({ type: "UPDATE_NAME" })}>
        Update Name
      </button>
    </div>
  );
};

export default Profile;
