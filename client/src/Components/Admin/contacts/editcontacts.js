import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editContact, getContact } from "../../../JS/Actions/contactActions";
import "./Products.css";

const Editcontact = ({ history }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const contactt = useSelector((state) => state.contactReducer.contact);
  const [contact, setContact] = useState(contactt);

  useEffect(() => {
    dispatch(getContact(id));
  }, [dispatch, id]);

  const handleEdit = () => {
    dispatch(editContact(contactt._id, contact));
  };

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };


const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
    <div className="my-form">
      <Form>
        {/* id */}
        <Form.Group controlId="formBasicid">
          <Form.Label>id</Form.Label>
          <Form.Control
            className="controlcontact"
            type="id"
            placeholder={id}
            disabled
          />
        </Form.Group>

        {/* name */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name of Contact</Form.Label>
          <Form.Control
            className="controlcontact"
            type="text"
            placeholder="New name "
            name="name"
            value={contact?.name}
            onChange={handleChange}
          />
        </Form.Group>

        {/*  marque */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Pseudo of Contact</Form.Label>
          <Form.Control
            className="controlcontact"
            type="text"
            placeholder="New lastName "
            name="pseudo"
            value={contact?.pseudo}
            onChange={handleChange}
          />
        </Form.Group>

        {/* productImage */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Phone of Contact </Form.Label>
          <Form.Control
            className="controlcontact"
            type="number"
            placeholder="New Phone"
            name="phone"
            value={contact?.phone}
            onChange={handleChange}/>
        </Form.Group>
        {/* descrption */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email of Contact</Form.Label>
          <Form.Control
            className="controlcontact"
            type="text"
            placeholder="New email "
            name="email"
            value={contact?.email}
            onChange={handleChange}/>
        </Form.Group>

        {/* Price */}
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Adress of Contact</Form.Label>
          <Form.Control
            className="controlcontact"
            type="text"
            placeholder="New adresse"
            name="adress"
            value={contact?.adress}
            onChange={handleChange}/>

        </Form.Group>
            <div className="buttons">
            <div>
            <Button variant="primary" onClick={handleShow}>
            Update
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                are you sure you want to update the contact!!
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                        handleEdit();handleClose();
                        history.push("/Admindashboard/Admincontacts");}}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
            <Link to={"/Admindashboard/Admincontacts"}>
                <Button variant="danger" type="submit" className="Btn-cancel">
                Cancel
                </Button>
            </Link>
            </div>
        </Form>
    </div>
  );
};

export default Editcontact; /* history.push("/Admindashboard")  */
