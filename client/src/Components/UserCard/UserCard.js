import React from 'react'
import {toggleTrue,deleteUser,getUser} from '../../JS/Actions/userActions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
//import User from '../../../../backend/models/User'
import './UserCard.css'
import editBtn from '../../Assets/editBtn.png'
import avatar from '../../Assets/avatar.png'
import deleteBtn from '../../Assets/deleteBtn.png'

const UserCard = ({ user }) => {
    const dispatch = useDispatch()
    return(
        
        <div className="user-card">
            <img src={avatar} alt="avatar" className="avatar"/>
            <h3>{user.name}</h3>
            <span>{user.email} </span>
            <span>{user.phone} </span>
            <div className="delete-edit-btns">
            
            <img src= {deleteBtn}
            alt="delete-icon"
            onClick={()=>dispatch(deleteUser(user._id))}
            />
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