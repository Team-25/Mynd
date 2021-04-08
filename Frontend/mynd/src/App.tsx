import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./App.scss";
import Home from './pages/Home';
import StudentReviewsPage from './components/Homepage/StudentReviews/student-reviews';
import HeroSection from './components/Homepage/HeroSection/user-hero-section';
import CalendarPage from './pages/CalendarPage';
import NotFound from './pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HeroSection name="Jimmy"/>
        </Route>
        <Route path="/Calendar">
          <CalendarPage />
        </Route>
        <Route exact path="/">
          {/* TODO If user logged in show Home-user, otherwise Home */}
          <Home />
        </Route>
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
