import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./App.css";
import StudentReviewsPage from './components/Homepage/StudentReviews/student-reviews';

function App() {
  return (
    <Router>
      <h1>Mynd</h1>
      <Switch>
        <Route path="/home">
          <StudentReviewsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
