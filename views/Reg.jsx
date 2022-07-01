const React = require('react');
const Layout = require('./Layout');

function Reg() {
  return (
    <Layout>
      <div  className="reg-form">
      <form method="post" action="/reg">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Your name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
     
    </Layout>

  );
}
module.exports = Reg;