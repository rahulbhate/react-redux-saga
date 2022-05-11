import "./App.css";
import Users from "./components/UsersComponent";
import Posts from "./components/PostsComponent";
import Profile from "./components/Profile";
function App() {
  return (
    <div className='App'>
      <Users />
      <Posts />
      <Profile />
    </div>
  );
}

export default App;
