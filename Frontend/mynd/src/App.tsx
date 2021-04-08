import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./App.scss";
import Home from './pages/Home';
import HeroSection from './components/Homepage/HeroSection/user-hero-section';
import Footer from './components/Footer/Footer';


import NotFound from './pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HeroSection name="Jimmy"/>
        </Route>
        <Route exact path="/">
          {/* TODO If user logged in show Home-user, otherwise Home */}
          <Home />
        </Route>
        <Route path='*' exact={true} component={NotFound} />
      </Switch>

      <Footer />
    </Router>
    
  );
}

export default App;
