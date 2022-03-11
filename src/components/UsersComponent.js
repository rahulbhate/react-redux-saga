import React, { useEffect } from "react";
import Card from "./CardComponent";
import { getUsers } from "../redux/actions/users";
import { useSelector, useDispatch } from "react-redux";
const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  console.log(users);
  return (
    <>
      {loading && <h2>Loading.....</h2>}
      {users && users.map((user) => <Card user={user} key={user.id} />)}
      {error && !loading && (
        <>
          <p>Failed to load response data from the server:</p>
          <h1>
            <b>404 NOT FOUND</b>
          </h1>
        </>
      )}
    </>
  );
};
export default Users;
