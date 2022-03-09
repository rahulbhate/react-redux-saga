import React, { useEffect } from "react";
import Card from "./CardComponent";
import { getUsers } from "../redux/actions/users";
import { useSelector, useDispatch } from "react-redux";
const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(
      getUsers([
        {
          id: 1,
          name: "John",
          company: {
            name: "ABC",
            catchPhrase: "Multi Layered client applications",
          },
        },
      ])
    );
  }, [dispatch]);
  console.log(users);
  return (
    <>
      {users &&
        users.length > 0 &&
        users.map((user) => <Card user={user} key={user.id} />)}
      {users.length === 0 && <p>No Users Found</p>}
    </>
  );
};
export default Users;
