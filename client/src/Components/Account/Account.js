import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Account.css";
import avatar from "../../Assets/avatar.png";
import Loading from "../Spinner/Spinner";
import { toggleFalse } from "../../JS/Actions/contactActions";
import ContactCardProfile from "../ContactCard/ContactCardProfile";
import { getContacts } from "../../JS/Actions/contactActions";
import { Link } from "react-router-dom";


const Account = () => {
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const user = useSelector((state) => state.userReducer.user);
  const loadUser = useSelector((state) => state.userReducer.loadUser);
  const [contactData, setContactData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  useEffect(() => {
    setContactData(contacts);
  }, [contacts]);


  return (

    <div className="container">
      <div className="row py-5 px-4">
        <div className="col-md-12 mx-auto">
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
              <div className="media align-items-end profile-head">
                <div className="profile mr-3">
                  <img
                    src={avatar}
                    alt="..."
                    style={{ width: "250px" }}
                    className="rounded mb-2 img-thumbnail"
                  />
                </div>
                  {/* src={user && user.picture} */}
                {/* upload pic */}

                {/* info User */}

                {loadUser ? (
                  <Loading />
                ) : (
                  <div className="col-md-8">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Full Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {(user && user.name) || ""}
                          </div>
                        </div>
                        <hr />{" "}
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Last Name</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {(user && user.lastName) || ""}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {(user && user.email) || ""}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Phone</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {(user && user.phone) || ""}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <h6 className="mb-0">Address</h6>
                          </div>
                          <div className="col-sm-9 text-secondary">
                            {(user && user.adress) || ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <br />
            <div className="px-4 py-5">
              <h2 className="mb-0">About</h2>
              <div className="p-4 rounded shadow-sm bg-light">
                <h5> hello {user && user.name}</h5>
                <h6>
                  contact list is a feature found in instant messaging, email
                  clients, mobile phones, online games or communities and is
                  usually nothing but a collection of screen names. You can add
                  your favorites contact and take their information when you
                  need
                </h6>
              </div>
            </div>
            <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Recent Contacts</h5>
              </div>
              <Link to="/add_user">
                <button
                  className="app-btn"
                  onClick={() => dispatch(toggleFalse())}
                >
                  {" "}
                  Add Contact{" "}
                </button>
              </Link>
              <div className="contacts-list">
                {contacts.length === 0 ? (
                  <div>
                    <h1>You dont have any contact</h1>
                  </div>
                ) : (
                  contactData
                    .filter((contact) => contact.user?._id === user?._id)
                    .map((contact) => (
                      <ContactCardProfile contact={contact} key={contact._id} />
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
