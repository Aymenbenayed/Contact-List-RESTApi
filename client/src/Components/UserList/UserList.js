import React ,{ useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { getContacts } from '../../JS/Actions/contactActions'
import ContactCard from '../ContactCard/ContactCard'
import Home from '../Home/Home'
import Loading from '../Spinner/Spinner';
import './UserList.css'


const UserList = () => {
    const contacts=useSelector(state=> state.contactReducer.contacts)

    const loading = useSelector(state => state.contactReducer.loading)
    const dispatch=useDispatch()
    
    useEffect(() => {
        dispatch(getContacts())
    },[dispatch])

    
    return(
        <div className="categories-content">
            <Home />
            { loading ? <Loading /> : 
                <div className="users-list">
                {contacts.map(contact => <ContactCard key={contact._id} contact={contact} />)}
                </div>
            }
        </div>
    )
}

export default UserList
