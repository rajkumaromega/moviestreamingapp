import React, { useEffect } from 'react';
import HomeScreen from "./screens/HomeScreen"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user)
  useEffect(()=>{
       const unsubscribe=  auth.onAuthStateChanged((userAuth) =>{
      console.log(userAuth)
      if(userAuth){
          dispatch(
            login({
                uid :userAuth.uid,
                email:userAuth.email,
            })
          );
      }
      else{
        dispatch(logout())
      }
    });
   
    
  return unsubscribe;
  },[])
  return (
    <div className="app"> 
        <Router>
          {!user ? (
            <LoginScreen />
          ):(
            <div>
            <Routes>
            <Route path="profile" element={<ProfileScreen />}></Route>
            <Route path="/" element={<HomeScreen />} />  
            </Routes>
          </div>
          )}
         
        </Router>
    </div>
  );
}

export default App;
