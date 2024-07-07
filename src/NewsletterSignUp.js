
const NewsletterSignUp = () => {
  return ( 
    <div className="container py-5 bkgd">
      <div className="row justify-content-center signup">
        <div className="col-8">
            <div className="card-body">
              <div className="text-center mb-4">
                <h1>Light a Connection with Us!</h1>
                <h3>Sign up for our newsletter to stay up-to-date with our initiatives and local opportunities in STEM.</h3>
              </div>
              <form action="https://formspree.io/f/mrgnlner" method="POST">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" required />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSignUp;
