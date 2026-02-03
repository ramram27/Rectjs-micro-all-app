import React,{useState,useEffect} from "react";

const Fetchapi = () =>{
    const [users,setUsers] = useState([]);
    // const [fiterUsers,setFilterUser] = useState([])
    const [searchName,setSearchName] =useState('')

    useEffect(() =>{
       const fetchUser = async()  =>{
           try{
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await res.json()
                console.log("data",data)
                setUsers(data)
           }catch(err){
               console.log(err)
           }
       }
       fetchUser()
    },[])
     console.log(searchName)

     const filterData = users.filter((user)=> 
        user.name.toLowerCase().includes(searchName.toLowerCase()))
    return(
        <div style={{margin:'50px'}}>
            <input type="text" placeholder="user type name" 
            onChange={(e)=> setSearchName(e.target.value)}/>
          {
           filterData.length > 0 ?
            filterData.map((user)=>{

               return (
                <div key={user.id} 
                style={{border:"2px solid white",
                display:"flex", 
                justifyContent:'center',
                marginBottom:'10px'
                }}>

                    <p>{user.name}</p>   
                    <p>{user.email}</p>   
                    <p>{user.phone}</p>   

                </div>
               )
            })
            :
            <h2>No Data</h2>
          }
        </div>
    )
}

export default Fetchapi;