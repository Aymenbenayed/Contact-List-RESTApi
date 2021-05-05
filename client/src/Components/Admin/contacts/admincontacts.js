import React, { useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import { Link } from "react-router-dom";
import "./Products.css";


import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContact, getContacts } from "../../../JS/Actions/contactActions";
import SpinnerPage from "../../Spinner/Spinner";
import { getUser } from "../../../JS/Actions/user";



const Admincontacts = ({history}) => {
  const contacts = useSelector((state) => state.contactReducer.contacts);
  

  const loading = useSelector((state) => state.contactReducer.loading);
  const dispatch = useDispatch();
  
  useEffect(() => {
dispatch(getContacts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispatch]);
  useEffect(()=>{
    dispatch(getUser(contacts.user))
  })
  
  return (
    <div className="dashbored-accueil">
      <div>
        <Link to="/Admindashboard">
          <h1>Dashboard admin </h1>
        </Link>
        <MDBContainer className="list">
          <MDBListGroup style={{ width: "22rem" }}>
            <MDBListGroupItem href="/Admindashboard/Admincontacts" active>
              List Of Contacts
            </MDBListGroupItem>
            <MDBListGroupItem href="/Admindashboard/Adminusers">
              List Of users
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBContainer>
      </div>
      {loading ? (
        <SpinnerPage />
      ) : (
        <div className="right-dash">
          <MDBTable hover >
            <MDBTableHead  color="primary-color" textWhite>
              <tr>
                <th>Name </th>
                <th>pseudo</th>
                <th>Email</th>
                <th>phone</th>
                <th>adress</th>
                <th>user</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {contacts.map((contact) => (
                  <tr>
                        <td>{contact.name}</td>
                        <td>{contact.pseudo}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.adress}</td>
                        <td>{contact.user.name}</td>    
                  <td>
                  <Link to={`/Admindashboard/Admincontacts/EditContacts/${contact._id}`}>
                    <i className="fas fa-edit" 
                        onClick={() => {dispatch(getContact(contact._id) )}}></i>{" "}
                  </Link>
                    </td>
                  <td>
                  <i className="far fa-trash-alt" 
                  onClick={() => dispatch(deleteContact(contact._id))} ></i>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      )}
    </div>
  );
};

export default Admincontacts;