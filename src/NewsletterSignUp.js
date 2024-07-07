import { useState } from "react";

const NewsletterSignUp = () => {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[identity, setIdentity] = useState("--");
  

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {name, email, identity};

        // adds blog to the json server
        fetch('http://localhost:8000/registrants', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => 
            console.log("new registrant")
        )}

    return ( 
        
        <div className="bkgd">
        <div className="signup">
        <div className="sign-up-header">
            <h1>Light a Connection with Us!</h1>
            <h3>Sign up for our newletter to stay up-to-date with our initiatives and local opportunities in STEM.</h3>
        </div>
        <form onSubmit={handleSubmit}>
            <ul className="sign-up">
                <li>
                    <label>Name: </label>
                    <input type="name" required value = {name} onChange={(e) => setName(e.target.value)}/>
                </li>
                <li>
                    <label>Email: </label>
                    <input type="email" required value = {email} onChange={(e) => setEmail(e.target.value)}></input>
                </li>
                <li>
                    <label>I am a: </label>
                    <select required value = {identity} onChange={(e) => setIdentity(e.target.value)}>
                        <option value="middleSchool">Middle School Student</option>
                        <option value="highSchool">High School Student</option>
                        <option value="parent">Parent</option>
                        <option value="other">Other</option>
                    </select>
                </li>
            </ul>
        
        <button>Register</button>

    </form>
    </div>
    </div>
     );
}
 
export default NewsletterSignUp;