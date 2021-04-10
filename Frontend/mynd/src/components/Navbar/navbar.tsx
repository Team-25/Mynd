import { Link } from 'react-router-dom';

import { Avatar } from '@material-ui/core';
import React from 'react';
import img from '../../img/person1.jpg';

interface IProps {

}

interface IState {
    currentDate: Date;
    selectedDate: Date;
}

const Navbar = (props: IProps) => {

    const [scrolled,setScrolled] = React.useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 1 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let navbarClasses = ['navbar'];
    if(scrolled){
        navbarClasses.push('scrolled');
    }

    return (
        <div className={navbarClasses.join(" ")}>
            <div className="navbar-inner">
            <div className="nav-brand">
                <Link to="/">Mynd</Link>
            </div>
            <div className="nav-item">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-item">
                <Link to="/Calendar">Calendar</Link>
            </div>
            <div className="nav-item">
                    Temp 1
            </div>
            <div className="nav-item">
                    Temp 2
            </div>
            <div className="nav-user">
                    <Avatar src={img} alt="user"/>
            </div>
            </div>
        </div>
    );
}

export default Navbar;