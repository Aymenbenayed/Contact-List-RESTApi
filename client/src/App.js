/* eslint-disable react-hooks/exhaustive-deps */
import AddEditUser from './Components/AddEditUser/AddEditUser'
import UserList from './Components/UserList/UserList'
import {Switch,Route} from 'react-router-dom'
import contactDetails from './Components/Profile/Profile'
import Signin from "./Components/Sign/Signin"
import Signup from "./Components/Sign/Signup"
import PrivateRoute from './router/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from './JS/Actions/user';
import Account from './Components/Account/Account';
import Landpage from './Components/Landpage/Landpage';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbarr from './Components/Navbar/Navbarr';
import Admindashboard from './Components/Admin/Admindashboard/Admindashboard'
import PrivateRouteAdmin from './router/PrivateRouteAdmin'
import './App.css';
import Adminusers from './Components/Admin/users/adminusers'
import EditUsers from './Components/Admin/users/edit'
import Admincontacts from './Components/Admin/contacts/admincontacts'
import Editcontact from './Components/Admin/contacts/editcontacts'




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, []);
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbarr />
        <Switch>
              <PrivateRoute exact path="/Listcontacts" component={UserList} />
              <Route exact path="/" component ={Landpage} />
              <Route exact path="/Signin" component={Signin} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/contact" component={Contact} />
              <PrivateRoute exact path="/(add_user|edit_user)" component={AddEditUser} />
              <PrivateRoute exact path="/contactDetails/:_id" component={contactDetails}/>
              <PrivateRoute exact path="/Account" component={Account}/>
              <PrivateRouteAdmin exact path="/Admindashboard" component={Admindashboard} />
              <PrivateRouteAdmin exact path="/Admindashboard/Adminusers" component={Adminusers} />
              <PrivateRouteAdmin exact path="/Admindashboard/Adminusers/EditUsers/:id" component={EditUsers} />
              <PrivateRouteAdmin exact path="/Admindashboard/Admincontacts" component={Admincontacts} />
              <PrivateRouteAdmin exact path="/Admindashboard/Admincontacts/EditContacts/:id" component={Editcontact} />

        </Switch>
        <Footer />
    </div>
  );
}
export default App;