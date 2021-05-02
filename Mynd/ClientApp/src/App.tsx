import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import HeroSection from "./components/Homepage/HeroSection/user-hero-section";
import Footer from "./components/Footer/Footer";
import CalendarPage from "./pages/CalendarPage";
import ChatPage from "./pages/ChatPage";
import NotFound from "./pages/404";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login/Login";
import Spinner from "react-spinkit";
import NavbarVertical from "./components/Navbar-Vertical/NavbarVertical";
import Register from "./components/Login/Register";
import { useDispatch } from "react-redux";
import { login, logout } from "./extra/appSlice";
import ProfilePage from "./components/Profile/profile";
import NewsPage from "./pages/NewsPage";

function App() {
  // loads user from firebase
  const [user, loading] = useAuthState(auth);
  // redux stuff
  const dispatch = useDispatch();
  let displayName: string = user?.displayName || "";

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
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

  // when content is loading it shows a nice ball spinning
  if (loading) {
    return (
      <div className="loading">
        <div className="loadingContents">
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </div>
      </div>
    );
  }

  return (
    /*
      very poorly done but ensures you remain on either login or register
      will add a specific home page and a user one later
    */
    <Router>
      {!user ? (
        <>
          <div className="app-container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="*" exact={true}>
                <Redirect to="/login" />
              </Route>
            </Switch>
          </div>
        </>
      ) : (
        <>
          <NavbarVertical />
          <div className="app-container sidebar-margin">
            <Switch>
              <Route path="/login">
                <Redirect to="/" />
              </Route>
              <Route path="/register">
                <Redirect to="/" />
              </Route>
              <Route path="/home">
                <HeroSection name={displayName} />
              </Route>
              <Route path="/calendar">
                <CalendarPage />
              </Route>
              <Route path="/chat">
                <ChatPage />
              </Route>
              <Route exact path="/profile">
                <ProfilePage />
              </Route>
              <Route exact path="/news">
                <NewsPage />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*" exact={true} component={NotFound} />
            </Switch>
          </div>
        </>
      )}

      <Footer />
    </Router>
  );
}

export default App;
