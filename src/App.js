import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './component/Home/Navbar/Navbar';
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import About from './component/Home/About/About';
import Review from './component/User/Review/Review';
import Book from './component/User/Book/Book';
import BookingList from './component/User/BookingList/BookingList';
import AddServices from './component/Admin/AddServices/AddServices';
import ManageService from './component/Admin/ManageService/ManageService';
import OrderList from './component/Admin/OrderList/OrderList';
import Admin from './component/Admin/Admin/Admin';
import MakeAdmin from './component/Admin/MakeAdmin/MakeAdmin';
import Dashboard from './component/Dashboard/Dashboard';
import Services from './component/Home/Services/Services';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path="/orderList">
              <OrderList />
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddServices/>
            </PrivateRoute>
            <PrivateRoute path="/manageService">
              <ManageService />
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review />
            </PrivateRoute>
            <PrivateRoute path="/book/:id">
              <Book />
            </PrivateRoute>
            <PrivateRoute path="/bookingList">
              <BookingList />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/services">
              <Services/>
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
