import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { getUser } from '../../JS/Actions/userActions';

const Profile = () => {
    const {_id} = useParams()
    const user=useSelector(state=> state.userReducer.user)
    const dispatch = useDispatch();
    
    useEffect(() => {  
        dispatch(getUser(_id));
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
                  width={150}
                />
                <div className="mt-3">
                  <h4>{user && user.name}</h4>
                  <p className="text-secondary mb-1">Welcome in our website </p>
                  <p className="text-muted font-size-sm">nice shopping</p>

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
                  {(user && user.name) || ""}
                </div>
              </div>
              <hr />{" "}
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Pseudo</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {(user && user.pseudo) || ""}
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
                <div className="col-sm-9 text-secondary">{(user && user.adress) || ""}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
export default Profile
