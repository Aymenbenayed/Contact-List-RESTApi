import './App.css';
import Home from './Components/Home/Home'
import AddEditUser from './Components/AddEditUser/AddEditUser'
import UserList from './Components/UserList/UserList'
import {Switch,Route} from 'react-router-dom'
import Profile from './Components/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home/>
        <Switch>
              <Route exact path="/" component={UserList} />
              <Route exact path="/(add_user|edit_user)" component={AddEditUser} />
              <Route exact path="/Profile/:_id" component={Profile}/>     
        </Switch>
    </div>
  );
}
export default App;