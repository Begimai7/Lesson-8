import { useEffect, useState } from "react"
import { Card } from "../UI/Card/Card"


export const Users =()=>{
    const [users , setUsers] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{ 
        setUsers(data)
    })
    .catch((error)=> console.error(error))
   }, [])
    return(
        <Card> 
            <h1 >Users ! </h1>

{users.map((user)=>(
<li key={user.id}>{[user.name,"  ", user.username , "  ", user.email , "  " , user.address.street, "  ", user.phone , "  " , user.website]}</li>

))}

</Card>
   
    ) 
} 