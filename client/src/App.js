/* eslint-disable react-hooks/exhaustive-deps */
import AddEditUser from './Components/AddEditUser/AddEditUser'
import UserList from './Components/UserList/UserList'
import {Switch,Route} from 'react-router-dom'
import contactDetails from './Components/Profile/Profile'
import Navbar from './Components/Navbar/Navbar';
import Signin from "./Components/Sign/Signin"
import Signup from "./Components/Sign/Signup"
import PrivateRoute from './router/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from './JS/Actions/user';
import Account from './Components/Account/Account';
import './App.css';
import Landpage from './Components/Landpage/Landpage';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';





function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, []);
  return (
    <div className="App">
      <Navbar />
        <Switch>

              <Route exact path="/" component ={Landpage} />
              <Route exact path="/Signin" component={Signin} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/Listcontacts" component={UserList} />
              <Route exact path="/contact" component={Contact} />
              <PrivateRoute exact path="/(add_user|edit_user)" component={AddEditUser} />
              <PrivateRoute exact path="/contactDetails/:_id" component={contactDetails}/>
              <PrivateRoute exact path="/Account" component={Account}/>

        </Switch>
        <Footer />
    </div>
  );}
export default App;