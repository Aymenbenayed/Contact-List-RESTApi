import React, { useState } from 'react'
import {toggleTrue,deleteUser,getUser} from '../../JS/Actions/userActions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './UserCard.css'
import editBtn from '../../Assets/editBtn.png'
import deleteBtn from '../../Assets/deleteBtn.png'
import avatar from '../../Assets/avatar.png'
import { Button, Modal } from 'react-bootstrap'
const UserCard = ({ user , history }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        dispatch(deleteUser(user._id));
      };
    
    return(
        
        <div className="user-card">
            
            <Link to={`/Profile/${user._id}`}>
                <img src={avatar} alt="avatar" className="avatar    "/>
            </Link>
            <h3>{user.name}</h3>
            <span>{user.phone} </span>
            <div className="delete-edit-btns">
            <div>
            <img src= {deleteBtn}
             onClick={handleShow}
            alt="delete-icon"
            />
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                are you sure you want to delete this User!!
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                
                <Button variant="primary" onClick={() => {
                        handleDelete();handleClose();}}>
                        Delete
                </Button>
                </Modal.Footer>
            </Modal>
            
            </div>
            
            <Link to="/edit_user">
                <img src={editBtn}
                alt="edit-icon"
                onClick={()=>{dispatch(toggleTrue()); dispatch(getUser(user._id))}}/>
            </Link>
            </div>
        </div>
    )
}
export default UserCard