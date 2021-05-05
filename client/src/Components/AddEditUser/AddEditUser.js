import { Button, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import Home from "../Home/Home";
import {
  addContact,
  editContact,
  videErrors,
} from "../../JS/Actions/contactActions";
import "./AddEditUser.css";
import addBtn from "../../Assets/addBtn.png";
import editBtn from "../../Assets/editBtn.png";
import Errors from "../Errors/Erorrs";

const AddEditUser = ({ history }) => {
  const isEdit = useSelector((state) => state.contactReducer.isEdit);
  const errors = useSelector((state) => state.contactReducer.errors);
  const contactEdit = useSelector((state) => state.contactReducer.contact);
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    isEdit
      ? setContact(contactEdit)
      : setContact({
          name: "",
          pseudo: "",
          email: "",
          phone: 0,
          adress: "",
          picture:"",
          user: user._id,
        });
  }, [isEdit, contactEdit]);

  const [contact, setContact] = useState({
    name: "",
    pseudo: "",
    email: "",
    phone: 0,
    adress: "",
    picture:"",
    user: user._id,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //confirmation Edit
  const handleEdit = () => {
    dispatch(editContact(contact._id, contact));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Home />
      <Form className="my-form">
        {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
        {/*input name*/}
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="Name"
            placeholder="Enter Contact name..."
            name="name"
            value={contact.name}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Name is required!</Form.Text>
        </Form.Group>
        {/* Pseudo */}
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="Name"
            placeholder="Enter Contact pseudo..."
            name="pseudo"
            value={contact.pseudo}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Pseudo is required!</Form.Text>
        </Form.Group>

        {/* input email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="Email"
            placeholder="enter Contact email..."
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Email is required!</Form.Text>
        </Form.Group>
        {/* input phone */}

        <Form.Group controlId="formBasicphone">
          <Form.Control
            type="Number"
            placeholder="enter Contact phone..."
            name="phone"
            value={contact.phone}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Phone</Form.Text>
        </Form.Group>

        {/* Pseudo */}
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="Name"
            placeholder="Enter Contact adress..."
            name="adress"
            value={contact.adress}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">Adress </Form.Text>
        </Form.Group>
        {/* img */}
        {/* <label class="form-label" for="file">
          Photo contact
        </label>
        <input
          type="file"
          
          id="file"
          accept=".jpg"
          name="picture"
          onChange={handleChange}
          value={contact.picture}
        /> */}

        {/* add or edit button */}
        {isEdit ? (
          <div>
            <img
              src={editBtn}
              alt="edit-icon"
              className="edit-btn"
              onClick={handleShow}
            />
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Update</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                are you sure you want to update the contact!!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleEdit();
                    handleClose();
                    history.push("/Listcontacts");
                  }}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ) : (
          <img
            src={addBtn}
            alt="delete-icon"
            className="add-btn"
            onClick={() => {
              dispatch(addContact(contact, history));
            }}
          />
        )}
      </Form>
    </div>
  );
};

export default AddEditUser;
