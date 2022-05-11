import React, { useEffect } from "react";
import Card from "./CardComponent";
import { getPosts } from "../redux/actions/posts";
import { useSelector, useDispatch } from "react-redux";
const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      {loading && <h2>Loading.....</h2>}
      {/* {posts && posts.map((post) => <Card post={post} key={post.id} />)} */}
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
export default Posts;
