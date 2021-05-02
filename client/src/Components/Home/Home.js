import React from 'react'
import './Home.css'

import {Link} from 'react-router-dom' 
import {toggleFalse} from '../../JS/Actions/contactActions'
import {useDispatch} from 'react-redux'

const Home = () => {

const dispatch = useDispatch()

    return(
        <div>
            
            {/* contact list button*/ }
            <Link to="Listcontacts">
                <button className="app-btn" > Contact List</button>
            </Link>

              {/* add contact button */}
            <Link to="/add_user">
                <button className="app-btn" 
                onClick={()=>dispatch(toggleFalse())}
                > Add Contact </button>
            </Link>
        </div>  
    )
}
export default Home