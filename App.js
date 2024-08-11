import React, { useEffect, useState } from 'react';
import { Text , View } from 'react-native';
import OnBoarding from './Components/OnBoarding';
import { AsyncStorage } from 'react-native';

export default function App() {

  let [show , setShow] = useState (false)

  
  useEffect(()=>{
    checkUser()
  })

  const checkUser = async () => {
    
    const value = await AsyncStorage.getItem('show');
    setShow(true)    
  }
  return (
    <>
   {
    show ? 
    <Text>Sign up</Text>
    : <OnBoarding/>
   }
   </>
  );
}
