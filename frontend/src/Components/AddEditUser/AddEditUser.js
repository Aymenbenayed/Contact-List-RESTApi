import {Form} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import React, {useState,useEffect} from 'react'
import {addUser,editUser} from '../../JS/Actions/userActions'
import './AddEditUser.css'
import addBtn from '../../Assets/addBtn.png'
import editBtn from '../../Assets/editBtn.png'

const AddEditUser = ({history}) => { 
    const isEdit = useSelector(state => state.userReducer.isEdit)

    const userEdit = useSelector(state => state.userReducer.user)
    useEffect(() => {
        isEdit? setUser(userEdit) : setUser({ name:"" , email:"" , phone: 0 })
        }
    ,[isEdit,userEdit]) 

    const [user, setUser] = useState({name:"",email:"",phone:0})
    const dispatch = useDispatch()



    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value })
    }

    return (
        <Form className="my-form">
        
            {/*input name*/ }
        <Form.Group controlId="formBasicName">
            <Form.Control type="Name" 
            placeholder="Enter User name..." 
            name="name"
            value={user.name}
            onChange={handleChange}
            />
            <Form.Text className="text-muted">Name is required!</Form.Text>
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
            onChange={handleChange}
            />
            <Form.Text className="text-muted">Phone</Form.Text>
        </Form.Group>
        
        {/* add or edit button */}
        {isEdit ? 
            <img src={editBtn} alt="edit-icon" className="edit-btn"
                onClick={()=> {dispatch(editUser(user._id, user)); history.push("/")} }
            />
            :
            <img src= {addBtn} alt="delete-icon" className="add-btn"
                onClick={()=> {dispatch(addUser(user)); history.push("/")} }
            />
        }
</Form>
)}

export default AddEditUser