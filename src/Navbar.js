import React from 'react'
import {Link} from 'react-router-dom';
 const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                    < Link to="/">Home Page</Link>
                    
                    < Link to="/quote">Quote of the day</Link>
                    
                    < Link to="/listOfQuotes">List of Quotes</Link>
                    
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default NavBar;