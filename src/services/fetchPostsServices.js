/***************************
 API ENDPOINT WITH FETCH 
OR CAN BE USED WITH AXIOS LIBRARY
**********************************/
const url = "https://jsonplaceholder.typicode.com/posts";
const fetchGetPostsServices = () => {
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
};
export default fetchGetPostsServices;
