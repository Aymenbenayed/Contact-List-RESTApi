import React, { useState } from "react";
import {
  toggleTrue,
  deleteContact,
  getContact,
} from "../../JS/Actions/contactActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ContactCard.css";
import editBtn from "../../Assets/editBtn.png";
import deleteBtn from "../../Assets/deleteBtn.png";
import avatar from "../../Assets/avatar.png";
import { Button, Modal } from "react-bootstrap";
const ContactCard = ({ contact, history }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    dispatch(deleteContact(contact._id));
  };

  return (
    <div className="user-card">
      <Link to={`/contactDetails/${contact._id}`}>
        <img src={avatar} alt="avatar" className="avatar    " />
      </Link>
      <h5>{contact.name}</h5>
      <h5>{contact.pseudo}</h5>
      <span>{contact.phone} </span>
      {isAuth && !(user && user.role === 0) ? (
        <div className="delete-edit-btns">
          <div>
            <img src={deleteBtn} onClick={handleShow} alt="delete-icon" />
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
                <Button
                  variant="primary"
                  onClick={() => {
                    handleDelete();
                    handleClose();}}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </div>

          <Link to="/edit_user">
            <img
              src={editBtn}
              alt="edit-icon"
              onClick={() => {
                dispatch(toggleTrue());
                dispatch(getContact(contact._id));
              }}
            />
          </Link>
        </div>
      ) : null}
    </div>
  );
};
export default ContactCard;
