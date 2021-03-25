import React from 'react'
import './Home.css'

import {Link} from 'react-router-dom' 
import {toggleFalse} from '../../JS/Actions/userActions'
import {useDispatch} from 'react-redux'

const Home = () => {

const dispatch = useDispatch()

    return(
        <div>
            
            {/* user list button*/ }
            <Link to="/">
                <button className="app-btn" > User List</button>
            </Link>
            
              {/* add user button */}
            <Link to="/add_user">
                <button className="app-btn" 
                onClick={()=>dispatch(toggleFalse())}
                > Add User </button>
            </Link>
        </div>  
    )
}
export default Home