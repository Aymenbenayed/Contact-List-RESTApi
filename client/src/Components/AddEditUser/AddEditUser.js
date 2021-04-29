import {Button, Form, Modal} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import React, {useState,useEffect} from 'react'
import {addUser,editUser, videErrors} from '../../JS/Actions/userActions'
import './AddEditUser.css'
import addBtn from '../../Assets/addBtn.png'
import editBtn from '../../Assets/editBtn.png'
import Errors from '../Errors/Erorrs'

const AddEditUser = ({history}) => { 
    const isEdit = useSelector(state => state.userReducer.isEdit)
    const errors = useSelector((state) => state.userReducer.errors);
    const userEdit = useSelector(state => state.userReducer.user)
    useEffect(() => {
        isEdit? setUser(userEdit) : setUser({ name:"" , pseudo:"",email:"" , phone: 0 ,  adress:""})
        }
    ,[isEdit,userEdit]) 

    const [user, setUser] = useState({name:"" , pseudo:"" , email:"" , phone:0 , adress:""})
    const dispatch = useDispatch()

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value })
    }
    useEffect(() => {
        return () => {
          dispatch(videErrors());
        };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    

      //confirmation Edit 
      const handleEdit = () => {
        dispatch(editUser(user._id, user));
      };
    
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true); 


    return (
        <Form className="my-form">
        {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
            {/*input name*/ }
        <Form.Group controlId="formBasicName">
            <Form.Control type="Name" 
            placeholder="Enter User name..." 
            name="name"
            value={user.name}
            onChange={handleChange}/>
            <Form.Text className="text-muted">Name is required!</Form.Text>
        </Form.Group>
                {/* Pseudo */}
        <Form.Group controlId="formBasicName">
            <Form.Control type="Name" 
            placeholder="Enter User pseudo..." 
            name="pseudo"
            value={user.pseudo}
            onChange={handleChange}/>
            <Form.Text className="text-muted">Pseudo is required!</Form.Text>
        </Form.Group>

            {/* input email */}
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="Email" 
            placeholder="enter User email..."
            name="email"
            value={user.email}
            onChange={handleChange}
            />
            <Form.Text className="text-muted">Email is required!</Form.Text>
        </Form.Group>
            {/* input phone */}

        <Form.Group controlId="formBasicphone">
            <Form.Control type="Number" 
            placeholder="enter User phone..." 
            name="phone"
            value={user.phone}
            onChange={handleChange}/>
            <Form.Text className="text-muted">Phone</Form.Text>
        </Form.Group>

        {/* Pseudo */}
        <Form.Group controlId="formBasicName">
            <Form.Control type="Name" 
            placeholder="Enter User adress..." 
            name="adress"
            value={user.adress}
            onChange={handleChange}/>
            <Form.Text className="text-muted">Adress </Form.Text>
        </Form.Group>


        {/* add or edit button */}
        {isEdit ? 
            <div>
            <img src={editBtn} alt="edit-icon" className="edit-btn" onClick={handleShow}
            />
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                are you sure you want to update the user!!
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => {
                        handleEdit();handleClose();
                        history.push("/");}}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </div>

            :
            <img src= {addBtn} alt="delete-icon" className="add-btn"
                onClick={()=> {dispatch(addUser(user,history))} }
            />
        }
</Form>
)}

export default AddEditUser