import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import avatar from '../../Assets/avatar.png'
import {deleteContact,getContact,toggleTrue,} from "../../JS/Actions/contactActions";
import deleteBtn from '../../Assets/deleteBtn.png'
import editBtn from '../../Assets/editBtn.png'
import { Link } from "react-router-dom";
/* import "./cards.css"; */

const ContactCardProfile = ({ contact , history }) => {
  const dispatch = useDispatch();
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    dispatch(deleteContact(contact._id));
  };
  return (
    <div className="contact-card">
      <Card style={{ width: "15rem" }}>
      <Link  to={`/contactDetails/${contact._id}`}>
      <Card.Img
          variant="top"
          src={avatar}
          alt="avatar-contact"
          />
      </Link>
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Text>{contact.email}</Card.Text>
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
                    handleClose();
                    history.push("/Account");}}>
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCardProfile;
