import React from 'react';
import { useState } from 'react';

function SignIn () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  const createUser = async (e) =>{
    e.preventDefault();
    const data = {password, email, role:"user", name:"As", lastName: "aaa"};
    console.log(data)
      try {
        const response = await fetch("/api/v1/auth/register/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: 'cors',
          credentials: 'include',
          body: JSON.stringify(data),
        });
  
        const parseResponse = await response.json();
  
        if (!parseResponse.success) {
          throw new Error(`${response.status} - ${parseResponse.message}`);
        }
        console.log(parseResponse);
      } catch (err) {
        console.log(err);
      }
    };
  
  return(
    <form>
      <input type="text" value={email} placeholder="email" onChange={handleEmail}/>
      <input type="text" placeholder="password" onChange={handlePassword}/>
      <button onClick={createUser}>Utwórz</button>
    </form>
  )
}

export default SignIn;