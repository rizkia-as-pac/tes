import React from "react";
import PropTypes from 'prop-types'
import useInput from "../hooks/useInput";
function RegisterInput ({register}){
    const [email,onEmailChange] = useInput("");
    const [password,onPasswordChange]= useInput("");
    const [name,onNameChange] = useInput("");
     function onSubmitHandler(event){
        event.preventDefault();
            register({name,password,email})
    }
        return (
          <form onSubmit={onSubmitHandler} className='register-input'>
            <input type="text" placeholder="Nama" value={name} onChange={onNameChange} />
            <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
            <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={onPasswordChange} />
            <button>Register</button>
          </form>
        )
      }

     
    RegisterInput.propTypes = {
      register: PropTypes.func.isRequired,
    };
     
    export default RegisterInput;
