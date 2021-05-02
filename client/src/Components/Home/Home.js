import React from 'react'
import './Home.css'

import {Link} from 'react-router-dom' 
import {toggleFalse} from '../../JS/Actions/contactActions'
import {useDispatch, useSelector} from 'react-redux'

const Home = () => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
const dispatch = useDispatch()

    return(
        <div>
            
            {/* contact list button*/ }
            <Link to="Listcontacts">
                <button className="app-btn" > Contact List</button>
            </Link>
            { isAuth ? 
            (<Link to="/add_user">
                <button className="app-btn" 
                onClick={()=>dispatch(toggleFalse())}
                > Add Contact </button>
            </Link>): null}
              
        </div>  
    )
}
export default Home