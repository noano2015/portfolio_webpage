import { useState } from "react";
import './Form.css';

function Form(){
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("role");
    const [telephone, setTelephone] = useState("")  
    const [message, setMessage] = useState("");


    const isValidForm = () => {
        return ( 
            firstName &&
            lastName && 
            role !== "role" 
          ); 
    }

    const clearForm = () => { 
        setFirstName(""); 
        setLastName(""); 
        setEmail(""); 
        setRole("role");
        setMessage(""); 
        setTelephone("");
    }; 

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        alert("Message sent!"); 
        clearForm(); 
      }; 
    return(
        <div className="Form">
            <h2>Contact Me</h2>
            <div className="Grid">
                <div className="Field">
                    <label>First Name</label>
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={(e) =>{
                            setFirstName(e.target.value);
                        }}
                        placeholder="First Name" />
                </div>
                <div className="Field">
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={(e) =>{
                            setLastName(e.target.value);
                        }}
                        placeholder="Last Name" />
                </div>
                <div className="Field">
                    <label>Telephone</label>
                    <input 
                        type="telephone" 
                        value={telephone} 
                        onChange={(e) =>{
                            setTelephone(e.target.value);
                        }}
                        placeholder="Telephone number" />
                </div>
                <div className="Field">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) =>{
                            setEmail(e.target.value);
                        }}
                        placeholder="Email Address" />
                </div>
                <div className="Field"> 
                <label> 
                        Role 
                </label> 
                <select value={role} onChange={(e) => setRole(e.target.value)}> 
                        <option value="role">Role</option> 
                        <option value="individual">Individual</option> 
                        <option value="business">Business</option> 
                </select> 
                </div> 
                <div className="Field"> 
                <label> 
                        Message
                </label> 
                <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        placeholder="Type your Message here">
                    </textarea>
                </div>
            </div>
            <div className="container">
                <button type="reset" onClick={clearForm}>Clear</button>
                <button type="submit" disabled={!isValidForm()}>Send Message!</button> 
            </div>
        </div>
    );

}


export default Form;