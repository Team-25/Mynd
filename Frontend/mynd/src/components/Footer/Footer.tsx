import { Button } from '@material-ui/core';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

interface IProps {
}

const Footer = (props: IProps) => {
    const [user] = useAuthState(auth);

    return (
        // mostly just used for checking if thing worked
        <footer>
            <div className="footerLeft">
                This is a footer.
            </div>
            <div className="footerCenter">
                <Link to='/home'>
                    Home
                </Link>
                <Link to='/calendar'>
                    Calendar
                </Link>
            </div>
            <div className="footerRight">
                {user ? (
                    <Button onClick={() => auth.signOut()}>
                        Sign Out {user?.displayName}
                    </Button>
                ) : (
                    <p>Logged Out</p>
                )}
            </div>
        </footer>
    );
};

export default Footer;
