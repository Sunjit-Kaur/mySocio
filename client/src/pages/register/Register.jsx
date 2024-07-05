import { useState } from "react"
import "./register.scss"
import { Link } from "react-router-dom"
import axios from "axios"
const Register = () => {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:"",
  });
  const [err, setErr] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);


  const handleChange = (e) =>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}));
  };

  const handleClick = async e=>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs)
      setIsRegistered(true);
    }
    catch(err){
      setErr(err.response.data);
    }
  };

  console.log(err);


  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>mySocio</h1>
          <p>
          Join Mysocio Today! Create your account and dive into a world of connection and creativity. 
          </p>
          <span>Already have an account?</span>
          {/* <Link to="/login"> */}
          {/* <button>Login</button> */}
          {/* </Link> */}
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          {isRegistered ? (
            <p>Registered!</p> // Show this message if registration is successful
          ) : 
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="email" placeholder="Email" name="email" onChange={handleChange} />
            <input type="password" placeholder="Password"name="password" onChange={handleChange} />
            <input type="text" placeholder="Name" name="name" onChange={handleChange} />

            {err && err}
            <button onClick={handleClick}>Register</button>
          </form>
        }
        </div>
      </div>
    </div>
  )
}

export default Register
