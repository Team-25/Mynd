import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./App.scss";
import Home from './pages/Home';
import HeroSection from './components/Homepage/HeroSection/user-hero-section';
import Footer from './components/Footer/Footer';
import CalendarPage from './pages/CalendarPage';
import NotFound from './pages/404';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login/Login';
import Spinner from 'react-spinkit';
import Navbar from './components/Navbar/navbar';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="loading">
        <div className="loadingContents">
          <Spinner
            name='ball-spin-fade-loader'
            color='purple'
            fadeIn='none'
          />
        </div>
      </div>
    );
  }

  return (
    <main>

      <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <HeroSection name="Jimmy" />
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

        <Footer />
      </Router>
    </main>
  );
}

export default App;
