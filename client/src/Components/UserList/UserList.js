import React ,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { getContacts } from '../../JS/Actions/contactActions'
import ContactCard from '../ContactCard/ContactCard'
import './UserList.css'


const UserList = () => {
    const contacts=useSelector(state=> state.contactReducer.contacts)
    
    const isLoading = useSelector(state => state.contactReducer.isLoading)
    const dispatch=useDispatch()
    
    useEffect(() => {
        dispatch(getContacts())
    },[dispatch])

    
    return(
        <div className="categories-content">
            { isLoading ? <h1>estanaaaaaa</h1> : 
                <div className="users-list">
                {contacts.map(contact => <ContactCard key={contact._id} contact={contact} />)}
                </div>
            }
        </div>
    )
}

export default UserList
