import { useState } from "react";
import './Form.css';



function TelephoneError(){
    return(
        <>
            <p>Invalid telephone Number!</p>
        </>
    );
}

function EmailError(){
    return(
        <>
            <p>Invalid email address!</p>
        </>
    )
}
function Form(){
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState({address: "", valid: false});
    const [role, setRole] = useState("role");
    const [telephone, setTelephone] = useState({number:"", valid: false})  
    const [message, setMessage] = useState("");

    const validateEmail = (email) => email.includes("@");

    const validateTelephone =(tel)=>{
        let valid = true;

        tel = tel.replace(/\s+/g, "");

        if(tel[0] === "+") tel = tel.slice(1);
        for(let c of tel){
            if(c < '0' || c >'9'){
                valid = false;
                break;
            }
        }
        console.log(valid);
        
        return valid;
    }

    const isValidForm = (e) => {
        return ( 
            firstName &&
            lastName && 
            role !== "role" &&
            telephone.valid &&
            email.valid &&
            message
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
        <div className="Form" id="Contact Me">
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
                        value={telephone.number} 
                        onChange={(e) =>{
                            setTelephone({...telephone, 
                                        number: e.target.value,
                                        valid: validateTelephone(e.target.value)});
                        }}
                        placeholder="Telephone number" />
                    {telephone.number && (!telephone.valid || telephone.number.length < 9 || telephone.number.length >13) &&
                    (( <small>⚠️Invalid telephone format⚠️</small>)) }
                </div>
                <div className="Field">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email.address} 
                        onChange={(e) =>{
                            setEmail({...email,
                                    address: e.target.value,
                                    valid: validateEmail(e.target.value)});
                        }}
                        placeholder="Email Address" />
                    {email.address && !email.valid && 
                    ( <small>⚠️Invalid email format⚠️</small>)}
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
                <button type="reset" className="Reset" onClick={clearForm}>Clear</button>
                <button type="submit" className="Submit" disabled={!isValidForm()}>Send Message!</button> 
            </div>
        </div>
    );

}


export default Form;