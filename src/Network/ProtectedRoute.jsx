import React from "react";
import { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { auth } from "../App";
export const ProtectedRoute = (props) => {
  const { isauth,setisauth } = useContext(auth);

  const navigate = useNavigate()

        useEffect(() => {
          if(!isauth)
            navigate('/')
        

        }, [])
        
          return <props.component  />;

    
    
};
