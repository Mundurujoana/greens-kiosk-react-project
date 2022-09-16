import React,{useState} from "react";
import Add from "./Add";
import './form.css';
import Navbar from "./Navbar";
import {FaFacebook, FaLinkedin, FaGoogle} from "react-icons/fa"
const back= new URL('./images/back.png',import.meta.url);


const datas = [
  {"id":1,
   "fruitName": "apples",
   "price": 20.00,
  },
  {"id":2,
  "fruitName": "Bananas",
  "price": 250.00,
  },
  {"id":3,
 "fruitName": "Mangoes",
 "price": 230.00,
 },
 {"id":4,
 "fruitName": "apples",
 "price": 420.00,
},
{"id":5,
"fruitName": "Grapes",
"price": 370.00,
},
{"id":6,
"fruitName": "Melons",
"price": 130.00,
}
]

function Forms() {
  const[email, setEmail] = useState("");
  console.log(email)
  const[password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password
    }
    alert(JSON.stringify(data));
  }

  // return(
  //   <div>
  //     {datas.map(a =>(
  //       <div key={a.id}>
  //         <p>{a.fruitName}</p>
  //         <small>{a.price}</small>
  //       </div>
  //     ) 
  //       )}
  //   </div>
  // )
  
    return (
         <div className="form-card">
            <div className="col-1">
                <h5>EddieShop</h5>
                <h3>Welcome Back</h3>
                <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
                  <label className="name">Email</label>
                    <input type="text" placeholder='name@domain.com' onChange={(e) => {setEmail(e.target.value)}} />
                    <label className="name">Password</label>
                    <input type="password" placeholder='atleast 8 characters' onChange={(e) =>{setPassword(e.target.value)}}/>
                    <div className="keep">
                    <input type="checkbox"/> <span className="check">Keep me logged in</span>
                    <p>Forgot Password</p>
                    </div>
                    <button className='btn'>Login</button>
                    
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',marginTop: 5}}>
  <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
  <div><p style={{width: '70px', textAlign: 'center'}}>OR</p></div>
  <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} /></div>

                    <div className="icons">
                    <FaFacebook/>
                    <FaLinkedin/>
                    <FaGoogle/>
                    </div>
                </form>
            </div>

            <div className="col-2">
              <p>Dont have an account? <span className="sign">Sign up</span></p> 
               <img src={back} className="eddieshop" alt="eddieshoplogo"/>
            
            {email ? <Add email ={email} /> : <Navbar/>} 
               <Add email= {email}/>
            </div>
            </div>
    )
  }
  
  export default Forms;
  