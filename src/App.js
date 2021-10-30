import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import MyOrders from "./components/MyOrders/MyOrders";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Error404 from "./components/Error404/Error404";
import AddNewService from "./components/AddNewService/AddNewService";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import AllOrders from "./components/AllOrders/AllOrders";



function App() {
  return (
    <div className="App">
          <AuthProvider>
          <Router>
             <Header></Header>
             <Switch>
               <Route exact path="/">
                   <Home></Home>
               </Route>
               <Route path="/home">
                   <Home></Home>
               </Route>
               <PrivateRoute path="/allorders">
                   <AllOrders></AllOrders>
               </PrivateRoute>
               <PrivateRoute path="/myorders">
                   <MyOrders></MyOrders>
               </PrivateRoute>   
               <PrivateRoute path="/AddNewService">
                   <AddNewService></AddNewService>
               </PrivateRoute>
               <Route path="/login">
                   <LogIn></LogIn>
               </Route> 

               <PrivateRoute path="/placeorder/:serviceId">
                <PlaceOrder></PlaceOrder>
               </PrivateRoute>
               <Route path="*">
                  <Error404></Error404>
               </Route>
             </Switch>
             <Footer></Footer>
           </Router>
          </AuthProvider>
    </div>
  );
}

export default App;
