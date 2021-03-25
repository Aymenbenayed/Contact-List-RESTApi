import './App.css';
import Home from './Components/Home/Home'
import AddEditUser from './Components/AddEditUser/AddEditUser'
import UserList from './Components/UserList/UserList'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Home/>
        <Switch>
              <Route exact path="/" component={UserList} />
              <Route exact path="/(add_user|edit_user)" component={AddEditUser} />
              
        </Switch>
    </div>
  );
}
export default App;