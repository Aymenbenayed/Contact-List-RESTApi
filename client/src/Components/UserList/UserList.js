import React ,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { getUsers } from '../../JS/Actions/userActions'
import UserCard from '../UserCard/UserCard'
//import usersReducer from '../../JS/Reducers/userReducer'
import './UserList.css'


const UserList = () => {
    const users=useSelector(state=> state.userReducer.users)
    
    const isLoading = useSelector(state => state.userReducer.isLoading)
    const dispatch=useDispatch()
    
    useEffect(() => {
        dispatch(getUsers())
    },[dispatch])

    
    return(
        <div className="categories-content">
            { isLoading ? <h1>estanaaaaaa</h1> : 
                <div className="users-list">
                {users.map(user => <UserCard key={user._id} user={user} />)}
                </div>
            }
        </div>
    )
}

export default UserList
