import React, { useEffect } from 'react';
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
import Register from './components/Login/Register';
import { useDispatch } from 'react-redux';
import { login, logout } from './extra/appSlice';

function App() {
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  let displayName: string = user?.displayName || '';

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
    <Router>
      {!user ? (
        <>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/login' />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='*' exact={true}>
              <Redirect to='/login' />
            </Route>
          </Switch>
        </>
      ) : (
        <>
          <Navbar />
          <Switch>
            <Route path='/login'>
              <Redirect to='/' />
            </Route>
            <Route path='/register'>
              <Redirect to='/' />
            </Route>
            <Route path="/home">
              <HeroSection name={displayName} />
            </Route>
            <Route path="/calendar">
              <CalendarPage />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='*' exact={true} component={NotFound} />
          </Switch>
        </>
      )}
      <Footer />
    </Router>
  );
}

export default App;