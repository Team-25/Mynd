import { Link } from 'react-router-dom';

import { Avatar } from '@material-ui/core';
import React from 'react';
import img from '../../img/person1.jpg';

interface IProps {

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


    const [mobileMenuClasses, setMobileMenuClasses] = React.useState(['navbar-mobile-menu', 'hide-menu']);

    function showHideMenu() {
        if (mobileMenuClasses.includes('hide-menu')) {
            setMobileMenuClasses(['navbar-mobile-menu'])
        } else {
            setMobileMenuClasses(['navbar-mobile-menu', 'hide-menu']);
        }
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
                    <Link to="/">Temp 1</Link>
                </div>
                <div className="nav-item">
                    <Link to="/">Temp 2</Link>
                </div>
                <div className="nav-user">
                    <Link to="/">
                        <Avatar src={img} alt="user"/>
                    </Link>     
                </div>
            </div>
            <div className="navbar-mobile">
                <div className="navbar-mobile-main">
                    <Link to="/">Mynd</Link>
                    <button onClick={() => showHideMenu()}>+</button>
                </div>
                <div className={mobileMenuClasses.join(" ")}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Calendar">Calendar</Link></li>
                        <li><Link to="/">Temp 1</Link></li>
                        <li><Link to="/">Temp 2</Link></li>
                        <li><Link to="/">
                            <Avatar src={img} alt="user"/>
                        </Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;