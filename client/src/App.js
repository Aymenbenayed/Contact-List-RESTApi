/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Switch,Route} from 'react-router-dom'
import { currentUser } from './JS/Actions/user';

import Navbar from './Components/Navbar/Navbar'
import Landpage from './Components/Landpage/Landpage';
import Signin from "./Components/Sign/Signin"
import Signup from "./Components/Sign/Signup"
import Account from './Components/Account/Account';
import Footer from './Components/Footer/Footer';
import AddEditUser from './Components/AddEditUser/AddEditUser'
import UserList from './Components/UserList/UserList'
import contactDetails from './Components/Profile/Profile'
import Contact from './Components/Contact/Contact';
import Admindashboard from './Components/Admin/Admindashboard/Admindashboard'
import Adminusers from './Components/Admin/users/adminusers'
import Admincontacts from './Components/Admin/contacts/admincontacts'
import EditUsers from './Components/Admin/users/edit'
import Editcontact from './Components/Admin/contacts/editcontacts'

import PrivateRouteAdmin from './router/PrivateRouteAdmin'
import PrivateRoute from './router/PrivateRoute';
import Error from './Components/Errors/Error'
import './App.css';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, []);
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar />
        <Switch>
              <Route exact path="/" component ={Landpage} />
              <Route exact path="/Signin" component={Signin} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/contact" component={Contact} />
              
                    {/* Route User */}
              <PrivateRoute exact path="/Listcontacts" component={UserList} />
              <PrivateRoute exact path="/(add_user|edit_user)" component={AddEditUser} />
              <PrivateRoute exact path="/contactDetails/:_id" component={contactDetails}/>
              <PrivateRoute exact path="/Account" component={Account}/>

                    {/* Route Admin */}
              <PrivateRouteAdmin exact path="/Admindashboard" component={Admindashboard} />
              <PrivateRouteAdmin exact path="/Admindashboard/Adminusers" component={Adminusers} />
              <PrivateRouteAdmin exact path="/Admindashboard/Adminusers/EditUsers/:id" component={EditUsers} />
              <PrivateRouteAdmin exact path="/Admindashboard/Admincontacts" component={Admincontacts} />
              <PrivateRouteAdmin exact path="/Admindashboard/Admincontacts/EditContacts/:id" component={Editcontact} />
              <Route path="/*" component={Error}/>
        </Switch>
        <Footer />
    </div>
  );
}
export default App;