import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../App';

const Logout = ()=>{
    // promises
    const navigate = useNavigate();

    const {state,dispatch} = useContext(UserContext);

    useEffect(()=>{
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept : "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res)=>{
            dispatch({type:"USER", payload:false});
            navigate("/register", {replace:true});
            if(res.status !== 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        })
    }); 
    return (
        <>
            <h1>Logout ka page</h1>
        </>
    )
}

export default Logout;