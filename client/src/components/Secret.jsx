import React, { useEffect } from "react";

const Secret = ()=>{

    const callSecretPage = async ()=>{
        try {
            const res = await fetch("/secret")
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(()=>{
        callSecretPage();
    }, [])

    return (
        <div>
            secret lol ;)
        </div>
    )
}

export default Secret;