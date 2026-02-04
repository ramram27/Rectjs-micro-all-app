/* eslint-disable react-hooks/refs */
import React,{ useRef,useState,useEffect } from "react";

function UseRef() {
    const inputRef = useRef(null)
    const countChar = useRef(0)
    const [userTypeval,setUserData] = useState('')

    useEffect(()=>{
        countChar.current += 1
    })

    return(
        <div>
            <h2>User Type</h2>
            <input 
              ref={inputRef}
              value={userTypeval}
              onChange={(e)=> setUserData(e.target.value)}
             />

             <button onClick={()=> inputRef.current.Focus}>input useRef focus</button>

             <h2>{countChar.current}</h2>
        </div>
    )
}

export default UseRef;