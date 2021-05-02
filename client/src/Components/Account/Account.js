import React from "react";
import { useSelector } from "react-redux";
import "./Account.css";
import avatar from "../../Assets/avatar.png";

const Account = () => {
  const user = useSelector((state) => state.userReducer.user);

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
                {/* info User */}
                <div className="media-body mb-5 text-white UpdattingProfil">
                  <div className="NameUser">
                    <h4 className="mt-0 mb-3">{user && user.name}</h4>
                  </div>
                  <div className="lastNameUser">
                    <h4 className="mt-0 mb-3">{user && user.lastName}</h4>
                  </div>
                  <div className="EmailUser">
                    <h4 className="mt-0 mb-3">{user && user.email}</h4>
                  </div>
                  <div className="phoenUser">
                    <h4 className="mt-0 mb-3">{user && user.phone}</h4>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="px-4 py-5">
              <h5 className="mb-0">About</h5>
              <div className="p-4 rounded shadow-sm bg-light">
              <h3> hello  {user && user.name}</h3>
                <h6>
                  A contact list is a feature found in instant messaging, email
                  clients, mobile phones, online games or communities and is
                  usually nothing but a collection of screen names.{" "}
                  You can add your favorites contact and take their information when you need 
                </h6>
              </div>
            </div>
            <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Recent Contacts</h5>
              </div>
              <div className="row">
                {/* <div className="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" /></div>
                <div className="col-lg-6 mb-2 pl-lg-1"><img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" /></div>
                <div className="col-lg-6 pr-lg-1 mb-2"><img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className="img-fluid rounded shadow-sm" /></div>
                <div className="col-lg-6 pl-lg-1"><img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" /></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
