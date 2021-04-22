import './NavbarVertical.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain, faCalendar, faComment, faComments, faHome, faInbox, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'


import { NavLink, Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


interface IProps {

}

const Navbar = (props: IProps) => {
    const [user] = useAuthState(auth);
    let photoURL: string = user?.photoURL || '';
    let displayName: string = user?.displayName || '';

    return (
        <nav id="navbar-vertical">
            <ul className="nv-nav">
                <li className="nv-logo nv-item">
                    <Link to="/" >
                        <FontAwesomeIcon icon={faBrain} />
                        <span className="link-text">Mynd</span>
                    </Link>
                </li>
                <li className="nv-item">
                    <NavLink to="/home" activeClassName="active">
                        <FontAwesomeIcon icon={faHome} />
                        <span className="link-text">Home</span>
                    </NavLink>
                </li>
                <li className="nv-item">
                    <NavLink to="/news" activeClassName="active">
                        <FontAwesomeIcon icon={faNewspaper} />
                        <span className="link-text">News</span>
                    </NavLink>
                </li>
                <li className="nv-item">
                    <NavLink to="/chat" activeClassName="active">
                        <FontAwesomeIcon icon={faComments} />
                        <span className="link-text">Chat</span>
                    </NavLink>
                </li>
                <li className="nv-item">
                    <NavLink to="/inbox" activeClassName="active">
                        <FontAwesomeIcon icon={faInbox} />
                        <span className="link-text">Inbox</span>
                    </NavLink>
                </li>
                <li className="nv-item">
                    <NavLink to="/calendar" activeClassName="active">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className="link-text">Calendar</span>
                    </NavLink>
                </li>
                <li className="nv-item">
                    <NavLink to="/profile" activeClassName="active">
                        <img src={photoURL} alt={displayName} className="avatar" />
                        <span className="link-text">Profile</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;