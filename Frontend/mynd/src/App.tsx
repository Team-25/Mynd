import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./App.scss";
import StudentReviewsPage from './components/Homepage/StudentReviews/student-reviews';
import HeroSection from './components/Homepage/HeroSection/user-hero-section'

function App() {
  return (
    <Router>
      <h1>Mynd</h1>
      <Switch>
        <Route path="/home">
          <HeroSection name="Alex"/>
          <StudentReviewsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
