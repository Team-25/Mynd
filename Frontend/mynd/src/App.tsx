import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./App.scss";
import StudentReviewsPage from './components/Homepage/StudentReviews/student-reviews';
import Banner from './components/Homepage/Banner/banner';

function App() {
  return (
    <Router>
      <Banner title="Mynd" description="test test test description"/>
      <Switch>
        <Route path="/home">
          <StudentReviewsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
