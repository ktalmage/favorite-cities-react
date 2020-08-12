import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white'

}

const Navigation = (id) => (
    <div>
        <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
                background: 'darkgreen'
            }}
        >
        Home</NavLink>
        <NavLink
            to="/cities"
            exact
            style={link}
            activeStyle={{
                background: 'darkgreen'
            }}
        >
        Cities</NavLink>
       
    </div>
    )

export default Navigation