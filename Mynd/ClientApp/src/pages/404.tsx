import { Button } from "@material-ui/core";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404: Error page not available</h1>
            <p>The page you tried to access may be broken or may have been removed. </p>
            <Button onClick={() => window.history.back()} color="primary"> Go back </Button>
        </div>
    );
}

export default NotFound;