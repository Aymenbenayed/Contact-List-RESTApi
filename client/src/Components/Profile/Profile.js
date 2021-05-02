import { MDBBtn } from 'mdbreact';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { getContact } from '../../JS/Actions/contactActions';
import './Profile.css'

const Profile = () => {

    const {_id} = useParams()
    const contact=useSelector(state=> state.contactReducer.contact)
    const dispatch = useDispatch();
    
    useEffect(() => {  
        dispatch(getContact(_id));
        }, [_id, dispatch])
        console.log(_id)

    return (
        <div>
            <div className="container profile">
      {/* /Breadcrumb */}
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  className="rounded-circle"
                  width={150}/>
                <div className="mt-3">
                  <h4>{contact && contact.name}</h4>
                  <Link to="/edit">
                        <i className="fas fa-user-edit"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(contact && contact.name) || ""}
                </div>
              </div>
              <hr />{" "}
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Pseudo</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(contact && contact.pseudo) || ""}
                </div>
              </div>
              <hr />
              
              
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(contact && contact.email) || ""}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(contact && contact.phone) || ""}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">{(contact && contact.adress) || ""}</div>
              </div>
            </div>
          </div>
          <Link to="/Listcontacts">
          <MDBBtn gradient="aqua">Go back</MDBBtn>
          </Link>
        </div>
      </div>
    </div>
        </div>
    )
}
export default Profile