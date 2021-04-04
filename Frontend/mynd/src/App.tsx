import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./App.scss";
import StudentReviewsPage from './components/Homepage/StudentReviews/student-reviews';
import Banner from './components/Homepage/Banner/banner';

function App() {
  return (
    <Router>
      <h1>Mynd</h1>
      <Banner />
      <Switch>
        <Route path="/home">
          <StudentReviewsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
