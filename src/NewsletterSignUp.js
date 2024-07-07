
const NewsletterSignUp = () => {

    return ( 
        
        <div className="bkgd">
        <div className="signup">
        <div className="sign-up-header">
            <h1>Light a Connection with Us!</h1>
            <h3>Sign up for our newletter to stay up-to-date with our initiatives and local opportunities in STEM.</h3>
        </div>
        <form action="https://formspree.io/f/mrgnlner" method="POST">
            <ul className="sign-up">
                <li>
                <label class="form-input">Name <input type="name" name="name" required></input></label>
                </li>
                <li>
                    <label class="form-input">Email <input type="email" name="email" required></input></label>
                </li>
                <li>
                    <button type="submit">Register</button>
                </li>
            </ul>
        
    </form>
    </div>
    </div>
     );
}
 
export default NewsletterSignUp;