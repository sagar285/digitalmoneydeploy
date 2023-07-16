import React from 'react';
import AboutUse from "./pages/AboutUse";
import Contactus from "./pages/Contactus";
import Main from "./pages/Main.jsx";
import {Routes,Route} from "react-router-dom"
import Ourproducts from "./pages/Ourproducts";
import Desktop2 from "./pages/Desktop2";
import Desktop3 from "./pages/Desktop3";
import Desktop4 from "./pages/Desktop4";
import Desktop5 from "./pages/Desktop5";
import Desktop6 from "./pages/Desktop6";
import Desktop7 from "./pages/Desktop7";
import Desktop8 from "./pages/Desktop8";
import Desktop9 from "./pages/Desktop9";
import Desktop10 from "./pages/Desktop10";
import Desktop11 from "./pages/Desktop11";
import Desktop12 from "./pages/Desktop12";
import Desktop13 from "./pages/Desktop13";
import Desktop14 from "./pages/Desktop14";
import Desktop15 from "./pages/Desktop15";
import Desktop16 from "./pages/Desktop16";
import UserRoute from './PrivateRoute/UserRoute';
import Adminroute from './PrivateRoute/Adminroute';
import Navbar from './Layout/Navbar';
import Adminpanel from './Admin/Adminpanel';
import Adminprofile from './Admin/Adminprofile';
import ActiveUsers from './Admin/ActiveUsers';
import Addproduct from './Admin/Addproduct';
import Editproducts from './Admin/Editproducts';
import Reachargehistory from './Admin/Reachargehistory';
import Rechargerequest from './Admin/Rechargerequest';
import UpdateProduct from './Admin/UpdateProduct';
import User from './Admin/User';
import UsersReachargehistory from './Admin/UsersReachargehistory';
import Userswithdrawlhisotry from './Admin/Userswithdrawlhisotry';
import Withdrawhisotry from './Admin/Withdrawhisotry';
import Withdrawrequest from './Admin/Withdrawrequest';
import Allusers from './Admin/Allusers';
import UserWithdrawhisotry from './pages/UserWithdrawhistory';


function App() {
  return (
   <>
   <div>
    <Navbar/>
   <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/about" element={<AboutUse/>}/>
    <Route path="/contact" element={<Contactus/>}/>
    <Route path="/ourproducts" element={<Ourproducts/>}/>
    <Route path="/desktop10" element={<Desktop10/>}/>
    <Route path="/desktop16" element={<Desktop16/>}/>
    <Route path="/contactpage" element={<Desktop7/>}/>
    <Route path="/aboutpage" element={<Desktop14/>}/>
    <Route path="/term&cond" element={<Desktop15/>}/>
    {/* admin routes justfor testing */}




     {/* <Route path='/adminpanel' element={<Adminpanel/>}/>
     <Route path='/adminprofile' element={<Adminprofile/>}/>
     <Route path='/activeusers' element={<ActiveUsers/>}/>
     <Route path='/addproduct' element={<Addproduct/>}/>
     <Route path='/editproducts' element={<Editproducts/>}/>
     <Route path='/rechargehisotry' element={<Reachargehistory/>}/>
     <Route path='/rechargerequest' element={<Rechargerequest/>}/>
     <Route path='/updateproducts' element={<UpdateProduct/>}/>
     <Route path='/userdetail' element={<User/>}/>
     <Route path='/usersrechargehistory' element={<UsersReachargehistory/>}/>
     <Route path='/userswithdrawhistory' element={<Userswithdrawlhisotry/>}/>
     <Route path='/withdrawhistory' element={<Withdrawhisotry/>}/>
     <Route path='/withdrawrequest' element={<Withdrawrequest/>}/> */}






{/* user private routes */}

<Route path="/auth" element={<UserRoute/>}>
    <Route path="earning" element={<Desktop2/>}/>
    <Route path="pay" element={<Desktop3/>}/>
    <Route path="withdrawrequest" element={<Desktop4/>}/>
    <Route path="availableprojects" element={<Desktop5/>}/>
    <Route path="bankdetail" element={<Desktop6/>}/>
    <Route path="levels" element={<Desktop8/>}/>
    <Route path="liveprojects" element={<Desktop9/>}/>
    <Route path="userprofile" element={<Desktop11/>}/>
    <Route path="dailyteamincome" element={<Desktop12/>}/>
    <Route path="dailyearning" element={<Desktop13/>}/>
    <Route path='userwithdrawhistory' element={<UserWithdrawhisotry/>}/>
</Route>


{/* Admin private route */}

<Route path="/admin" element={<Adminroute/>}>
<Route path='adminpanel' element={<Adminpanel/>}/>
     <Route path='adminprofile' element={<Adminprofile/>}/>
     <Route path='activeusers' element={<ActiveUsers/>}/>
     <Route path='addproduct' element={<Addproduct/>}/>
     <Route path='editproducts' element={<Editproducts/>}/>
     <Route path='rechargehisotry' element={<Reachargehistory/>}/>
     <Route path='rechargerequest' element={<Rechargerequest/>}/>
     <Route path='updateproducts/:id' element={<UpdateProduct/>}/>
     <Route path='userdetail/:id' element={<User/>}/>
     <Route path='usersrechargehistory' element={<UsersReachargehistory/>}/>
     <Route path='userswithdrawhistory' element={<Userswithdrawlhisotry/>}/>
     <Route path='withdrawhistory' element={<Withdrawhisotry/>}/>
     <Route path='withdrawrequest' element={<Withdrawrequest/>}/>
     <Route path='allusers' element={<Allusers/>}/>
     <Route path="ourproducts" element={<Ourproducts/>}/>
</Route>
   </Routes>
    </div>
   </>
  );
}

export default App;
