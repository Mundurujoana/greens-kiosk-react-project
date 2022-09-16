import React, {useEffect, useState} from 'react';


const User = () => {
const[user, setUser] = useState();
const[loading, setLoading] = useState(false);

    useEffect(() => {userData()},[])
    const userData = () => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json()) 
        .then((data) =>{
            setUser(data.users)
            setLoading(true)
            console.log("fetched data---->",user)})
        .catch(e =>{throw new Error(e.message)})
    }
if(!loading){
    console.log(`loading, ${loading}`)
    return <div>lodaing...........</div>
}
return (<div>
{user.map(item=>(
    <div key={item.id}>
<img src={item.image} alt="user profile picture"/>
<p>{item.firstname} {item.lastname}</p>
<h4>Details:</h4>
<p>Email: {item.email}</p>
<p>UserName: {item.username}</p>
<p>Age: {item.age}</p>
<p>Gender: {item.gender} </p>
<p>Address: {item.address.address}</p>
        </div>
))}
</div>
    )
}
export default User;




{/* //get data we use useEffect */}


